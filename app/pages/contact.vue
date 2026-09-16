<template>
  <div>
    <!-- Texture hero -->
    <section class="tex-dark py-14 lg:py-20">
      <div class="mx-auto max-w-7xl px-4 lg:px-8">
        <h1 class="display-outline text-4xl sm:text-5xl lg:text-6xl">
          {{ t('contact.heroTitle') }}
        </h1>
        <p class="mt-5 max-w-2xl text-base leading-relaxed text-bone/80 sm:text-lg">
          {{ t('contact.intro') }}
        </p>
      </div>
    </section>

    <section class="bg-bone py-14 lg:py-20">
      <div class="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1fr_1.2fr] lg:px-8">
        <!-- Info -->
        <div class="space-y-4" data-reveal>
          <a
            :href="site.phoneHref"
            class="flex items-center gap-4 rounded-xl border border-ink/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blaze/10 text-blaze">
              <PhoneIcon class="h-5 w-5" />
            </span>
            <span>
              <span class="block text-xs font-semibold uppercase tracking-wider text-ink-muted">
                {{ t('contact.infoPhone') }}
              </span>
              <span class="nav-type block text-2xl tracking-[0.06em] text-ink">
                {{ site.phone }}
              </span>
            </span>
          </a>

          <div class="flex items-center gap-4 rounded-xl border border-ink/10 bg-white p-6 shadow-sm">
            <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blaze/10 text-blaze">
              <ClockIcon class="h-5 w-5" />
            </span>
            <span>
              <span class="block text-xs font-semibold uppercase tracking-wider text-ink-muted">
                {{ t('contact.infoHours') }}
              </span>
              <span class="text-base font-semibold text-ink">
                {{ t('contact.infoHoursValue') }}
              </span>
            </span>
          </div>

          <div class="flex items-center gap-4 rounded-xl border border-ink/10 bg-white p-6 shadow-sm">
            <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blaze/10 text-blaze">
              <MapPinIcon class="h-5 w-5" />
            </span>
            <span>
              <span class="block text-xs font-semibold uppercase tracking-wider text-ink-muted">
                {{ t('contact.infoAreas') }}
              </span>
              <span class="text-base font-semibold text-ink">
                {{ t('contact.infoAreasValue') }}
              </span>
            </span>
          </div>
        </div>

        <!-- Form -->
        <form
          class="rounded-2xl border border-ink/10 bg-white p-7 shadow-sm sm:p-9"
          data-reveal
          @submit.prevent="submit"
        >
          <h2 class="nav-type mb-6 text-2xl tracking-[0.08em] text-ink">
            {{ t('contact.formTitle') }}
          </h2>
          <div class="grid gap-4 sm:grid-cols-2">
            <label class="block">
              <span class="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink-muted">
                {{ t('contact.form.name') }}
              </span>
              <input
                v-model.trim="form.name"
                type="text"
                required
                class="w-full rounded-lg border border-ink/15 bg-bone px-4 py-3 text-sm text-ink focus:border-blaze focus:ring-2 focus:ring-blaze/20 focus:outline-none"
              >
            </label>
            <label class="block">
              <span class="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink-muted">
                {{ t('contact.form.email') }}
              </span>
              <input
                v-model.trim="form.email"
                type="email"
                class="w-full rounded-lg border border-ink/15 bg-bone px-4 py-3 text-sm text-ink focus:border-blaze focus:ring-2 focus:ring-blaze/20 focus:outline-none"
              >
            </label>
            <label class="block sm:col-span-2">
              <span class="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink-muted">
                {{ t('contact.form.phone') }}
              </span>
              <input
                v-model.trim="form.phone"
                type="tel"
                class="w-full rounded-lg border border-ink/15 bg-bone px-4 py-3 text-sm text-ink focus:border-blaze focus:ring-2 focus:ring-blaze/20 focus:outline-none"
              >
            </label>
            <label class="block sm:col-span-2">
              <span class="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-ink-muted">
                {{ t('contact.form.message') }}
              </span>
              <textarea
                v-model.trim="form.message"
                rows="5"
                required
                class="w-full rounded-lg border border-ink/15 bg-bone px-4 py-3 text-sm text-ink focus:border-blaze focus:ring-2 focus:ring-blaze/20 focus:outline-none"
              />
            </label>
          </div>
          <button
            type="submit"
            :disabled="submitting"
            class="nav-type mt-6 w-full rounded-pill bg-blaze px-8 py-4 text-lg tracking-[0.1em] text-white transition-all hover:bg-blaze-dark disabled:cursor-wait disabled:opacity-60"
          >
            {{ submitting ? '…' : t('contact.form.submit') }}
          </button>
          <p v-if="submitted" class="mt-4 rounded-lg bg-blaze/10 px-4 py-3 text-sm font-medium text-ink" role="status">
            {{ t('contact.form.success') }}
          </p>
          <p v-else-if="error" class="mt-4 rounded-lg bg-blaze/10 px-4 py-3 text-sm font-medium text-blaze" role="alert">
            {{ t('contact.form.error') }}
          </p>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const site = useSite()

const submitting = ref(false)
const submitted = ref(false)
const error = ref(false)

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: '',
})

async function submit() {
  submitting.value = true
  error.value = false
  try {
    const res = await $fetch('/api/rdv', {
      method: 'POST',
      body: { type: 'contact', ...form.value, locale: locale.value },
    })
    submitted.value = !!(res && (res.ok === true || res.status === 'ok'))
    if (!submitted.value) error.value = true
  }
  catch {
    error.value = true
  }
  finally {
    submitting.value = false
  }
}

useHead({
  title: () => `${t('contact.heroTitle')} | Pro du Tuyau`,
  meta: [
    { name: 'description', content: () => t('contact.intro') },
  ],
  htmlAttrs: {
    lang: () => (locale.value === 'fr' ? 'fr-CA' : 'en-CA'),
  },
})
</script>
