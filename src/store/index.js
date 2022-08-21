import Vue from 'vue'
import Vuex from 'vuex'

import { 
  apiGetPipelines, 
  apiGetProcess,
  apiGetEmail,
  apiGetApplication,
  // apiPostPipelines, 
  // apiPostProcess,
  // apiPostEmail,
  // apiPostApplication,

} from '@/service/api'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: false,
  state: {
    pipelines_list : [],
    process_list: [],
    email_list: [],
    applications_list: [],
    
    pipelines_data : [],
    process_data: [],
    email_data: [],
    applications_data: [],
  },
  mutations: {
    SET_PIPELINES_LIST(state, payload){
      state.pipelines_list = payload
    },
    SET_PROCESS_LIST(state, payload){
      state.process_list = payload
    },
    SET_EMAIL_LIST(state, payload){
      state.email_list = payload
    },
    SET_APPLICATIONS_LIST(state, payload){
      state.applications_list = payload
    },
    SET_PIPELINES_DATA(state, payload){
      state.pipelines_data = payload
    },
    SET_PROCESS_DATA(state, payload){
      state.process_data = payload
    },
    SET_EMAIL_DATA(state, payload){
      state.email_data = payload
    },
    SET_APPLICATIONS_DATA(state, payload){
      state.applications_data = payload
    },
  },
  getters: {
  },
  actions: {
    GET_PIPELINES_LIST({ commit }, params){
      apiGetPipelines(commit, params)
    },
    // POST_PIPELINES_LIST({ commit }, params){
    //   apiPostPipelines(commit, params)
    // },
    GET_PROCESS_LIST({ commit }, params){
      apiGetProcess(commit, params)
    },
    // POST_PROCESS_LIST({ commit }, params){
    //   apiPostProcess(commit, params)
    // },
    GET_EMAIL_LIST({ commit }, params){
      apiGetEmail(commit, params)
    },
    // POST_EMAIL_LIST({ commit }, params){
    //   apiPostEmail(commit, params)
    // },
    GET_APPLICATIONS_LIST({ commit }, params){
      apiGetApplication(commit, params)
    },
    // POST_APPLICATIONS_LIST({ commit }, params){
    //   apiPostApplication(commit, params)
    // }
  }
})

export default store