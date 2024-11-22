<template>
  <div>
    <div class="bag-item" v-for="item of items" :key="item.id" @click="removeItem(item, 'store')">{{ item.name }}</div>
  </div>
</template>

<style scoped lang="scss">
  .bag-item {
    width: 100%;
    height: 100%;

    justify-content: center;
    display: flex;
    align-items: center;

    font-size: 2.5rem;

    cursor: pointer;
  }
</style>

<script setup>
  import { useBagsStore } from "../stores/bags"
  let { removeItem } = useBagsStore()

  defineProps({
    items: Array,
  })
</script>