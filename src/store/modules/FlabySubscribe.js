export default {
  state: {
    sectionSubscribe: {
      title: "Subscribe now",
      subtitle: "For latest newsletter",
      btnText: "subscribe",
      emailPlaceholder: "Example@gmail.com",
      namePlaceholder: "Nicky Minaj",
    },
    emailSubscribe: "",
    nameSubscribe: "",
  },
  getters: {
    sectionSubscribe(state) {
      return state.sectionSubscribe;
    },
    emailSubscribe(state) {
      return state.emailSubscribe;
    },
    nameSubscribe(state) {
      return state.nameSubscribe;
    },
    nameSubscribeFunc(state) {
      const subscribeFormName = document.getElementById("subscribeFormName");
      if (state.nameSubscribe.length > 4) {
        subscribeFormName.classList.add("subscribe__form-input--success");
        if (
          subscribeFormName.classList.contains("subscribe__form-input--danger")
        ) {
          subscribeFormName.classList.remove("subscribe__form-input--danger");
        }
        return true;
      } else if (state.nameSubscribe.length == 0) {
        if (
          subscribeFormName.classList.contains("subscribe__form-input--danger")
        ) {
          subscribeFormName.classList.remove("subscribe__form-input--danger");
        }
        return false;
      } else {
        subscribeFormName.classList.add("subscribe__form-input--danger");
        if (
          subscribeFormName.classList.contains("subscribe__form-input--success")
        ) {
          subscribeFormName.classList.remove("subscribe__form-input--success");
        }
        return false;
      }
    },
    emailSubscribeFunc(state) {
      var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      var address = state.emailSubscribe;
      const subscribeFormEmail = document.getElementById("subscribeFormEmail")
      if (state.emailSubscribe.length == 0) {
        subscribeFormEmail.classList.remove("subscribe__form-input--danger");
        subscribeFormEmail.classList.remove("subscribe__form-input--success");
        return false;
      } else if (reg.test(address) == false) {
        subscribeFormEmail.classList.add("subscribe__form-input--danger");
        if (subscribeFormEmail.classList.contains("subscribe__form-input--success")) {
          subscribeFormEmail.classList.remove("subscribe__form-input--success");
        }
        return false;
      } else {
        subscribeFormEmail.classList.remove("subscribe__form-input--danger");
        subscribeFormEmail.classList.add("subscribe__form-input--success");
        return true;
      }
    }
  },
  mutations: {
    emailSubs(state, message) {
      state.emailSubscribe = message
    },
    nameSubs(state, message) {
      state.nameSubscribe = message
    },
  },
  actions: {
    validFormSubscribe({ commit, state, getters }, payload) {
      if ( getters.nameSubscribeFunc && getters.emailSubscribeFunc ) {
        state.emailSubscribe == ''
        state.nameSubscribe == ''
        return true;
      } else {
        payload.preventDefault();
        console.log(false);
        return false;
      }
    }
  }
};
