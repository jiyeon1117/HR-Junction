
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
              <span class="title">New HR Component</span>
            </div>
            <div class="component-name">
              <span class="name">Component Name</span>
              <input v-model="process_data.name" type="text" placeholder="Write the component name">
            </div>
            <div class="component-description">
              <span class="description">Component Description</span>
              <input v-model="process_data.description" type="text" placeholder="Explanation of this component (e.g. purpose, ...)">
            </div>
            <div class="component-type">
              <span class="type">Component Type</span>
              <div class="component-item">
                <div id="processItem">
                  <button class="item-btn" @click="clickEvent('process')">
                    <span class="item-name">Process Type</span>
                  </button>
                </div>
                <div id="processItem">
                  <button class="item-btn" @click="clickEvent('email')">
                    <span class="item-name">Email Type</span>
                  </button>
                </div>            
              </div>
            </div>

            <div class="process-type" v-show="component_type == 'process'? true : false" :class="component_type == 'process'? 'click' : ''">
              <div class="component-title">
                <span class="sub-title">Evaluation Items</span>
                <div class="item-list">
                  <input v-model="item1" class="item-list-input" type="text" placeholder="Write the process name">
                  <input v-model="item2" class="item-list-input" type="text" placeholder="Write the process name">
                  <input v-model="item3" class="item-list-input" type="text" placeholder="Write the process name">
                </div>
                
                <span class="sub-title">Acceptance Score</span>
                <div class="score-setting">
                  <div class="avg-setting">
                    <span class="avg">Cut Line Average Score</span>
                    <input v-model="avg" class="avg-input" type="text" placeholder="Explanation of this porcess (e.g. purpose, ...)">
                  </div>
                  <div class="min-setting">
                    <span class="min">Minimum number of Reviewers</span>
                    <input v-model="min" class="min-input" type="text" placeholder="Search Name or Mail Address">             
                  </div>  
                </div>        
              </div>
            </div>

          </div>
          <div class="save-process">
            <button class="save-btn" @click="saveComponent(component_type, min, avg)">
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
// import ProcessItem from './ProcessItem.vue'
export default {
  name: 'ComponentModal',
  components: { 
    // ProcessItem 
  },
  props: {
    show: Boolean
  },
  data() {
    return {
      component_type: null,
      avg: 0,
      min: 0,
      item1 : "",
      item2 : "",
      item3 : "",
      process_data: {
        name : "",
        description: "",
        createMeetingUrl: true,
        passCondition : "",
        dueDayCount : 0,
        criteriaItems : {}
      }
    }
  },
  methods: {
    clickEvent(type){
      this.component_type = type
      console.warn('type', this.component_type)
    },
    saveComponent(type, min, avg){
      if(type != null){
        // this.process_data.criteriaItems.push(item1, item2, item3)
        console.log(this.process_data)
        this.process_data.passCondition = "AVG " + ">=" + avg + " AND " + "REW" + ">=" + min;
        console.log(this.process_data.passCondition)
        axios.post(`https://d476-210-216-0-254.ngrok.io/components/process`, this.process_data, {withCredentials: true}
        ).then(res => {
          console.warn('res', res)
        })
      }
    }
  },
}
</script>


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
.item-list-input{
  background-color: #FAFAFA;
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

.component-name, .component-description{
  height: 66px;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
}

.component-type{
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.name, .description, .type{
  font-size: 16px;
  font-weight: 400;
  color: #605E5C;
  margin-bottom: 16px;
}

.min, .avg, .thread{
  margin-top: 24px;
  font-size: 12px;
  font-weight: 400;
  color: #605E5C;
  margin-bottom: 10px;
}

input{
  height: 30px;
  border: 0;
  border-bottom: 1px solid #D6D6D6;
}

input:focus {
  outline: none;
} 

.component-item{
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
.click {
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


.score-setting{
  display: flex;
  margin-top: 8px;
  margin-left: 6px;
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

.process-type{
  background-color: #FAFAFA;
}

.component-title{
  width: 707px;
  height: 246px;
  padding: 24px 30px;
}

.sub-title{
  margin-bottom: 5px;
  font-size: 12px;
  font-weight: 600;
  color: #605E5C;
}

.avg-input, .min-input{
  width: 340px;
  height: 25px;
  background-color: #FAFAFA;
}

.item-list{
  display: flex;
  margin: 8px;
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