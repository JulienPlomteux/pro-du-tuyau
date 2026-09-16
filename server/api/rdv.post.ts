import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { randomUUID } from 'node:crypto'

interface RdvPayload {
  type?: string
  name?: string
  phone?: string
  email?: string
  service?: string
  message?: string
  day?: string
  slot?: string
  locale?: string
}

export default defineEventHandler(async (event) => {
  const body = await readBody<RdvPayload>(event).catch(() => null)

  const name = body?.name?.trim()
  const phone = body?.phone?.trim()
  const email = body?.email?.trim()
  const type = body?.type === 'contact' ? 'contact' : 'rdv'

  if (!name || !phone || (!type && !email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request',
      message: 'Le nom et le téléphone sont requis.',
    })
  }

  const phoneOk = /^\+?[\d\s().-]{7,20}$/.test(phone)
  if (!phoneOk) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request',
      message: 'Numéro de téléphone invalide.',
    })
  }

  const record = {
    id: randomUUID(),
    createdAt: new Date().toISOString(),
    type,
    name,
    phone,
    email: email || undefined,
    service: body?.service || undefined,
    message: body?.message || undefined,
    day: body?.day || undefined,
    slot: body?.slot || undefined,
    locale: body?.locale || 'fr',
  }

  const dataDir = (useRuntimeConfig().dataDir as string) || './server/data'
  const file = path.resolve(dataDir, 'rdv.json')

  try {
    await mkdir(path.dirname(file), { recursive: true })
    let entries: unknown[] = []
    try {
      entries = JSON.parse(await readFile(file, 'utf8')) as unknown[]
    }
    catch {
      entries = []
    }
    entries.push(record)
    await writeFile(file, JSON.stringify(entries, null, 2), 'utf8')
  }
  catch (err) {
    console.error('[rdv] failed to persist', err)
  }

  setResponseStatus(event, 201)
  return {
    ok: true,
    status: 'ok',
    id: record.id,
    message: type === 'rdv'
      ? 'Votre demande de rendez-vous a bien été reçue.'
      : 'Votre message a bien été envoyé.',
  }
})
