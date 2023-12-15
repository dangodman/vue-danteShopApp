<template>
  <div class="h-screen w-screen">
    <Header />
    <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row>
    <!-- 底部导航 -->
    <div class="bg-green-700 text-3xl text-center text-white
     fixed inset-x-0 bottom-0 p-4">
      <Footer></Footer>
    </div>
  </div>
</template>

<script setup>
import Footer from '@/components/layout/footer/Footer.vue'
import Header from '@/components/layout/header/Header.vue'
</script>

<style  scoped></style>