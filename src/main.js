import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(Vuex)
import 'papercss/dist/paper.min.css'

Vue.config.productionTip = false


const store  = new Vuex.Store({
  state:{
    list:[],
    newList:''
  },
  mutations:{
    GET_LIST(state,list){
      state.newList = list
    },
    ADD_LIST(state){
      state.list.push({
        title: "Add your title here",
        tag: "Add your tag here",
        text: "Add the details here",
        completed: false
      })
    },
  }
})


new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
