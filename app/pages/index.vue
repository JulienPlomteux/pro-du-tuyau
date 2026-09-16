<template>
  <div>
    <HeroSection />
    <TrustBar />
    <RatingStrip />
    <ServiceGrid />
    <AreaGrid />
    <TestimonialSection />
    <FinancingSection />
    <RegionalSection />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

useHead({
  title: () =>
    `Pro du Tuyau — Plombier à Laval & Montréal 24/7 | ${t('site.name')}`,
  meta: [
    {
      name: 'description',
      content: () =>
        t('site.tagline') + ' ' + t('services.title'),
    },
  ],
  htmlAttrs: {
    lang: () => (locale.value === 'fr' ? 'fr-CA' : 'en-CA'),
  },
})

useSchemaOrg({
  type: 'Plumber',
  name: 'Pro du Tuyau',
  description: 'Plomberie résidentielle et commerciale, chauffage et urgences 24/7 à Laval, Montréal et dans le grand Montréal.',
  telephone: '+1-438-399-3014',
  url: 'https://www.produtuyeau.ca',
  image: 'https://www.produtuyeau.ca/og-image.png',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2400, boul. des Laurentides',
    addressLocality: 'Laval',
    addressRegion: 'QC',
    postalCode: 'H7T 2K6',
    addressCountry: 'CA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 45.5709,
    longitude: -73.7486,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  areaServed: [
    'Laval', 'Montréal', 'Longueuil', 'Brossard', 'Terrebonne',
    'Saint-Jérôme', 'Pointe-Claire', 'Dorval', 'Repentigny',
    'Granby', 'Saint-Bruno', 'Vaudreuil',
  ],
})
</script>
