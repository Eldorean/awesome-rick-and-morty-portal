<script setup lang="ts">
  import NavBar from '../Header/index.vue';
  import Footer from '../Footer/index.vue';
  const { title } = defineProps<{
    title: String
  }>()
</script>

<template>
  <div class="flex flex-col m-auto max-w-screen-lg h-full">
    <Head>
      <Title>{{ title }}</Title>
    </Head>

    <div class="section flex-0">
      <NavBar />
    </div>

    <div class="section flex-1 p-2">
      <slot></slot>
    </div>

    <div class="section flex-0">
      <Footer />
    </div>
  </div>
</template>

<style lang="postcss">
.section {
  @apply p-2;
}
</style>