<template>
  <div class="bg-sky-200 fixed inset-x-0 bottom-0 pl-4 pr-4 pt-2">
    <ul class="flex justify-between">
      <li v-for="item in footer" :key="item.title" class=""><router-link :to="item.path" class="flex flex-col items-center">
          <IconPark :icon="item.icon" :theme="item.theme" size="28" fill="#333" strokeLinejoin="miter"
            strokeLinecap="butt" />
          <span class="text-black text-sm">{{ item.title }}</span>
        </router-link></li>
    </ul>
  </div>
</template>

<script setup>
import IconPark from '@/components/common/IconPark.vue'
import { useFooter } from './useFooter.js'
const { footer } = useFooter()
</script>

<style  scoped></style>