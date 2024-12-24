<script setup lang="ts">
  import DefaultPage from '../components/Page/Page.vue';
  import GetCharacters from "../queries/GetCharacters.gql";
  import type { Query } from "~/__generated__/graphql";

  const {page: queryPage = "1"} = useRoute().query as {page: string};

  const page = ref(parseInt(queryPage));
  const info = ref();
  const characters = ref();
  const isLoading = ref(true);

  const updatePageQuery = () => {
    if(page.value) {
      var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + `?page=${page.value}`;
      window.history.pushState({path:newurl},'',newurl);
    }
  }

  const toTopOfPage = () => {
    window.scrollTo({top: 0, behavior: 'auto'});
  }

  watch(page, () => {
    useAsyncQuery<Query>(GetCharacters, { page: page }).then((d) => {
      info.value = d.data.value?.characters?.info;
      characters.value = d.data.value?.characters?.results;
      isLoading.value = !Boolean(characters.value);

      toTopOfPage();
      updatePageQuery();

    })
  }, {immediate: true})


</script>

<template>
  <DefaultPage title="Charactors">
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
          show-first
        />
      </div>      
    </template>
  </DefaultPage>
</template>
