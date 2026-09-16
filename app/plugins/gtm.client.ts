import GtmPlugin, { useGtm } from '@gtm-support/vue-gtm'

export default defineNuxtPlugin((nuxtApp) => {
  const { gtmId } = useRuntimeConfig().public
  nuxtApp.vueApp.use(GtmPlugin, {
    id: gtmId,
    debug: import.meta.dev,
  })
  return {
    provide: {
      gtm: useGtm(),
    },
  }
})
