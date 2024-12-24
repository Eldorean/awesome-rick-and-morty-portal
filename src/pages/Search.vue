<script setup lang="ts">
  import DefaultPage from '../components/Page/Page.vue';
  import GetCharacters from "../queries/GetCharacters.gql";
  import type { Query } from "~/__generated__/graphql";

  const page = ref(1);
  const info = ref();
  const characters = ref();
  const isLoading = ref(true);

  watch(page, () => {
    useAsyncQuery<Query>(GetCharacters, { page: page }).then((d) => {
      info.value = d.data.value?.characters?.info;
      characters.value = d.data.value?.characters?.results;
      isLoading.value = !Boolean(characters.value);
    })
  }, {immediate: true})

</script>

<template>
  <DefaultPage title="Search">
    <template v-if="!isLoading">
      <CharacterList>
        <CharacterCard v-for="item in characters" :character="item" :key="item.id"  />
      </CharacterList>
      <div class="flex justify-center m-4">
        <UPagination 
          v-model="page" 
          :page-count="20"
          size="lg" 
          :total="info.count" 
          show-last 
          show-first />
      </div>      
    </template>
  </DefaultPage>
</template>
