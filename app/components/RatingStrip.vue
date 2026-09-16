<template>
  <section class="bg-bone py-10">
    <div class="mx-auto flex max-w-7xl flex-col items-center justify-center gap-6 px-4 sm:flex-row sm:gap-10 lg:px-8">
      <!-- Google -->
      <div class="flex items-center gap-3">
        <span class="flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink shadow-md" aria-hidden="true">
          <svg viewBox="0 0 24 24" class="h-5 w-5">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15A11 11 0 0 0 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
          </svg>
        </span>
        <div class="text-left">
          <p class="flex items-center gap-1 text-sm font-semibold text-ink">
            Google <StarRow /> <span class="text-ink-muted">({{ t('ratings.googleCount') }})</span>
          </p>
          <p class="text-xs font-medium text-blaze">{{ t('ratings.googleScore') }}</p>
        </div>
      </div>

      <span class="hidden h-10 w-px bg-ink/10 sm:block" aria-hidden="true" />

      <!-- Facebook -->
      <div class="flex items-center gap-3">
        <span class="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md" aria-hidden="true">
          <svg viewBox="0 0 24 24" class="h-5 w-5" fill="#1877F2"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07"/></svg>
        </span>
        <div class="text-left">
          <p class="flex items-center gap-1 text-sm font-semibold text-ink">
            Facebook <StarRow /> <span class="text-ink-muted">({{ t('ratings.facebookCount') }})</span>
          </p>
          <p class="text-xs font-medium text-blaze">{{ t('ratings.facebookScore') }}</p>
        </div>
      </div>

      <span class="hidden h-10 w-px bg-ink/10 sm:block" aria-hidden="true" />

      <!-- BBB -->
      <div class="flex items-center gap-3">
        <span class="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[11px] font-black tracking-tight text-[#0033A0] shadow-md" aria-hidden="true">
          BBB
        </span>
        <div class="text-left">
          <p class="text-sm font-semibold text-ink">Better Business Bureau</p>
          <p class="text-xs font-medium text-ink-muted">
            {{ t('ratings.bbbRating') }} — {{ t('ratings.bbbCount') }}
          </p>
        </div>
      </div>

      <span class="nav-type hidden rounded-pill border-2 border-ink/15 px-5 py-2 text-[13px] tracking-[0.16em] text-ink/70 md:inline-block">
        {{ t('ratings.pill') }}
      </span>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
