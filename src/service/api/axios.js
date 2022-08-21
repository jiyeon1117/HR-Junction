import axios from 'axios'

export const apiGetPipelines = async (commit) => {
  return await
  axios({
    url: "https://d476-210-216-0-254.ngrok.io/pipelines",
    method: "GET"
  }).then(res =>{
    commit('SET_PIPELINES_LIST', res.data)
  })
}

// export const apiPostPipelines = async () => {
//   return await
//   axios({
//     url: "https://0db4-210-216-0-254.ngrok.io/pipelines",
//     method: "POST",
//   }).then(res =>{
//     // commit('SET_PIPELINES_LIST', res.data)
//   })
// }
export const apiGetProcess = async (commit) => {
  return await
  axios({
    url: "https://d476-210-216-0-254.ngrok.io/components/process",
    method: "GET"
  }).then(res =>{
    commit('SET_PROCESS_LIST', res.data)
  })
}
// export const apiPostProcess = async () => {
//   return await
//   axios({
//     url: "https://0db4-210-216-0-254.ngrok.io/pipelines",
//     method: "POST"
//   }).then(res =>{
//     // commit('SET_PIPELINES_MODAL', res.data)
//   })
// }
export const apiGetEmail = async (commit) => {
  return await
  axios({
    url: "https://d476-210-216-0-254.ngrok.io/components/email",
    method: "GET"
  }).then(res =>{
    commit('SET_EMAIL_LIST', res.data)
  })
}
// export const apiPostEmail = async () => {
//   return await
//   axios({
//     url: "https://0db4-210-216-0-254.ngrok.io/pipelines",
//     method: "POST"
//   }).then(res =>{
//     // commit('SET_PIPELINES_MODAL', res.data)
//   })
// }
export const apiGetApplication = async (commit) => {
  return await
  axios({
    url: "https://d476-210-216-0-254.ngrok.io/applications",
    method: "GET"
  }).then(res =>{
    commit('SET_APPLICATIONS_LIST', res.data)
  })
}
// export const apiPostApplication  = async () => {
//   return await
//   axios({
//     url: "https://0db4-210-216-0-254.ngrok.io/pipelines",
//     method: "POST"
//   }).then(res =>{
//     // commit('SET_PIPELINES_MODAL', res.data)
//   })
// }

// export default store;