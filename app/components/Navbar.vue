<template>
  <nav class="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
    <div class="glass flex items-center justify-between px-6 py-3 rounded-badge w-full max-w-5xl bg-white/40 border-white/40">
      <div class="flex items-center gap-3">
        <img src="/logo.png" alt="Petlytics" class="h-8 w-auto" />
        <span class="text-xl font-bold tracking-tight text-slate-900">Petlytics</span>
      </div>
      
      <div class="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
        <a href="#features" class="hover:text-slate-900 transition-colors">{{ t('nav.features') }}</a>
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

      <button class="bg-slate-900 text-white px-6 py-2 rounded-badge text-sm font-bold shadow-sm hover:bg-slate-800 hover:scale-105 transition-all">
        {{ t('nav.join') }}
      </button>
    </div>
  </nav>
</template>

<script setup>
const { t, locale, setLocale } = useI18n()
</script>
