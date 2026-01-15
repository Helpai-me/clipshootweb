<template>
  <div class="min-h-screen overflow-x-hidden bg-semantic-background text-semantic-text">
    <Navbar />
    
    <main>
      <NuxtPage />
    </main>

    <Footer />
  </div>
</template>

<script setup>
useHead({
  title: 'ClipShoot — Smart App Mockups',
  meta: [
    { name: 'description', content: 'Create stunning app mockups in seconds with ClipShoot.' }
  ]
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
