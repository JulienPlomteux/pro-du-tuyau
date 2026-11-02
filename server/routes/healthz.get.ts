import { mkdir, readFile, unlink, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { setResponseStatus, type H3Event } from 'h3'

// Kubernetes liveness/readiness probe.
// Mirrors the TerrasseMTL pattern: 503 when a real dependency is broken,
// 200 "degraded" when the app can self-heal (Kube must not drop the pod).
export default defineEventHandler(async (event: H3Event) => {
  const dataDir = (useRuntimeConfig().dataDir as string) || './server/data'
  const file = path.resolve(dataDir, 'rdv.json')

  // 1) The booking endpoint persists to dataDir — it must be writable.
  try {
    await mkdir(dataDir, { recursive: true })
    const probe = path.join(dataDir, '.healthz-probe')
    await writeFile(probe, 'ok', 'utf8')
    await unlink(probe)
  }
  catch (err) {
    setResponseStatus(event, 503)
    return {
      status: 'error',
      reason: `Data directory not writable: ${dataDir}`,
      detail: String(err),
      timestamp: new Date().toISOString(),
    }
  }

  // 2) The submission store: absent = fresh install (ok), corrupt = degraded.
  let requests = 0
  let degraded = false
  try {
    const parsed = JSON.parse(await readFile(file, 'utf8')) as unknown
    requests = Array.isArray(parsed) ? parsed.length : 0
    degraded = !Array.isArray(parsed)
  }
  catch {
    try {
      await readFile(file, 'utf8')
      degraded = true // present but unreadable — next write self-heals
    }
    catch {
      // file absent — fresh install, fine
    }
  }

  if (degraded) setResponseStatus(event, 200) // keep the pod up; API self-heals

  return {
    status: degraded ? 'degraded' : 'ok',
    timestamp: new Date().toISOString(),
    requests,
  }
})
