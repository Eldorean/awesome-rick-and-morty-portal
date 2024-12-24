<script setup lang="ts">
  import DefaultPage from '../components/Page/Page.vue';
  import GetCharactersById from "../queries/GetCharactorsById.gql";
  import type { Query } from "~/__generated__/graphql";

  const store = useFavoriteCharacter();
  const { characterList } = storeToRefs(store)

  const characters = ref();
  const isLoading = ref(true);

  watch(characterList.value, () => {
    useAsyncQuery<Query>(GetCharactersById, {ids: characterList }).then((d) => {
      characters.value = d.data.value?.charactersByIds;
      isLoading.value = !Boolean(characters.value);
    })
  }, {immediate: true})
</script>

<template>
  <DefaultPage title="Favorite">
    <h1 class="text-2xl p-2">And now for your favorite charactors!!!</h1>
    <template v-if="!isLoading">
      <CharacterList>
        <CharacterCard v-for="item in characters" :character="item"  :key="item.id" />
      </CharacterList>
    </template>

    <template v-if="!Boolean(characterList.length)">
      <p class="p-2">
        <span>Hey live a little, select some characters from search</span>
      </p>
      
      <p class="p-2">
        <span>To live is to risk it all, otherwise you're just an inert chunk of randomly assembled molecules drifting wherever the universe blows you.</span>
      </p>
    </template>
  </DefaultPage>
</template>
