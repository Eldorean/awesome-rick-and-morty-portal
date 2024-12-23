<script setup lang="ts">
  import queryCharacters from '~/service/queryCharacters';
  import DefaultPage from '../components/Page/Page.vue';
  import QueryPage from '~~/QueryPage.vue';

  const data =  await queryCharacters({page: 1})
</script>

<template>
  <DefaultPage title="About">
    {{ data }}
  </DefaultPage>
</template>