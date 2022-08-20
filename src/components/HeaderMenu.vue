<template>
  <div id="header">
    <span class="title">HR Junction</span>
    <input class="search" type="text" placeholder="Search">
    <div class="logo"></div>
  </div>
</template>

<script>
export default {
  name: 'HeaderMenu'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#header{
  display: flex;
  width: 100%;
  height: 54px;
  background-color: #CD7332;
}

.title, .search, .logo {
  flex: none;
}

.title {
  color: white;
  font-size: 16px;
  font-weight: 700;
  margin: auto 0 auto 32px;
}

input{
  flex: 1;
  width: 1090px;
  height: 32px;
  background-color: white;
  border: 0;
}

input:focus {
  outline: none;
} 
.search {
  display: flex;
  margin: auto 0 auto 296px;
  color: #484644;
  font-size: 14px;
  padding-left: 32px;
}
.logo {
  width: 30px;
  height: 30px;
  margin: auto 0 auto auto;
}
</style>
