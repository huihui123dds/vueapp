/**
 * Created by huangxiaofeng on 2017-09-08 0008.
 */

import Vue from 'vue'
import Vuex from 'vuex';
import tabs from './modules/tabs';
import menu from './modules/menu';
import user from './modules/user';
import permission from './modules/permission';
import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    tabs,
    menu,
    user
  },
  getters
});
