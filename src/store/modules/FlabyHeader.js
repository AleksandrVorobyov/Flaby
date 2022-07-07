import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

export default {
  state: {
    headerBg: [
      {
        src: "header/pencil.png",
        alt: "pencil",
      },
      {
        src: "header/pencil-2.png",
        alt: "pencil-2",
      },
      {
        src: "header/headphones.png",
        alt: "headphones",
      },
      {
        src: "header/earphones.png",
        alt: "earphones",
      },
    ],
    headerTitle: "Flat + free = flaby",
    headerSubtitle:
      "A Modern Flat design corporate template for free download with all great features and trendy look.",
    headerPhone: {
      borderSrc: "header/phone-border.png",
      borderAlt: "phone-border",
      imgBgSrc: "header/phone-bg.jpg",
      imgBgAlt: "phone-bg",
    },
    googleStore: {
      text: "Google Store",
      href: "https://play.google.com/store/apps",
    },
  },
  getters: {
    headerBg(state) {
      return state.headerBg;
    },
    headerTitle(state) {
      return state.headerTitle;
    },
    headerSubtitle(state) {
      return state.headerSubtitle;
    },
    headerPhone(state) {
      return state.headerPhone;
    },
    googleStore(state) {
      return state.googleStore;
    },
  },
  mutations: {
    headerAnimsFunc() {
      if (window.innerWidth >= 768 && window.innerHeight >= 850) {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(".header-col", {
          scrollTrigger: {
            trigger: "#header",
            toggleActions: "restart pause play pause",
          },
          yPercent: 500,
          duration: 1,
        });
        gsap.from(".header__phone", {
          scrollTrigger: {
            trigger: "#header",
            toggleActions: "restart pause play pause",
          },
          yPercent: 500,
          opacity: 0,
          duration: 1,
        });
        gsap.from(".header-bg-img:nth-child(1), .header-bg-img:nth-child(2)", {
          scrollTrigger: {
            trigger: "#header",
            toggleActions: "restart pause play pause",
          },
          xPercent: -300,
          opacity: 0,
          duration: 1,
          ease: "expo.outout",
          delay: 0,
        });

        gsap.from(".header-bg-img:nth-child(3)", {
          scrollTrigger: {
            trigger: "#header",
            toggleActions: "restart pause play pause",
          },
          xPercent: -300,
          opacity: 0,
          duration: 1,
          ease: "expo.outout",
          delay: 0,
        });

        gsap.from(".header-bg-img:nth-child(4)", {
          scrollTrigger: {
            trigger: "#header",
            toggleActions: "restart pause play pause",
          },
          xPercent: 300,
          opacity: 0,
          duration: 1,
          ease: "expo.outout",
          delay: 0,
        });

        const elipses = document.querySelectorAll(".header-elipses span");
        gsap.from(elipses, {
          scrollTrigger: {
            trigger: "#header",
            toggleActions: "restart pause play pause",
          },
          scale: 0,
          opacity: 0,
          duration: 1,
          ease: "expo.outout",
          delay: 0,
        });
      }
    },
  },
};
