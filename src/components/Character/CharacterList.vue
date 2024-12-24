<template>
  <div class="grid gap-4 justify-between charator-grid">
    <slot></slot>
  </div>
</template>

<style scoped>

.charator-grid {
  @apply grid-cols-1
}

@media (min-width: 360px) {
  .charator-grid {
    @apply grid-cols-2
  }
}

@media (min-width: 740px) {
  .charator-grid {
    @apply grid-cols-3
  }
}

@media (min-width: 1024px) {
  .charator-grid {
    @apply grid-cols-4
  }
}
</style>