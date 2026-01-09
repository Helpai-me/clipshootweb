<template>
  <section class="py-32 px-6 flex justify-center bg-transparent">
    <div class="w-full max-w-5xl border-t border-slate-900/10 pt-32">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <div class="eyebrow mb-8">{{ t('intro.f5') }}</div>
          <h2 class="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight drop-shadow-sm">
            {{ t('privacy.title') }}
          </h2>
          <p class="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-lg font-medium">
            {{ t('privacy.subtitle') }}
          </p>
        </div>
        
        <div class="space-y-12">
          <div v-for="item in ['storage', 'tracking', 'backup']" :key="item" class="group bento-card p-10 bg-white/30 border-white/20 hover:bg-white/50">
            <h3 class="text-2xl font-black text-slate-900 mb-4 flex items-center gap-4">
              <div class="w-3 h-3 rounded-full accent-gradient group-hover:scale-125 transition-transform"></div>
              {{ t(`privacy.${item}.t`) }}
            </h3>
            <p class="text-slate-600 text-lg font-medium leading-relaxed pl-7 border-l-2 border-slate-900/5 group-hover:border-brand-teal transition-colors">
              {{ t(`privacy.${item}.d`) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n()
</script>
