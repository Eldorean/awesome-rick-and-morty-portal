<script setup lang="ts">
import type { Character } from '~/__generated__/graphql';
const {character} = defineProps<{
  character: Character
}>();
const {toggleFavorite, checkIfFavorite} = useFavoriteCharacter();
const getFavorite = () => character.id ? checkIfFavorite(character.id) : false

const isFavorite = ref(getFavorite())

const toggle = () => {
  if(character.id) {
    toggleFavorite(character.id)
  }
  isFavorite.value = getFavorite();
}
</script>

<template>
  <UCard :onclick="toggle">
    <template #header>
      {{ character.name }} 
      <UBadge
        class="absolute mx-2"
        v-if="isFavorite"
        icon="el:heart"
        size="sm"
        color="primary"
        variant="soft"
        :trailing="false"
      />
    </template>

    <img :src="character.image || ''" />

    <template #footer>
      <div><span>location: {{ character.location?.name || 'unknown' }}</span></div>
      <div v-if="character.location?.type" ><span>definition: {{ character.location?.type }}</span></div>
    </template>
  </UCard>
</template>