<template>
  <nav class="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
    <div class="glass flex items-center justify-between px-6 py-3 rounded-badge w-full max-w-5xl">
      <NuxtLink to="/" class="flex items-center gap-3">
        <img src="/logo.png" alt="ClipShoot" class="h-8 w-auto" />
        <span class="text-xl font-bold tracking-tight text-semantic-text">ClipShoot</span>
      </NuxtLink>
      
      <div class="hidden md:flex items-center gap-8 text-sm font-semibold text-semantic-textSecondary">
        <NuxtLink to="/" class="hover:text-semantic-text transition-colors">Features</NuxtLink>
        <a href="https://forms.gle/BR6MRMFrJ7HZTMMR9" target="_blank" class="hover:text-semantic-text transition-colors">Feedback</a>

      </div>

      <a 
        v-if="!isPrivacyPage"
        href="https://play.google.com/store/apps/details?id=com.clipshoot.app" 
        target="_blank"
        class="flex items-center"
      >
        <img 
          src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
          alt="Get it on Google Play"
          class="h-10"
        />
      </a>
    </div>
  </nav>
</template>

<script setup>
const route = useRoute()
const isPrivacyPage = computed(() => route.path === '/privacy')
</script>
