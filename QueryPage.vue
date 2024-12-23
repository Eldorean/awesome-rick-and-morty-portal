<script lang="ts" setup>
const query = gql`
  query {
    characters(page: 1) {
      info {
        count
      }
      results {
        name
      }
    }
    location(id: 1) {
      id
    }
    episodesByIds(ids: [1, 2]) {
      id
    }
  }
`
const variables = { limit: 5 }
const { data } = await useAsyncQuery(query, variables)
</script>

<template>
  <p>{{ JSON.stringify(data) }}</p>
</template>