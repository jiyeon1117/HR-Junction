<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
// import HRInfo from './HRInfo.vue';

export default {
  name: 'ContentMenu',
  components: {
    // HRInfo,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  flex: 2;
  height: 100vh;
  background-color: #FAFAFA;
}
</style>
