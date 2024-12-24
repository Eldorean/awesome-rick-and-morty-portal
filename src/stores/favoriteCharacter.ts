import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const PERSIST_STORE_TAG = "persist-favorite-characters";

export const useFavoriteCharacter = defineStore('favCharactor', () => {
  const getFromPersistStore = () => {
    const storeStr = localStorage.getItem(PERSIST_STORE_TAG);
    return storeStr ? JSON.parse(storeStr) : [];
  }

  const savedToPersistStore = () => {
    localStorage.setItem(PERSIST_STORE_TAG, JSON.stringify(characterList.value))
  }

  const characterList = ref(getFromPersistStore());

  function toggleFavorite(id: string){
    const index = characterList.value.indexOf(id);
    if(index === -1){
      characterList.value.push(id);
    }else{
      characterList.value.splice(index, 1);
    }
    savedToPersistStore();
  };

  function checkIfFavorite(id: string){
    return characterList.value.includes(id);
  }

  return { characterList, toggleFavorite, checkIfFavorite }
})

export default useFavoriteCharacter;
