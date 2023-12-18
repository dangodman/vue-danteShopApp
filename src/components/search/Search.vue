<template>
  <div class="flex p-1 items-center">
    <span class="bg-white h-8">搜索</span>
    <div class="w-3/4 h-8"><el-input v-model="input" placeholder="Please input" /></div>
    <span class="ml-2">照相机</span>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const input = ref('')
</script>

<style  scoped></style>