<template>
  
  <div class="bg-gray-700 min-h-screen text-white">
    <HeaderNav />
    <SidebarNav />
    <router-view/>
  </div>
  
</template>

<script>
import HeaderNav from './components/HeaderNav.vue'
import SidebarNav from './components/SidebarNav.vue'

export default {
  components: {
    HeaderNav,
    SidebarNav
  }
}
</script>

<style>
.btn {
    @apply bg-green-600 duration-300 font-bold py-2 px-4 rounded-lg inline-block;

}

.btn:hover {
    @apply bg-green-700;
}
</style>
