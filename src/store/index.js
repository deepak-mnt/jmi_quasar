import Vue from 'vue'
import Vuex from 'vuex'

import example from './module-example'
import showcase from './showcase'
import testShowcase from './test-showcase'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    example,
    showcase,
    testShowcase
  }
})

if (process.env.DEV && module.hot) {  
  module.hot.accept(['./showcase'], () => {
    const newShowcase = require('./showcase').default
    store.hotUpdate({ modules: { showcase: newShowcase } })
  })
}

export default store
