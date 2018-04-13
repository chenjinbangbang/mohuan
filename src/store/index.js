import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    name: "串饰", //主分类
  },
  mutations: {
    set_name: (state,msg) => {
      state.name = msg;
    }
  },
  actions: {
    setName({commit},msg){
      commit('set_name',msg);
    }
  },
  getters: {
    name: state => state.name
  }

});

export default store;