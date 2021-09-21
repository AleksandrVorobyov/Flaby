import { createStore } from 'vuex'
import FlabyNavigation from './modules/FlabyNavigation'
import FlabySidebar from './modules/FlabySidebar'
import FlabyHeader from './modules/FlabyHeader'
import FlabyServicesOur from './modules/FlabyServicesOur'
import FlabyFeatures from './modules/FlabyFeatures'
import FlabyServicesOther from './modules/FlabyServicesOther'
import FlabyComments from './modules/FlabyComments'
import FlabyDownload from './modules/FlabyDownload'
import FlabyPriceCards from './modules/FlabyPriceCards'
import FlabySubscribe from './modules/FlabySubscribe'
import FlabyFooter from './modules/FlabyFooter'
import FlabyCopy from './modules/FlabyCopy'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    FlabyNavigation,
    FlabySidebar,
    FlabyHeader,
    FlabyServicesOur,
    FlabyFeatures,
    FlabyServicesOther,
    FlabyComments,
    FlabyDownload,
    FlabyPriceCards,
    FlabySubscribe,
    FlabyFooter,
    FlabyCopy,
  }
})
