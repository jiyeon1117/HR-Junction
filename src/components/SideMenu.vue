<template>
  <div id="side-menu">
    <router-link to="/"><MenuTab menu="HR Infomation" image="hrInfo.png"/></router-link>
    <router-link to="/RecruitingProcess"><MenuTab menu="Recruiting Process" image="process.png"/></router-link>
    <router-link to="/ComponentsProcess"><MenuTab menu="Components" image="components.png"/></router-link>
  </div>
</template>

<script>
import MenuTab from './common/MenuTab.vue';

export default {
  name: 'SideMenu',
  components: {
    MenuTab
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  width: 300px;
  height: 100vh;
  background: white;
  overflow:auto; 
}

#side-menu {
  margin-top: 20px;
}
</style>
