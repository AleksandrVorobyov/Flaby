export default {
  state: {
    sectionSubscribe: {
        title: "Subscribe now",
        subtitle: "For latest newsletter",
        btnText: "subscribe",
        emailPlaceholder: "Example@gmail.com",
        namePlaceholder: "Nicky Minaj",
    },
  },
  getters: {
    sectionSubscribe(state) {
      return state.sectionSubscribe;
    },
  },
};
