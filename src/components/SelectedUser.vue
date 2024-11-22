<template>
  <div>
    <div class="bag-item" v-for="item of items" :key="item.id" @click="removeItem(item, 'user')">{{ item.name }}</div>

    <div class="bottom">
      Selected: {{ userBagSelected.length }} / {{ userBagCountAll }}
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use "../scss/bag-item";

  .bottom {
    width: 100%;

    margin-top: auto;
  }
</style>

<script setup>
  import { useBagsStore } from "../stores/bags"
  let { removeItem, userBagCountAll, userBagSelected } = useBagsStore()

  defineProps({
    items: Array,
  })
</script>