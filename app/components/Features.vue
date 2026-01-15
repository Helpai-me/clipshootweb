<template>
  <section id="features" class="py-32 px-6 flex justify-center bg-transparent">
    <div class="w-full max-w-6xl space-y-8">
      
      <!-- Row 1: Themes showcase -->
      <div class="bento-card p-12 group">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div class="eyebrow mb-6">Built for Creators</div>
            <h2 class="text-4xl font-black text-semantic-text mb-6 leading-tight">ClipShoot is the ultimate tool for developers, designers, and content creators.</h2>
            <p class="text-semantic-textSecondary text-lg font-medium leading-relaxed">Convert screenshots and recordings into premium mockups, ready for the App Store, social media, or your portfolio.</p>
          </div>
          <div class="w-full aspect-video rounded-2xl overflow-hidden shadow-lg">
            <iframe 
              class="w-full h-full"
              src="https://www.youtube.com/embed/WyUUy31D8os?start=4" 
              title="ClipShoot Video" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>
          </div>
        </div>
      </div>

      <!-- Row 2: Pro Mockups + Composition Tools -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
        <!-- Records Card -->
        <div class="md:col-span-7 bento-card p-12 group">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <div class="eyebrow mb-6">Realistic Mockups</div>
              <h2 class="text-3xl font-black text-semantic-text mb-6 leading-tight">Pro Mockups</h2>
              <ul class="space-y-4">
                <li class="flex items-start gap-3">
                  <div class="w-2 h-2 rounded-full bg-semantic-text mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 class="text-semantic-text font-bold text-sm">iPhone Pro</h3>
                    <p class="text-xs text-semantic-textSecondary">Detailed frame with Dynamic Island, side buttons, and refined edges for a high-end look.</p>
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <div class="w-2 h-2 rounded-full bg-semantic-text mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 class="text-semantic-text font-bold text-sm">Desktop & Browser</h3>
                    <p class="text-xs text-semantic-textSecondary">Elegant browser window styles for desktop and web app captures.</p>
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <div class="w-2 h-2 rounded-full bg-semantic-text mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 class="text-semantic-text font-bold text-sm">Clean Mode</h3>
                    <p class="text-xs text-semantic-textSecondary">Minimalist options without device frames for a clean, modern aesthetic.</p>
                  </div>
                </li>
                <li class="flex items-start gap-3">
                  <div class="w-2 h-2 rounded-full bg-semantic-text mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 class="text-semantic-text font-bold text-sm">Multimedia Support</h3>
                    <p class="text-xs text-semantic-textSecondary">Edit both images and videos with the same polished workflow.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="flex justify-center">
              <img src="/mascosas.png" alt="Pet Tracking" class="w-full max-w-xs h-auto group-hover:scale-105 transition-transform" />
            </div>
          </div>
        </div>

        <!-- Composition Tools Card -->
        <div class="md:col-span-5 bento-card p-12 flex flex-col items-center text-center justify-center bg-surface-raised border border-semantic-line shadow-glass">
          <div class="w-20 h-20 bg-semantic-glassLight rounded-[22px] flex items-center justify-center mb-8 shadow-sm backdrop-blur-md">
            <svg class="text-brand-magenta w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </div>
          <h2 class="text-3xl font-black text-semantic-text mb-4 leading-tight">Composition Tools</h2>
          <p class="text-semantic-textSecondary font-bold text-[15px] leading-relaxed">
            Bring your designs to life with 3D rotation and precise scaling.
          </p>
          <p class="text-semantic-textTertiary text-sm mt-4">
            Dial in padding, corner radius, and shadow intensity to create depth and dimension.
          </p>
        </div>
      </div>

      <!-- Row 3: Backgrounds & Styles -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
        <!-- Scale card (formerly weight tracking) -->
        <div class="md:col-span-5 bento-card p-12 group flex flex-col justify-between">
          <div>
            <div class="eyebrow mb-6">PRECISION</div>
            <h2 class="text-3xl font-black text-semantic-text mb-4 leading-tight">Scale Adjustment</h2>
            <p class="text-semantic-textSecondary font-medium leading-relaxed mb-8">Control the size of your device within the canvas for perfect framing.</p>
          </div>
          <div class="flex justify-center mt-auto">
            <img src="/weighttracking.png" alt="Weight Tracking" class="w-full max-w-[280px] h-auto group-hover:scale-105 transition-transform shadow-lg rounded-2xl" />
          </div>
        </div>

        <!-- Backgrounds Card -->
        <div class="md:col-span-7 bento-card p-12 group">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
            <div>
              <div class="eyebrow mb-6">High-Res Export</div>
              <h2 class="text-3xl font-black text-semantic-text mb-2">Backgrounds & Styles</h2>
              <span class="text-semantic-textSecondary font-bold text-sm tracking-widest uppercase mb-6 block">Premium Aesthetics</span>
              
              <div class="space-y-4 mt-6">
                <div class="flex gap-3">
                  <div class="flex-shrink-0 w-8 h-8 rounded-lg bg-semantic-glassLight flex items-center justify-center">
                     <span class="text-semantic-text font-black text-xs">P</span>
                  </div>
                  <div>
                    <h3 class="text-semantic-text font-bold text-sm">Premium Gradients</h3>
                    <p class="text-xs text-semantic-textSecondary">A collection of aesthetic gradients ready to use.</p>
                  </div>
                </div>
                <div class="flex gap-3">
                  <div class="flex-shrink-0 w-8 h-8 rounded-lg bg-semantic-glassLight flex items-center justify-center">
                     <span class="text-semantic-text font-black text-xs">S</span>
                  </div>
                  <div>
                    <h3 class="text-semantic-text font-bold text-sm">Solid Colors</h3>
                    <p class="text-xs text-semantic-textSecondary">Vibrant or neutral palettes to adapt to your brand.</p>
                  </div>
                </div>
                <div class="flex gap-3">
                  <div class="flex-shrink-0 w-8 h-8 rounded-lg bg-semantic-glassLight flex items-center justify-center">
                     <span class="text-semantic-text font-black text-xs">A</span>
                  </div>
                  <div>
                    <h3 class="text-semantic-text font-bold text-sm">Annotations</h3>
                    <p class="text-xs text-semantic-textSecondary">Draw freely or add draggable text labels to highlight key details.</p>
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

      <!-- Row 4: Use cases -->
      <div class="bento-card p-12 group overflow-hidden">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="flex justify-center gap-4 relative">
            <img src="/01.png" alt="Pet Profile 1" class="w-1/2 max-w-[200px] h-auto rounded-2xl shadow-lg transform -rotate-3 group-hover:-translate-x-2 transition-transform" />
            <img src="/02.png" alt="Pet Profile 2" class="w-1/2 max-w-[200px] h-auto rounded-2xl shadow-lg transform rotate-3 mt-8 group-hover:translate-x-2 transition-transform" />
          </div>
          <div>
            <div class="eyebrow mb-6">USE CASES</div>
            <h2 class="text-4xl font-black text-semantic-text mb-6 leading-tight">For Every Creator</h2>
            <p class="text-semantic-textSecondary text-xl font-medium leading-relaxed">Indies & developers, UI/UX designers, and marketers. Create high-impact visuals for the App Store, Play Store, Twitter, LinkedIn, Instagram, Dribbble, and more.</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
</script>
