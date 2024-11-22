import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

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
    // console.log('itemSelected: ', itemSelected)
    // console.log('type: ', type)
    if (type === 'user') {
      if (userBagSelected.value.length < 6) {
        let index = userBag.value.findIndex((item) => item.id === itemSelected.id)
        userBag.value.splice(index, 1)
        userBagSelected.value.push(itemSelected)
      }
    }

    if (type === 'store') {
      if (storeBagSelected.value.length < 1) {
        let index = storeBag.value.findIndex((item) => item.id === itemSelected.id)
        storeBag.value.splice(index, 1)
        storeBagSelected.value.push(itemSelected)
      }
    }
    // console.log('userBagSelected.value: ', userBagSelected.value)
  }

  return { userBag, userBagSelected, storeBag, storeBagSelected, selectItem }
})
