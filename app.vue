<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
  const store = useTestStore()

  onBeforeMount(() => {
    // console.log('beforemounted')
    store.initializeAdresse()
}) 

</script>
