export default {
  state: {
    featuresInfo: {
      subtitle: "We have great features with",
      title: "Unlimited Customization Features",
      desc:
        "There are many variations of passages of Lorem Ipsum available,  the majorityalteration make difficult",
      list: [
        "More wordpress featrures with great responsive design.",
        "Corporate flat design with necessary elements.",
        "Free vector shape and mockup by great designer.",
        "Full one page flat and modern trend following goods.",
      ],
      btn: "Read More",
    },
  },
  getters: {
    featuresInfo(state) {
      return state.featuresInfo;
    },
  },
};


