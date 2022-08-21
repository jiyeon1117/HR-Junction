<template>
  <div id="container">
    <div class="add-process">
      <button class="add-btn" @click="componentModal = true">
        <img class="add-img" src="../assets/add.png">
        <span class="add">Add Component</span>
      </button>
    </div>
    <Teleport to="body">
      <ComponentModal :show="componentModal" @close="componentModal = false" />
    </Teleport>
    <div class="component-type">
      <button class="component-type-btn">
        <span class="all">All</span>
      </button>
      <button class="component-type-btn">
        <span class="process-type">Process Type</span>
      </button>
      <button class="component-type-btn">
        <span class="email-type">Email Type</span>
      </button>
    </div>
    <div class="component-process">
      <ProcessComponentDetail v-for="(item, index) in name" :key="index" :name="name[index]" :description="description[index]" :criteriaItems="criteriaItems" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import ComponentModal from './common/ComponentModal.vue'
import ProcessComponentDetail from './common/ProcessComponentDetail.vue';
// import EmailComponentDetail from './common/EmailComponentDetail.vue';

export default {
  name: 'ComponentsProcessMenu',
  components: {
    ProcessComponentDetail,
    // EmailComponentDetail,
    ComponentModal
  },
  data() {
    return {
      componentModal: false,
      name: [],
      description: [],
      criteriaItems: [],
      process_list: null,
    }
  },
  
  methods: {
    initProcess() {
      console.warn('remind')
      axios.get(`https://d476-210-216-0-254.ngrok.io/components/process`, {}, {withCredentials: true}
      ).then(res => {
        this.process_list = res.data.processComponents;
        console.log(this.process_list)
        this.divideList();
      })
    },
    divideList(){
      for(let i of this.process_list){
        this.name.push(i.name)
        this.description.push(i.description)
        this.criteriaItems.push(i.criteriaItems)
      }
        console.log(this.name)
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
  margin-bottom: 32px;
}

.add-btn{
  width: 145px;
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

.component-type{
  margin-bottom: 28px;
}

.component-type-btn {
  cursor: pointer;
  padding: 6px 12px;
  margin-right: 8px;
  border-radius: 100px;
  border: 1px solid #D6D6D6;
  background-color: #FAFAFA;
}

.component-process{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  margin-right: 10px;
}


.sub-title {
  font-weight: 700;
  color: #605E5C;
  font-size: 20px;
}

.wrap {
  margin-top: 35px;
}
</style>
