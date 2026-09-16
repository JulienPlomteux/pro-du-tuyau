<template>
  <div id="app">
    <AppHeader />
    <NuxtPage />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible')
        revealObserver.unobserve(e.target)
      }
    })
  }, {
    threshold: 0,
    rootMargin: '0px 0px 160px 0px',
  })

  const observe = (el: Element) => {
    if (el.classList.contains('is-visible')) return
    revealObserver.observe(el)
  }

  document.querySelectorAll('[data-reveal]').forEach(observe)

  const mutObs = new MutationObserver((mutations) => {
    mutations.forEach((m) => {
      m.addedNodes.forEach((node) => {
        if (!(node instanceof Element)) return
        if (node.hasAttribute('data-reveal')) observe(node)
        node.querySelectorAll('[data-reveal]').forEach(observe)
      })
    })
  })
  mutObs.observe(document.body, { childList: true, subtree: true })
})
</script>
