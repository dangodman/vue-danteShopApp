<template>
  <div class="h-screen w-screen">
    <router-view></router-view>
    <!-- 底部导航 --> 
      <Footer></Footer>
  </div>
</template>

<script setup>
import Footer from '@/components/layout/footer/Footer.vue'

</script>

<style  scoped></style>