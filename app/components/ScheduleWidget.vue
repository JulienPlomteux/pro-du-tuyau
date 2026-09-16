<template>
  <div class="w-full">
    <div class="mx-auto max-w-4xl" data-reveal>
      <span class="nav-type inline-block rounded-pill border-2 border-white/50 px-5 py-1.5 text-[13px] tracking-[0.18em] text-white">
        {{ t('schedule.helpPill') }}
      </span>
      <h2 class="display mt-5 text-3xl text-white sm:text-4xl">
        {{ t('schedule.panelTitle') }}
      </h2>
      <p class="mt-3 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
        {{ t('schedule.intro') }}
      </p>

      <!-- Day strip -->
      <p class="nav-type mt-8 text-[15px] tracking-[0.14em] text-white/70">
        {{ t('schedule.selectFor') }}
      </p>
      <div class="mt-3 flex gap-2 overflow-x-auto pb-2">
        <button
          v-for="day in days"
          :key="day.iso"
          type="button"
          class="nav-type flex min-w-[86px] flex-col items-center rounded-lg border-2 px-3 py-3 text-base tracking-[0.06em] transition-all"
          :class="selectedDay === day.iso
            ? 'border-bone bg-bone text-ink shadow-lg'
            : 'border-white/30 bg-white/5 text-white hover:border-white/70'"
          @click="selectedDay = day.iso"
        >
          <span class="text-[12px] uppercase tracking-[0.16em] opacity-70">{{ day.weekday }}</span>
          <span class="text-2xl">{{ day.dayNum }}</span>
        </button>
      </div>

      <!-- Time slots -->
      <div class="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-5">
        <button
          v-for="(slot, i) in slots"
          :key="slot"
          type="button"
          class="rounded-lg border-2 border-white/30 bg-white/5 px-3 py-3.5 text-center text-sm font-semibold text-white transition-all hover:border-white/70"
          :class="{ 'border-bone bg-bone text-ink shadow-lg': selectedSlot === i }"
          @click="selectedSlot = i"
        >
          {{ slot }}
        </button>
      </div>

      <!-- Form -->
      <form
        v-if="selectedDay && selectedSlot !== null"
        class="mt-8 grid gap-4 rounded-xl bg-white/10 p-5 backdrop-blur-sm sm:grid-cols-2 sm:p-6"
        @submit.prevent="submit"
      >
        <p class="nav-type rounded-lg bg-blaze px-4 py-2.5 text-center text-[15px] tracking-[0.1em] text-white sm:col-span-2">
          {{ t('schedule.form.selected', { day: selectedDayLabel, slot: slots[selectedSlot] }) }}
        </p>
        <label class="block">
          <span class="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/70">
            {{ t('schedule.form.name') }}
          </span>
          <input
            v-model.trim="form.name"
            type="text"
            required
            class="w-full rounded-lg border-0 bg-white px-4 py-3 text-sm text-ink shadow-sm focus:ring-2 focus:ring-bone focus:outline-none"
          >
        </label>
        <label class="block">
          <span class="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/70">
            {{ t('schedule.form.phone') }}
          </span>
          <input
            v-model.trim="form.phone"
            type="tel"
            required
            class="w-full rounded-lg border-0 bg-white px-4 py-3 text-sm text-ink shadow-sm focus:ring-2 focus:ring-bone focus:outline-none"
          >
        </label>
        <label class="block">
          <span class="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/70">
            {{ t('schedule.form.email') }}
          </span>
          <input
            v-model.trim="form.email"
            type="email"
            class="w-full rounded-lg border-0 bg-white px-4 py-3 text-sm text-ink shadow-sm focus:ring-2 focus:ring-bone focus:outline-none"
          >
        </label>
        <label class="block">
          <span class="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/70">
            {{ t('schedule.form.service') }}
          </span>
          <select
            v-model="form.service"
            class="w-full rounded-lg border-0 bg-white px-4 py-3 text-sm text-ink shadow-sm focus:ring-2 focus:ring-bone focus:outline-none"
          >
            <option v-for="slug in serviceSlugs" :key="slug" :value="slug">
              {{ t(`services.items.${slug}.label`) }}
            </option>
          </select>
        </label>
        <label class="block sm:col-span-2">
          <span class="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/70">
            {{ t('schedule.form.message') }}
          </span>
          <textarea
            v-model.trim="form.message"
            rows="3"
            class="w-full rounded-lg border-0 bg-white px-4 py-3 text-sm text-ink shadow-sm focus:ring-2 focus:ring-bone focus:outline-none"
          />
        </label>
        <div class="sm:col-span-2">
          <button
            type="submit"
            :disabled="submitting"
            class="nav-type w-full rounded-pill bg-bone px-8 py-4 text-lg tracking-[0.1em] text-ink transition-all hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-60"
          >
            {{ submitting ? '…' : t('schedule.form.submit') }}
          </button>
          <p v-if="submitted" class="mt-4 rounded-lg bg-bone/95 px-4 py-3 text-sm font-medium text-ink" role="status">
            {{ t('schedule.form.success') }}
          </p>
          <p v-else-if="error" class="mt-4 rounded-lg bg-white/95 px-4 py-3 text-sm font-medium text-blaze" role="alert">
            {{ t('schedule.form.error') }}
          </p>
          <p class="nav-type mt-4 text-center text-[13px] tracking-[0.12em] text-white/60">
            {{ t('schedule.form.phoneNote') }}
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import dayjs from 'dayjs'
import 'dayjs/locale/fr'
import { timeSlots, type Locale } from '~/data/content'

const { t, locale } = useI18n()

interface DayOption {
  iso: string
  weekday: string
  dayNum: number
  label: string
}

const selectedDay = ref<string | null>(null)
const selectedSlot = ref<number | null>(null)
const submitting = ref(false)
const submitted = ref(false)
const error = ref(false)

const form = ref({
  name: '',
  phone: '',
  email: '',
  service: 'reparation',
  message: '',
})

const serviceSlugs = [
  'reparation', 'fuites', 'chauffe-eau', 'salles-de-bain',
  'drainage', 'urgences', 'installation',
]

const slots = computed(() => timeSlots[locale.value as Locale])

const days = computed<DayOption[]>(() => {
  const isFr = locale.value === 'fr'
  const now = new Date()
  const out: DayOption[] = []
  for (let i = 1; i <= 7; i++) {
    const d = new Date(now)
    d.setDate(now.getDate() + i)
    out.push({
      iso: d.toISOString().slice(0, 10),
      weekday: isFr
        ? dayjs(d).format('ddd')
        : dayjs(d).locale('en').format('ddd'),
      dayNum: d.getDate(),
      label: isFr
        ? dayjs(d).format('dddd D MMMM')
        : dayjs(d).locale('en').format('dddd, MMMM D'),
    })
  }
  return out
})

const selectedDayLabel = computed(() =>
  days.value.find((d) => d.iso === selectedDay.value)?.label ?? '',
)

async function submit() {
  if (!selectedDay.value || selectedSlot.value === null) return
  submitting.value = true
  error.value = false
  try {
    const res = await $fetch('/api/rdv', {
      method: 'POST',
      body: {
        type: 'rdv',
        day: selectedDay.value,
        slot: slots.value[selectedSlot.value],
        ...form.value,
        locale: locale.value,
      },
    })
    if (res && (res.ok === true || res.status === 'ok')) {
      submitted.value = true
    }
    else {
      error.value = true
    }
  }
  catch {
    error.value = true
  }
  finally {
    submitting.value = false
  }
}
</script>
