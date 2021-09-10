import { createStore } from 'vuex'
import FlabyNavigation from './modules/FlabyNavigation'
import FlabyHeader from './modules/FlabyHeader'
import FlabyServicesOur from './modules/FlabyServicesOur'
import FlabyFeatures from './modules/FlabyFeatures'
import FlabyServicesOther from './modules/FlabyServicesOther'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  modules: {
    FlabyNavigation,
    FlabyHeader,
    FlabyServicesOur,
    FlabyFeatures,
    FlabyServicesOther,
  }
})
