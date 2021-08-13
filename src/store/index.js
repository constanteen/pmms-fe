import { createStore } from "vuex";
// import 'es6-promise/auto';
import layout from './modules/layout'
import menu from './modules/menu'

export const store = createStore({
    state: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
      layout,
      menu
    }
});
