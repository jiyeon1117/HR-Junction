<template>
  <div id="container">
    <div class="filter">
      <img class="sort-img" src="../assets/recent.png">
      <span class="sort">filter</span>
    </div>
    <div class="status">
      <div class="documents">
        <span class="sub-title">Receipt of documents</span>
        <div class="wrap">
          <ReceiptDetail v-for="(item, index) in sender" :key="index" :sender="sender[index]" :position="position[index]" :status="status[index]"/>
        </div>
      </div>
      <div class="ongoing">
        <span class="sub-title">Ongoing</span>
        <div class="wrap">
          <ReceiptDetail v-for="(item, index) in sender" :key="index" :sender="sender[index]" :position="position[index]" :status="status[index]"/>
        </div>
      </div>
      <div class="completed">
        <span class="sub-title">Completed</span>
        <div class="wrap">
          <ReceiptDetail v-for="(item, index) in sender" :key="index" :sender="sender[index]" :position="position[index]" :status="status[index]"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import ReceiptDetail from './common/ReceiptDetail.vue';

export default {
  name: 'HRInfo',
  components: {
    ReceiptDetail
  },
  data() {
    return {
      processModal: false,
      sender: [],
      position: [],
      status: [],
      application_list: null,
    }
  },
  methods: {
    initProcess() {
      console.warn('remind')
      axios.get(`https://d476-210-216-0-254.ngrok.io/applications`, {}, {withCredentials: true}
      ).then(res => {
        this.application_list = res.data;
        console.log(this.application_list)
        this.divideList();
      })
    },
    divideList(){
      
      for(let i of this.application_list){
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
  flex-direction: column;
  /* background-color: palevioletred; */
}

.filter {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 52px;
  background-color: #FAFAFA;
  border-bottom: 1px solid #D6D6D6;
}

.sort-img {

}

.sort{
  margin-right: 20px;
  color: #252423;
  font-size: 12px;
  font-weight: 400;
}

.status{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 0 0 84px;
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
</style>
