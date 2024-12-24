<script setup lang="ts">
  import DefaultPage from '../components/Page/Page.vue';
</script>

<template>
  <DefaultPage title="Home">
    <div class=" text-center">
      <h1 class="my-10 text-4xl text-balance font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Welcome to the totally awesome Rick and Morty Portal
      </h1>
      <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        Don't forget to like your favorite characters in the charactor page
      </p>
      <NuxtLink to="/characters" class="block py-2 px-3">
        <Button>
          Browse characters 
          <UIcon name="el:chevron-right" class="w-3 h-3 ml-4" />
        </Button> 
      </NuxtLink>
    </div>
  </DefaultPage>
</template>