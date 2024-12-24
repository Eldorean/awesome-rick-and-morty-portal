<script setup lang="ts">
  import DefaultPage from '../components/Page/Page.vue';
</script>

<template>
  <DefaultPage title="Home">
    <div class=" text-center">
      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Welkom op de totally awesome Rick and Morty Portal
      </h1>
      <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        Vergeet niet om je favorieten personages te selecteren op de search pagina
      </p>
      <NuxtLink to="/search"  class="block py-2 px-3">
        <Button>
          Search 
          <UIcon name="el:chevron-right" class="w-3 h-3 mx-2" />
        </Button> 
      </NuxtLink>
    </div>
  </DefaultPage>
</template>