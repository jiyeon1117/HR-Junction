<template>
  <div id="processItem">
    <button class="item-btn">
      <span class="item-name">{{ name }}</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'ProcessItem',
  props : {
    name : String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#processItem{
  margin-right: 16px;
  margin-bottom: 8px;
}
.item-btn{
  display: flex;
  padding: 5px 26px;
  align-items: center;
  border-radius: 4px;
  border: 1px solid #D6D6D6;
  cursor: pointer;
  background-color: white;
}

.item-name{
  color: #605E5C;
  font-size: 12px;
  font-weight: 500;
  margin: auto 0;
}

</style>
