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
        <button class="btn-primary px-16 py-6 text-2xl shadow-lg">
          {{ t('hero.cta') }}
        </button>
      </div>

      <p class="max-w-2xl mx-auto text-[13px] text-slate-600 font-bold opacity-50 italic mb-20 leading-relaxed uppercase tracking-wider">
        {{ t('footer.note') }}
      </p>

      <div class="flex flex-col items-center gap-8 border-t border-slate-900/10 pt-16">
        <div class="flex items-center gap-3">
            <img src="/logo.png" alt="Petlytics" class="h-8 w-auto" />
            <span class="text-lg font-black text-slate-900 tracking-tight">Petlytics</span>
        </div>
        <p class="text-[11px] font-bold text-slate-600 uppercase tracking-[0.2em] opacity-60">
          {{ t('footer.copyright') }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const { t } = useI18n()
</script>
