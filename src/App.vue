<template>
  <div>
    <HeaderMenu/>
    <div class="wrap">
      <SideMenu/>
      <ContentMenu/>
    </div>
  </div>
  
</template>

<script>
import HeaderMenu from './components/HeaderMenu.vue';
import SideMenu from './components/SideMenu.vue';
import ContentMenu from './components/ContentMenu.vue';

export default {
  name: 'App',
  components: {
    HeaderMenu,
    SideMenu,
    ContentMenu
  }
}
</script>

<style scoped>
.wrap {
  display: flex;
  overflow:auto;
}
</style>