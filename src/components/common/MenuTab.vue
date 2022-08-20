<template>
  <a href="" id="MenuTab">
    <div class="icon"></div>
    <div class="menu-title">
      <span>{{menu}}</span>
    </div>
  </a>
</template>

<script>
export default {
  name: 'MenuTab',
  props: {
    menu: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#MenuTab{
  display: flex;
  height: 48px;
}
.icon{
  flex-shrink: 0;
  width: 22px;
  height: 22px;
  margin-left: 20px;
  align-self: center;
  background-color: coral;
}
.menu-title {
	flex-grow: 1;
  margin-left: 20px;
  align-self: center;
  font-weight: 400;
  font-size: 16px;
  color: #605E5C;
}
</style>
