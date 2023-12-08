import { createStore } from "vuex";
import state from './state';
import * as getters from './getters';
import * as actions from './actions';
import * as mutations from './mutations';

const store = createStore({
  state, 
  actions,
  getters,
  mutations
});

export default store;