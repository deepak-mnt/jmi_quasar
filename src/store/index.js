import Vue from 'vue'
import Vuex from 'vuex'

import example from './module-example'
import ui from './ui'


Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    example,
    ui
  }
})

export default store
