
<template>
  <Transition name="modal">
    <div v-if="show" class="overlay">
      <div class="modal-wrap">
        <div class="modal-container">
          <button class="close-btn" @click="$emit('close')">
            <img class="close-img" src="../../assets/close.png">
          </button>
          <div class="modal-content">
            <div class="modal-title">
              <span class="title">New Recruiting Process</span>
            </div>
            <div class="process-name">
              <span class="name">Process Name</span>
              <input v-model="pipelines_data.position" type="text" placeholder="Write the process name">
            </div>
            <div class="process-description">
              <span class="description">Process Description</span>
              <input v-model="pipelines_data.description" type="text" placeholder="Explanation of this process (e.g. purpose, ...)">
            </div>
            <div class="process-arrange">
              <span class="arrange">Arrange Process</span>
              <div class="process-item">
                <ProcessItem v-for="(items, index) in name" :key="index" :name="name[index]"/>
                <div class="add-component">
                  <button class="add-btn">
                    <span class="add-name">+ Add components</span>
                  </button>
                </div>                
              </div>
            </div>

            <div class="process-input" >
              <div class="process-title">
                <span class="sub-title">process 1</span>
                <div class="process-setting">
                  <div class="channel-setting">
                    <span class="channel">Select Channel</span>
                    <input v-model="pipelines_data.notificationChannel" class="channel-input" type="text" placeholder="Explanation of this porcess (e.g. purpose, ...)">
                  </div>
                  <div class="person-setting">
                    <span class="person">Assign person in charge</span>
                    <input v-model="pipelines_data.managerEmails" class="person-input" type="text" placeholder="Search Name or Mail Address">             
                  </div>  
                </div>       
                <div class="thread-description">
                  <span class="thread">Thread Description</span>
                  <input v-model="pipelines_data.notificationContent" class="thread-input" type="text" placeholder="Write contents">
                </div>
                <!-- <div class="submit">
                  <button class="complet-btn">
                    <span class="complet">Complet</span>
                  </button>
                </div>    -->
              </div>
            </div>

            <div class="process-setting" v-show="false">
              <div class="mail-type">
                <span class="mail">Mail Type Component</span>
                <select v-model="mail_components">
                  <option value="0">Select Components</option>
                  <option value="1">mail1</option>
                  <option value="2">mail2</option>
                </select>
              </div>
              <div class="nofitication-setting">
                <span class="nofitication">Nofitication Setting</span>
                <select v-model="nofitication_setting">
                  <option value="0">Select Ducation for Respons</option>
                  <option value="1">1 weeks</option>
                  <option value="2">2 weeks</option>
                </select>                
              </div>              
            </div>
          </div>
          <div class="save-process">
            <button class="save-btn" @click="saveComponent">
              <span class="save">Save Process</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script scoped>
import axios from 'axios'
import ProcessItem from './ProcessItem.vue'
export default {
  name: "ProcessModal",
  components: { 
    ProcessItem 
  },
  props: {
    show: Boolean
  },
  data() {
    return {
      processModal : false,
      name: [],
      process_list: null,
      pipelines_data: {
        position : "",
        description : "",
        pipelineComponents : {
          processComponentId: "",
          emailComponentId: "",
          applicationId: "",
          createNextMeeting: true,
          notificationChannel: "",
          notificationContent: "",
          notificationIntervalTime: 0,
          managerEmails: { 

          }
        }
      },
    }
  },
  methods: {
    saveComponent(){
      axios.post(`https://d476-210-216-0-254.ngrok.io/pipelines`, this.pipelines_data, {withCredentials: true}
      ).then(res => {
        console.warn('res', res)
      })
    },
    initProcess() {
      console.warn('remind')
      axios.get(`https://d476-210-216-0-254.ngrok.io/pipelines`, {}, {withCredentials: true}
      ).then(res => {
        this.process_list = res.data.processComponents;
        console.log(this.process_list)
        this.divideList();
      })
    },
    divideList(){
      for(let i of this.process_list){
        this.name.push(i.name)
      }
    }
  },
  created() {
    if(this.process_list == null){
      this.initProcess()
    }
  },
  
}
</script>


<style scoped>
.overlay {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrap {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  position: relative;
  width: 903px;
  height: 822px;
  margin: 0px auto;
  background-color: white;
  border: 1px solid #C4C4C4;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-content{
  width: 767px;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-left: 68px;
}

.modal-title{
  margin-bottom: 27px;
}

.title{
  font-size: 20px;
  font-weight: 700;
  color: #605E5C;
}

.process-name, .process-description{
  height: 66px;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
}

.process-arrange{
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.name, .description, .arrange, .mail, .nofitication{
  font-size: 16px;
  font-weight: 400;
  color: #605E5C;
  margin-bottom: 16px;
}

.channel, .person, .thread{
  margin-top: 24px;
  font-size: 12px;
  font-weight: 400;
  color: #605E5C;
  margin-bottom: 10px;
}

input{
  height: 30px;
  background-color: white;
  border: 0;
  border-bottom: 1px solid #D6D6D6;
}

input:focus {
  outline: none;
} 

.process-item{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
}

.submit{
  float: right;
}

.complet{
  font-size: 12px;
  font-weight: 400px;
  color: white;
}

.add-btn, .complet-btn{
  display: flex;
  padding: 5px 26px;
  align-items: center;
  border-radius: 4px;
  border: 1px solid #D6D6D6;
  cursor: pointer;
}

.add-btn{
  background-color: #D6D6D6;
}
.complet-btn{
  margin-top: 20px;
  background-color: #CD7332;
}

.add-name{
  color: #605E5C;
  font-size: 12px;
  font-weight: 500;
  margin: auto 0;
}

.add-component{
  margin-right: 16px;
  margin-bottom: 8px;
}


.process-setting{
  display: flex;
  flex-direction: row;
}


.mail-type, .nofitication-setting, .channel-setting, .person-setting{
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

select{
  width: 362px;
  height: 29px;
  border: 0;
  border-bottom: 1px solid #D6D6D6;
}

.save{
  font-size: 20px;
  font-weight: 700;
  color: white;
}

.save-process{
  position: absolute;
  bottom: 0;
}

.save-btn{  
  width: 903px;
  height: 60px;
  background-color: #CD7332;
  border: none;
}

.process-input{
  background-color: #FAFAFA;
}

.process-title{
  width: 707px;
  height: 246px;
  padding: 24px 30px;
}

.sub-title{
  font-size: 14px;
  font-weight: 600;
  color: #605E5C;
}

.channel-input, .person-input{
  width: 340px;
  height: 25px;
  background-color: #FAFAFA;
}

.thread-description{
  display: flex;
  flex-direction: column;
}

.thread-input{
  width: 707px;
  height: 47px;
  border: 1px solid #D6D6D6;
}
















.close-btn {
  float: right;
  background-color: white;
  border: none;
  margin-top: 24px;
  margin-right: 24px;
}

.close-img{
  width: 20px;
  height: 20px;
}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>