<template>
  <footer class="py-32 px-6 flex flex-col items-center border-t border-slate-900/10 bg-white/10 backdrop-blur-sm">
    <div class="w-full max-w-4xl text-center">
      <div class="eyebrow mx-auto mb-10">{{ t('footer.why') }}</div>
      
      <div class="space-y-10 mb-20 text-xl md:text-2xl leading-relaxed text-slate-600 font-bold max-w-2xl mx-auto">
        <p>{{ t('footer.d1') }}</p>
        <p class="text-slate-900 drop-shadow-sm">{{ t('footer.d2') }}</p>
      </div>

      <div class="glass p-16 rounded-[40px] mb-24 relative overflow-hidden group bg-white/60 border-white/60 shadow-glass">
        <!-- Background accents -->
        <div class="absolute -top-10 -right-10 w-40 h-40 bg-brand-teal/20 rounded-full blur-3xl"></div>
        <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-300/10 rounded-full blur-3xl"></div>
        
        <p class="text-3xl md:text-4xl text-slate-900 font-black mb-12 tracking-tight">{{ t('footer.join') }}</p>
        <a 
          href="https://play.google.com/store/apps/details?id=com.petlytics.app" 
          target="_blank"
          class="inline-block"
        >
          <img 
            :src="locale === 'es' 
              ? 'https://play.google.com/intl/en_us/badges/static/images/badges/es_badge_web_generic.png'
              : 'https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'"
            alt="Get it on Google Play"
            class="h-16 md:h-20"
          />
        </a>
      </div>

      <p class="max-w-2xl mx-auto text-[13px] text-slate-600 font-bold opacity-50 italic mb-20 leading-relaxed uppercase tracking-wider">
        {{ t('footer.note') }}
      </p>

      <div class="flex flex-col items-center gap-8 border-t border-slate-900/10 pt-16">
        <div class="flex items-center gap-3">
            <img src="/logo.png" alt="Petlytics" class="h-8 w-auto" />
            <span class="text-lg font-black text-slate-900 tracking-tight">Petlytics</span>
        </div>
        <div class="flex items-center gap-6 text-sm font-semibold text-slate-600">
          <NuxtLink to="/privacy" class="hover:text-slate-900 transition-colors">
            {{ locale === 'es' ? 'Política de Privacidad' : 'Privacy Policy' }}
          </NuxtLink>
        </div>
        <p class="text-[11px] font-bold text-slate-600 uppercase tracking-[0.2em] opacity-60">
          {{ t('footer.copyright') }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const { t, locale } = useI18n()
</script>
