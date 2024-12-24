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
  <UCard :ui=" {body: {padding: ''}}" :onclick="toggle" class="cursor-pointer">
    <template #header>
      <div class="flex justify-between">
        {{ character.name }} 
          <UIcon v-if="isFavorite" name="heroicons-solid:heart" class="bg-green-500 w-5 h-5" />
          <UIcon v-if="!isFavorite" name="heroicons-outline:heart" class=" bg-gray-400 w-5 h-5" />
      </div>
    </template>

    <img :src="character.image || ''" />

    <template #footer>
      <div class="my-2">
        <span class="block text-xs font-light text-gray-400 dark:text-white">
          Location
        </span>
        <span class="block text-sm font-normal text-gray-600 dark:text-white">
          {{ character.location?.name || 'unknown' }}
        </span>
      </div>
      <div v-if="character.location?.type" class="my-2">
        <span class="block text-xs font-light text-gray-400 dark:text-white">
          Definition
        </span>
        <span class="block text-sm font-normal text-gray-600 dark:text-white">
          {{ character.location?.type }}
        </span>
      </div>
    </template>
  </UCard>
</template>