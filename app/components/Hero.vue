<template>
  <section class="relative pt-48 pb-24 px-6 flex flex-col items-center text-center overflow-hidden">
    <!-- Eyebrow -->
    <div class="eyebrow mb-8 animate-fade-in">
      {{ t('hero.badge') }}
    </div>

    <!-- Main Title -->
    <h1 class="text-6xl md:text-8xl font-black tracking-tight text-slate-900 mb-8 whitespace-pre-line leading-[0.95] drop-shadow-sm">
      {{ t('hero.title') }}
    </h1>
    
    <!-- Subtitle -->
    <p class="text-xl md:text-2xl text-slate-600 max-w-2xl mb-12 font-medium leading-relaxed">
      {{ t('hero.subtitle') }}
    </p>

    <!-- CTAs -->
    <div class="flex flex-col items-center gap-6">
      <button class="btn-primary text-xl px-12 py-5">
        {{ t('hero.cta') }}
      </button>
      <span class="text-sm font-semibold text-slate-600 opacity-60">
        {{ t('hero.subtext') }}
      </span>
    </div>

    <!-- Hero Visual - Group 28 showing all themes -->
    <div class="mt-28 w-full max-w-6xl relative animate-float">
      <img src="/Group 28.png" alt="Petlytics App Themes" class="w-full h-auto" />
      
      <!-- Decorative blobs -->
      <div class="absolute -top-20 -left-20 w-64 h-64 bg-brand-teal/20 rounded-full blur-[100px] -z-10"></div>
      <div class="absolute -bottom-20 -right-20 w-80 h-80 bg-pink-300/20 rounded-full blur-[100px] -z-10"></div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n()
</script>

<style scoped>
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}
.animate-float {
  animation: float 6s ease-in-out infinite;
}
@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fade-in 1s ease-out forwards;
}
</style>
