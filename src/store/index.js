import { createStore } from 'vuex'
import FlabyNavigation from './modules/FlabyNavigation'
import FlabyHeader from './modules/FlabyHeader'
import FlabyServicesOur from './modules/FlabyServicesOur'
import FlabyFeatures from './modules/FlabyFeatures'
import FlabyServicesOther from './modules/FlabyServicesOther'
import FlabyDownload from './modules/FlabyDownload'
import FlabyPriceCards from './modules/FlabyPriceCards'
import FlabySubscribe from './modules/FlabySubscribe'
import FlabyFooter from './modules/FlabyFooter'
import FlabyCopy from './modules/FlabyCopy'

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
    FlabySubscribe,
    FlabyFooter,
    FlabyCopy,
  }
})
