export function useSite() {
  const { t } = useI18n()
  return computed(() => ({
    name: t('site.name'),
    phone: t('site.phone'),
    phoneHref: t('site.phoneHref'),
    phoneDisplay: t('site.phoneDisplay'),
    tagline: t('site.tagline'),
  }))
}
