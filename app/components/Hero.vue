<template>
  <section class="relative pt-48 pb-24 px-6 flex flex-col items-center text-center overflow-hidden">

    <!-- Main Title -->
    <h1 class="text-6xl md:text-8xl font-black tracking-tight text-semantic-text mb-8 whitespace-pre-line leading-[0.95] drop-shadow-sm">
      Transform your captures
      into premium content
    </h1>
    
    <!-- Subtitle -->
    <p class="text-xl md:text-2xl text-semantic-textSecondary max-w-2xl mb-12 font-medium leading-relaxed">
      ClipShoot is the ultimate tool for developers, designers, and content creators who need to showcase their applications and designs professionally. Convert simple screenshots or recordings into elegant, share-ready mockups in seconds.
    </p>

    <!-- CTAs -->
    <div class="flex flex-col items-center gap-6">
      <a 
        href="https://play.google.com/store/apps/details?id=com.clipshoot.app" 
        target="_blank"
        class="google-play-badge"
      >
        <img 
          src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
          alt="Get it on Google Play"
          class="h-16 md:h-20"
        />
      </a>
      <span class="text-sm font-semibold text-semantic-textSecondary opacity-60">
        Available on the App Store
      </span>
    </div>

    <!-- Hero Visual - Group 28 showing all themes -->
    <div class="mt-28 w-full max-w-6xl relative animate-float">
      <img src="/Group 28.png" alt="ClipShoot App Themes" class="w-full h-auto" />
      
      <!-- Decorative blobs -->
      <div class="absolute -top-20 -left-20 w-64 h-64 bg-brand-cyan/20 rounded-full blur-[100px] -z-10"></div>
      <div class="absolute -bottom-20 -right-20 w-80 h-80 bg-pink-300/20 rounded-full blur-[100px] -z-10"></div>
    </div>
  </section>
</template>

<script setup>
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
