<template>
  <!-- reparation: wrench -->
  <svg v-if="name === 'reparation'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" class="h-9 w-9" aria-hidden="true">
    <path d="M14.7 6.3a4.5 4.5 0 0 0-6 5.6L3 17.6V21h3.4l5.7-5.7a4.5 4.5 0 0 0 5.6-6L14.6 12l-2.6-2.6 2.7-3.1z"/>
  </svg>
  <!-- fuites: drop -->
  <svg v-else-if="name === 'fuites'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" class="h-9 w-9" aria-hidden="true">
    <path d="M12 2.7s6.5 7 6.5 11.3a6.5 6.5 0 1 1-13 0C5.5 9.7 12 2.7 12 2.7z"/>
    <path d="M9 14a3 3 0 0 0 3 3"/>
  </svg>
  <!-- chauffe-eau: flame + tank -->
  <svg v-else-if="name === 'chauffe-eau'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" class="h-9 w-9" aria-hidden="true">
    <rect x="6" y="3.5" width="12" height="14" rx="2.5"/>
    <path d="M12 8c1.8 1.8 2.6 3.2 2.6 4.6a2.6 2.6 0 1 1-5.2 0c0-1.4.8-2.8 2.6-4.6z"/>
    <path d="M8 21h8"/>
  </svg>
  <!-- salles-de-bain: tub -->
  <svg v-else-if="name === 'salles-de-bain'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" class="h-9 w-9" aria-hidden="true">
    <path d="M4 12V6.5A2.5 2.5 0 0 1 6.5 4c1.2 0 2.2.8 2.5 2"/>
    <path d="M3 12h18v2a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5v-2z"/>
    <path d="M6 19l-1 2M18 19l1 2"/>
    <circle cx="8" cy="9.5" r="0.5" fill="currentColor"/>
  </svg>
  <!-- drainage: pipe + arrow -->
  <svg v-else-if="name === 'drainage'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" class="h-9 w-9" aria-hidden="true">
    <path d="M3 8h10a4 4 0 0 1 4 4v8"/>
    <path d="M3 12h10a8 8 0 0 0 8-8"/>
    <path d="M17 2.5 21 4l-1.5 4"/>
  </svg>
  <!-- urgences: lightning in circle -->
  <svg v-else-if="name === 'urgences'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" class="h-9 w-9" aria-hidden="true">
    <circle cx="12" cy="12" r="9"/>
    <path d="M13 5.5 7.5 13h4L11 18.5 16.5 11h-4L13 5.5z"/>
  </svg>
  <!-- installation: valve -->
  <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" class="h-9 w-9" aria-hidden="true">
    <circle cx="12" cy="14" r="5.5"/>
    <circle cx="12" cy="14" r="1.8"/>
    <path d="M12 3v5.5M8.5 3h7"/>
  </svg>
</template>

<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>
