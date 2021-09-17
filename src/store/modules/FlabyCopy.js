export default {
  state: {
    copy: {
        text: ["© Copyright 2021", "Template Designed By Sourabh Barua", "All rights reserved"]
    },
  },
  getters: {
    copy(state) {
      return state.copy;
    },
  },
};
