<script setup lang="ts">
  const {} = defineProps<{
    path: string
  }>();
</script>

<template>
  <li>
    <NuxtLink :to="path" active-class="font-extrabold" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
      <slot></slot>
    </NuxtLink>
  </li>
</template>
