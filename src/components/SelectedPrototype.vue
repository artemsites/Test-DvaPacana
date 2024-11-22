<template>
  <div>
    <div class="bag-item" v-for="item of items" :key="item.id" @click="removeItem(item, type)">{{ item.name }}</div>
  </div>
</template>

<style scoped lang="scss">
  @use "../scss/bag-item";
</style>

<script setup>
  import { useBagsStore } from "../stores/bags"
  let { removeItem } = useBagsStore()

  defineProps({
    items: Array,
    type: String
  })
</script>