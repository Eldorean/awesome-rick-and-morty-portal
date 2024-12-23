import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useFavoriteCharacter = defineStore('favoriteCharacter', () => {
  const character = ref('hallo');

  function setCharacter(item: string) {
    character.value = item
  }

  return { character, setCharacter }
}, {
  persist: true
})

export default useFavoriteCharacter;
