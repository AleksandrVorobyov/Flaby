import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
export default {
  state: {
    copy: {
      text: [
        "© Copyright 2021",
        "Template Designed By Sourabh Barua",
        "All rights reserved",
      ],
    },
  },
  getters: {
    copy(state) {
      return state.copy;
    },
  },
  mutations: {
    copyAnimsFunc() {
      if (window.innerWidth >= 768 && window.innerHeight >= 850) {
        gsap.registerPlugin(ScrollTrigger);
        const footerColItem = document.querySelectorAll(".copy-text");

        footerColItem.forEach((item, idx) => {
          gsap.from(item, {
            scrollTrigger: {
              trigger: "#copy",
              toggleActions: "restart pause play pause",
            },
            opacity: 0,
            yPercent: 20,
            duration: 1,
            delay: 0.3 * idx,
          });
        });
      }
    },
  },
};
