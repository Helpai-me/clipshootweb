<template>
  <nav class="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
    <div class="glass flex items-center justify-between px-6 py-3 rounded-badge w-full max-w-5xl bg-white/40 border-white/40">
      <NuxtLink to="/" class="flex items-center gap-3">
        <img src="/logo.png" alt="Petlytics" class="h-8 w-auto" />
        <span class="text-xl font-bold tracking-tight text-slate-900">Petlytics</span>
      </NuxtLink>
      
      <div class="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
        <NuxtLink to="/" class="hover:text-slate-900 transition-colors">{{ t('nav.features') }}</NuxtLink>
        <a href="https://forms.gle/BR6MRMFrJ7HZTMMR9" target="_blank" class="hover:text-slate-900 transition-colors">{{ t('nav.support') }}</a>
        <div class="flex items-center gap-2 border-l border-slate-900/10 pl-8">
          <button 
            @click="setLocale(locale === 'en' ? 'es' : 'en')"
            class="hover:text-slate-900 transition-colors uppercase"
          >
            {{ locale }}
          </button>
        </div>
      </div>

      <a 
        v-if="!isPrivacyPage"
        href="https://play.google.com/store/apps/details?id=com.petlytics.app" 
        target="_blank"
        class="flex items-center"
      >
        <img 
          :src="locale === 'es' 
            ? 'https://play.google.com/intl/en_us/badges/static/images/badges/es_badge_web_generic.png'
            : 'https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'"
          alt="Get it on Google Play"
          class="h-10"
        />
      </a>
    </div>
  </nav>
</template>

<script setup>
const { t, locale, setLocale } = useI18n()
const route = useRoute()
const isPrivacyPage = computed(() => route.path === '/privacy' || route.path === '/es/privacy')
</script>
