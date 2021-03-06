import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import getters from './getters';
import home from './modules/home';
import navlist from './modules/navlist'
import topic from './modules/topic'

Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    home,
    navlist,
    topic
  }
})
