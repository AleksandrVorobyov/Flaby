import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
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
  mutations: {
    featuresAnimsFunc() {
      if (window.innerWidth >= 768 && window.innerHeight >= 850) {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(".features__info", {
          scrollTrigger: {
            trigger: "#features",
            toggleActions: "restart pause play pause",
          },
          xPercent: 500,
          opacity: 0,
          duration: 1,
        });

        gsap.from(".features-wrap", {
          scrollTrigger: {
            trigger: "#features",
            toggleActions: "restart pause play pause",
          },
          opacity: 0,
          duration: 1,
          delay: 0.2,
        });
      }
    },
  },
};
