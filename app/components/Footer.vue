<template>
  <footer class="py-32 px-6 flex flex-col items-center border-t border-surface-lineLight bg-semantic-surface backdrop-blur-sm">
    <div class="w-full max-w-4xl text-center">
      <div class="eyebrow mx-auto mb-10">Why ClipShoot?</div>
      
      <div class="space-y-10 mb-20 text-xl md:text-2xl leading-relaxed text-semantic-textSecondary font-bold max-w-2xl mx-auto">
        <p>Professional mockups in seconds.</p>
        <p class="text-semantic-text drop-shadow-sm">Turn simple captures into premium content.</p>
      </div>

      <div class="glass p-16 rounded-[40px] mb-24 relative overflow-hidden group shadow-glass">
        <!-- Background accents -->
        <div class="absolute -top-10 -right-10 w-40 h-40 bg-brand-cyan/20 rounded-full blur-3xl"></div>
        <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-300/10 rounded-full blur-3xl"></div>
        
        <p class="text-3xl md:text-4xl text-semantic-text font-black mb-12 tracking-tight">Start for free today.</p>
        <a 
          href="https://play.google.com/store/apps/details?id=com.clipshoot.app" 
          target="_blank"
          class="inline-block"
        >
          <img 
            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
            alt="Get it on Google Play"
            class="h-16 md:h-20"
          />
        </a>
      </div>

      <p class="max-w-2xl mx-auto text-[13px] text-semantic-textSecondary font-bold opacity-50 italic mb-20 leading-relaxed uppercase tracking-wider">
        Built for creators, by creators.
      </p>

      <div class="flex flex-col items-center gap-8 border-t border-surface-lineLight pt-16">
        <div class="flex items-center gap-3">
            <img src="/logo.png" alt="ClipShoot" class="h-8 w-auto" />
            <span class="text-lg font-black text-semantic-text tracking-tight">ClipShoot</span>
        </div>
        <div class="flex items-center gap-6 text-sm font-semibold text-semantic-textSecondary">
          <NuxtLink to="/privacy" class="hover:text-semantic-text transition-colors">
            Privacy Policy
          </NuxtLink>
          <NuxtLink to="/terms" class="hover:text-semantic-text transition-colors">
            Terms of Service
          </NuxtLink>
        </div>
        <p class="text-[11px] font-bold text-semantic-textSecondary uppercase tracking-[0.2em] opacity-60">
          © 2026 ClipShoot
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>
