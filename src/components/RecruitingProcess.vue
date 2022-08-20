<template>
  <div id="RecruitingProcess">
    <span class="name">Frontend recruiting process</span>
    <span class="description">Explanation of this recruiting process</span>
    <div class="process">
      <ProcessDetail/>
      <ProcessDetail/>
      <ProcessDetail/>
      <ProcessDetail/>
    </div>
  </div>
</template>

<script>
import ProcessDetail from './common/ProcessDetail.vue'
export default {
  name: 'RecruitingProcess',
  components: {
    ProcessDetail
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#RecruitingProcess{
  display: flex;
  flex-direction: column;
  height: 220px;
  margin-bottom: 54px;
}

.name{
  font-size: 20px;
  font-weight: 600;
  color: #252423;
}

.description{
  font-size: 14px;
  font-weight: 400;
  color: #9B9B9B;
}

.process {
  display: flex;
  margin-top: 28px;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-between;
}
</style>
