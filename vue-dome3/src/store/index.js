import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [],
    info: {}
  },
  mutations: {
    updateList(state, payload){
      state.list = payload;
    },
    getDetail(state,payload){
      let info ={}
      let index=state.list.findIndex(item=>item.id==payload);
      if(index !==-1){
        info=state.list[index];
      }
      state.info=info;
    },
    favor(state,payload){
      let index = state.list.findIndex(item=>item.id==payload)
      let info = {...state.list[index]};
      info.favor++;
      state.list[index] = info
    }
    
  },
  actions: {
    async getList({state, commit}, {type, page}){
      let data = await axios.get(`/api/list?type=${type}&page=${page}&pageSize=10`)
      if (page == 1){
          commit('updateList', data.data);
          // this.list = data.data;
      }else{
          if (data.data.length === 0){
              alert('拉到底了');
          }
          commit('updateList', [...state.list, ...data.data])
          // this.list = [...this.list, ...data.data];
      }
    }
  },
  modules: {
  },
  plugins: [createLogger()]
})
