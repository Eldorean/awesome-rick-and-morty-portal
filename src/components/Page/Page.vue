<script setup lang="ts">
  import NavBar from '../Header/index.vue';
  import Footer from '../Footer/index.vue';
  const { title } = defineProps<{
    title: String
  }>()
</script>

<template>
  <div class="flex flex-col h-full">
    <Head>
      <Title>{{ title }}</Title>
    </Head>

    <div class="bg-gray-50">
      <div class="max-w-screen-lg m-auto">
        <NavBar class="m-auto max-w-screen-lg" />
      </div>
    </div>
    
    <div class="flex-1 p-4">
      <div class="max-w-screen-lg m-auto">
        <slot></slot>
      </div>
    </div>

    <div class="flex-0 p-2">
      <div class="max-w-screen-lg m-auto">
        <Footer />
      </div>
    </div>
  </div>
</template>
