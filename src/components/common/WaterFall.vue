<template>
  <div class="flex flex-wrap">
    <el-card class="w-1/2 card" v-for="(o, index) in 8" :key="o" :body-style="{ 'padding': '0' }">
      <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        class="image" />
      <div>
        <p class="p-2">Yummy hamburger</p>
        <div class="flex items-center">
          <img class="w-5 h-5 mr-2 rounded-full"
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" alt="">
          <span class="grow ">作者</span>
          <el-button text class="button ">Operating</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const currentDate = ref(new Date())
</script>

<style scoped>

</style>