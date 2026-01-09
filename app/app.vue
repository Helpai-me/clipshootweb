<template>
  <div class="min-h-screen overflow-x-hidden">
    <Navbar />
    
    <main>
      <NuxtPage />
    </main>

    <Footer />
  </div>
</template>

<script setup>
const { t } = useI18n()

useHead({
  title: 'Petlytics — Smart Pet Health Management',
  meta: [
    { name: 'description', content: 'Transform everyday observations into valuable clinical data for your veterinarian.' }
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
