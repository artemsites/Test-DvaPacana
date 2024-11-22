import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import { moveObjFromArrayToArrayByKey } from '../utils/moveObjFromArrayToArrayByKey'

export const useBagsStore = defineStore('bags', () => {
  const userBag = ref([
    {
      id: 1,
      name: 'Shoes 1',
    },
    {
      id: 2,
      name: 'Shoes 2',
    },
    {
      id: 3,
      name: 'Shoes 3',
    },
    {
      id: 4,
      name: 'Shoes 4',
    },
    {
      id: 5,
      name: 'T-shirt 1',
    },
    {
      id: 6,
      name: 'T-shirt 2',
    },
    {
      id: 7,
      name: 'T-shirt 3',
    },
    {
      id: 8,
      name: 'T-shirt 4',
    },
  ])

  const userBagSelected = ref([])

  const storeBag = ref([
    {
      id: 11,
      name: 'Jacket 1',
    },
    {
      id: 12,
      name: 'Jacket 2',
    },
    {
      id: 13,
      name: 'Jacket 3',
    },
    {
      id: 14,
      name: 'Jacket 4',
    },
    {
      id: 15,
      name: 'Hoodie 1',
    },
    {
      id: 16,
      name: 'Hoodie 2',
    },
    {
      id: 17,
      name: 'Hoodie 3',
    },
    {
      id: 18,
      name: 'Hoodie 4',
    },
  ])

  const storeBagSelected = ref([])

  function selectItem(itemSelected, type) {
    if (type === 'user') {
      if (userBagSelected.value.length < 6) {
        moveObjFromArrayToArrayByKey(itemSelected, userBag.value, userBagSelected.value, 'id')
      }
    }

    if (type === 'store') {
      if (storeBagSelected.value.length < 1) {
        moveObjFromArrayToArrayByKey(itemSelected, storeBag.value, storeBagSelected.value, 'id')
      }
    }
  }

  function removeItem(itemForRemoved, type) {
    if (type === 'user') {
      if (userBagSelected.value.length > 0) {
        moveObjFromArrayToArrayByKey(itemForRemoved, userBagSelected.value, userBag.value, 'id')
      }
    }

    if (type === 'store') {
      if (storeBagSelected.value.length > 0) {
        moveObjFromArrayToArrayByKey(itemForRemoved, storeBagSelected.value, storeBag.value, 'id')
      }
    }
  }

  let userBagCountAll = ref(userBag.value.length + userBagSelected.value.length)

  return {
    userBag,
    userBagCountAll,
    userBagSelected,
    storeBag,
    storeBagSelected,
    selectItem,
    removeItem,
  }
})
