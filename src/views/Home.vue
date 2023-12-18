<template>
  <div class="bg-red-700">
    <Search />
  </div>
  <div class="nav-wrapper">
    <el-tabs v-model="activeName" class="demo-tabs">
      <el-tab-pane label="推荐" name="first">
        <WaterFall />
      </el-tab-pane>
      <el-tab-pane label="潮流文化" name="second">Config</el-tab-pane>
      <el-tab-pane label="Role" name="third">Role</el-tab-pane>
      <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
      <el-tab-pane label="Task" name="fifth">Task</el-tab-pane>
      <el-tab-pane label="Task" name="sixth">Task</el-tab-pane>
      <el-tab-pane label="Task" name="seventh">Task</el-tab-pane>
      <el-tab-pane label="Task" name="eighth">Task</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import Search from '@/components/search/Search.vue'
import WaterFall from '@/components/common/WaterFall.vue'
import { ref } from 'vue'
const activeName = ref('first')
</script>

<style scoped>
:deep().el-tabs__header {
  @apply mb-1
}
</style>