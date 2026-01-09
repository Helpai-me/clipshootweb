<template>
  <section id="features" class="py-32 px-6 flex justify-center bg-transparent">
    <div class="w-full max-w-6xl space-y-8">
      
      <!-- Row 1: Themes showcase (temas.png) -->
      <div class="bento-card p-12 group">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div class="eyebrow mb-6">{{ t('intro.title') }}</div>
            <h2 class="text-4xl font-black text-slate-900 mb-6 leading-tight">{{ t('content.p1') }}</h2>
            <p class="text-slate-600 text-lg font-medium leading-relaxed">{{ t('content.p2') }}</p>
          </div>
          <div class="w-full aspect-video rounded-2xl overflow-hidden shadow-lg">
            <iframe 
              class="w-full h-full"
              src="https://www.youtube.com/embed/WyUUy31D8os?start=4" 
              title="Petlytics Video" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>
          </div>
        </div>
      </div>

      <!-- Row 2: Clinical Records + Smart Alerts -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
        <!-- Records Card with mascosas.png -->
        <div class="md:col-span-7 bento-card p-12 group">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <div class="eyebrow mb-6">{{ t('intro.f1') }}</div>
              <h2 class="text-3xl font-black text-slate-900 mb-6 leading-tight">{{ t('records.title') }}</h2>
              <ul class="space-y-4">
                <li v-for="item in ['symptoms', 'weight', 'photos', 'docs']" :key="item" class="flex items-start gap-3">
                  <div class="w-2 h-2 rounded-full bg-slate-900 mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 class="text-slate-900 font-bold text-sm">{{ t(`records.${item}.t`) }}</h3>
                    <p class="text-xs text-slate-600">{{ t(`records.${item}.d`) }}</p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="flex justify-center">
              <img src="/mascosas.png" alt="Pet Tracking" class="w-full max-w-xs h-auto group-hover:scale-105 transition-transform" />
            </div>
          </div>
        </div>

        <!-- Alert Engine Card -->
        <div class="md:col-span-5 bento-card p-12 flex flex-col items-center text-center justify-center bg-slate-900 shadow-glass border border-slate-800">
          <div class="w-20 h-20 bg-white/10 rounded-[22px] flex items-center justify-center mb-8 shadow-sm backdrop-blur-md">
            <svg class="text-white w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </div>
          <h2 class="text-3xl font-black text-white mb-4 leading-tight">{{ t('intelligence.title') }}</h2>
          <p class="text-white/80 font-bold text-[15px] leading-relaxed">
            {{ t('intelligence.d1') }}
          </p>
          <p class="text-white/60 text-sm mt-4">
            {{ t('intelligence.d2') }}
          </p>
        </div>
      </div>

      <!-- Row 3: Weight Tracking + PDF Reports -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
        <!-- Weight Tracking with weighttracking.png -->
        <div class="md:col-span-5 bento-card p-12 group flex flex-col justify-between">
          <div>
            <div class="eyebrow mb-6">{{ t('records.weight.t') }}</div>
            <h2 class="text-3xl font-black text-slate-900 mb-4 leading-tight">{{ t('records.weight.t') }}</h2>
            <p class="text-slate-600 font-medium leading-relaxed mb-8">{{ t('records.weight.d') }}</p>
          </div>
          <div class="flex justify-center mt-auto">
            <img src="/weighttracking.png" alt="Weight Tracking" class="w-full max-w-[280px] h-auto group-hover:scale-105 transition-transform shadow-lg rounded-2xl" />
          </div>
        </div>

        <!-- PDF Reports -->
        <div class="md:col-span-7 bento-card p-12 group">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
            <div>
              <div class="eyebrow mb-6">{{ t('intro.f4') }}</div>
              <h2 class="text-3xl font-black text-slate-900 mb-2">{{ t('reports.title') }}</h2>
              <span class="text-slate-600 font-bold text-sm tracking-widest uppercase mb-6 block">{{ t('reports.subtitle') }}</span>
              
              <div class="space-y-4 mt-6">
                <div v-for="feature in ['unification', 'design', 'sharing']" :key="feature" class="flex gap-3">
                  <div class="flex-shrink-0 w-8 h-8 rounded-lg bg-slate-900/5 flex items-center justify-center">
                     <span class="text-slate-900 font-black text-xs">{{ feature[0].toUpperCase() }}</span>
                  </div>
                  <div>
                    <h3 class="text-slate-900 font-bold text-sm">{{ t(`reports.${feature}.t`) }}</h3>
                    <p class="text-xs text-slate-600">{{ t(`reports.${feature}.d`) }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-center items-center h-full">
              <img src="/informe.png" alt="PDF Reports" class="w-full h-auto object-contain max-h-[350px] group-hover:scale-105 transition-transform shadow-xl rounded-lg" />
            </div>
          </div>
        </div>
      </div>

      <!-- Row 4: Multi-pet Management -->
      <div class="bento-card p-12 group overflow-hidden">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="flex justify-center gap-4 relative">
             <!-- Images 01 and 02 overlapping slightly -->
            <img src="/01.png" alt="Pet Profile 1" class="w-1/2 max-w-[200px] h-auto rounded-2xl shadow-lg transform -rotate-3 group-hover:-translate-x-2 transition-transform" />
            <img src="/02.png" alt="Pet Profile 2" class="w-1/2 max-w-[200px] h-auto rounded-2xl shadow-lg transform rotate-3 mt-8 group-hover:translate-x-2 transition-transform" />
          </div>
          <div>
            <div class="eyebrow mb-6">UNLIMITED</div>
            <h2 class="text-4xl font-black text-slate-900 mb-6 leading-tight">{{ t('multipet.title') }}</h2>
            <p class="text-slate-600 text-xl font-medium leading-relaxed">{{ t('multipet.d') }}</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const { t } = useI18n()
</script>
