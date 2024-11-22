<template>
  <main class="main">
    <div class="box-top">
      <SelectedUser class="bag _small" :items="userBagSelected"></SelectedUser>
      <SelectedStore class="bag _small" :items="storeBagSelected"></SelectedStore>
    </div>

    <div class="box-bottom">
      <BagPrototype class="bag _big" :items="userBag" type="user"></BagPrototype>
      <BagPrototype class="bag _big" :items="storeBag" type="store"></BagPrototype>
    </div>
  </main>
</template>

<style scoped lang="scss">
  @use "./scss/mixins/border.scss" as *;

  .main {
    max-width: 1200px;

    display: flex;
    flex-direction: column;
    gap: 50px;

    margin: auto;
  }

  .box-top {
    display: flex;
    justify-content: space-between;
    gap: 50px;
  }

  .box-bottom {
    display: flex;
    justify-content: space-between;
    gap: 50px;
  }

  .bag {
    @include border;

    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
    gap: 15px;

    padding: 15px;

    &._small {
      width: 300px;
      min-height: 200px;
    }

    &._big {
      width: 500px;
      height: 700px;
    }
  }
</style>

<script setup>
  import { useBagsStore } from "./stores/bags"
  import BagPrototype from "./components/BagPrototype.vue"
  import SelectedUser from "./components/SelectedUser.vue"
  import SelectedStore from "./components/SelectedStore.vue"

  let { userBag, storeBag, userBagSelected, storeBagSelected } = useBagsStore()
</script>