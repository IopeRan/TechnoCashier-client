<script setup>
import SidebarComponent from './components/SidebarComponent.vue'
import NavbarComponent from './components/NavbarComponent.vue'
</script>
<template>
  <div class="bg-slate-100 w-full min-h-screen flex flex-col">
    <NavbarComponent></NavbarComponent>
    <div class="w-full flex flex-row">
      <SidebarComponent></SidebarComponent>
      <router-view></router-view>
    </div>
  </div>
</template>

