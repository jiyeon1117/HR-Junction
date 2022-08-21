<template>
  <div id="container">
    <div class="add-process">
      <button class="add-btn" @click="processModal = true">
        <img class="add-img" src="../assets/add.png">
        <span class="add">Add Process</span>
      </button>
    </div>
    <Teleport to="body">
      <ProcessModal :show="processModal" @close="processModal = false" />
    </Teleport>
    <div class="recruiting-process">
      <RecruitingProcess />
      <RecruitingProcess/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import ProcessModal from './common/ProcessModal.vue'
import RecruitingProcess from './RecruitingProcess.vue';

export default {
  name: 'RecruitingProcessMenu',
  components: {
    RecruitingProcess,
    ProcessModal
  },
  data() {
    return {
      processModal: false,
      sender: [],
      position: [],
      status: [],
      pipelines_list: null,
    }
  },
  methods: {
    initProcess() {
      console.warn('remind')
      axios.get(`https://d476-210-216-0-254.ngrok.io/applications`, {}, {withCredentials: true}
      ).then(res => {
        this.pipelines_list = res.data;
        console.log(this.pipelines_list)
        this.divideList();
      })
    },
    divideList(){
      
      for(let i of this.pipelines_list){
        this.sender.push(i.sender)
        this.position.push(i.position)
        this.status.push(i.status)
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
#container{
  display: flex;
  overflow:auto; 
  flex-direction: column;
  padding: 0 84px 0 84px;
}

.add-process {
  margin-top: 40px;
  margin-bottom: 8px;
}

.add-btn{
  width: 122px;
  height: 28px;
  display: flex;
  align-items: center;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  background-color: #CD7332;
}

.add-img {
  width: 20px;
  height: 20px;
  margin-left: 12px;
  align-self: center;
}

.add{
  color: white;
  font-size: 12px;
  font-weight: 400;
  margin: auto 0 auto 4px;
}

.status{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.documents, .ongoing, .completed {
  flex-grow: 1;
  margin-top: 40px;
}

.sub-title {
  font-weight: 700;
  color: #605E5C;
  font-size: 20px;
}

.wrap {
  margin-top: 35px;
}

.recruiting-process{
  margin-top: 32px;
}
</style>
