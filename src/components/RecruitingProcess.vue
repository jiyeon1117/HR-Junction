<template>
  <div id="RecruitingProcess">
    <span class="name">Frontend recruiting process</span>
    <span class="description">Explanation of this recruiting process</span>
    <div class="process">
      <ProcessDetail v-for="(item, index) in name" :key="index" :num="index" :name="name" :description="description"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import ProcessDetail from './common/ProcessDetail.vue'

export default {
  name: 'RecruitingProcess',
  components: {
    ProcessDetail
  },
  data() {
    return {
      componentModal: false,
      name: [],
      description: [],
      pipelines_list: null,
    }
  },
  
  methods: {
    initProcess() {
      console.warn('remind')
      axios.get(`https://d476-210-216-0-254.ngrok.io/pipelines`, {}, {withCredentials: true}
      ).then(res => {
        this.pipelines_list = res.data;
        console.log(this.pipelines_list)
        this.divideList();
      })
    },
    divideList(){
      
      for(let i of this.pipelines_list){
        this.name.push(i.name)
        this.description.push(i.description)
      }
        console.log(this.process)

      // for(let i of this.process_list){
      //   console.log("i", i.name, i.description)
      // }
    }
  },
  created() {
    if(this.process_list == null){
      this.initProcess()
    }
  },
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
