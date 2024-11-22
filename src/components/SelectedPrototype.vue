<template>
  <div>
    <div class="bag-item" v-for="item of items" :key="item.id">{{ item.name }}</div>
  </div>
</template>

<style scoped lang="scss">
  @use "../scss/bag-item";
</style>

<script setup>
  // import { useBagsStore } from "../stores/bags"
  // let {  } = useBagsStore()

  defineProps({
    items: Array,
    // type: String
  })
</script>