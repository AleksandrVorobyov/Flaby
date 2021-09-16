import { createStore } from 'vuex'
import FlabyNavigation from './modules/FlabyNavigation'
import FlabyHeader from './modules/FlabyHeader'
import FlabyServicesOur from './modules/FlabyServicesOur'
import FlabyFeatures from './modules/FlabyFeatures'
import FlabyServicesOther from './modules/FlabyServicesOther'
import FlabyDownload from './modules/FlabyDownload'
import FlabyPriceCards from './modules/FlabyPriceCards'

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
    FlabyDownload,
    FlabyPriceCards,
  }
})
