import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
export default {
  state: {
    download: {
      title: "Great Resourse for free",
      subtitle: "Feel free to download our",
      text:
        "There are many variations of passages of Lorem Ipsum available & majorityalteration",
      desc:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia",
      src: "download/download.png",
      alt: "download",
    },
  },
  getters: {
    download(state) {
      return state.download;
    },
  },
  mutations: {
    downloadAnimsFunc() {
      if (window.innerWidth >= 768 && window.innerHeight >= 850) {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(".download-col:nth-child(1)", {
          scrollTrigger: {
            trigger: "#download",
            toggleActions: "restart pause play pause",
          },
          xPercent: -500,
          opacity: 0,
          duration: 1,
        });

        gsap.from(".download-col:nth-child(2)", {
          scrollTrigger: {
            trigger: "#download",
            toggleActions: "restart pause play pause",
          },
          opacity: 0,
          xPercent: 500,
          duration: 1,
        });
      }
    },
  },
};
