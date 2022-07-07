import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
export default {
  state: {
    servicesOur: {
      title: "our sevices",
      subtitle: "Welcome to",
    },
    servicesOurItems: [
      {
        id: "servicesCard-01",
        src: "services/web-development.png",
        alt: "Web Development",
        title: "Web Development",
        desc:
          "There are many variations of passages of Lorem Ipsum available,  the majorityalteration make difficult",
      },
      {
        id: "servicesCard-02",
        src: "services/photography.png",
        alt: "Photography",
        title: "Photography",
        desc:
          "There are many variations of passages of Lorem Ipsum available,  the majorityalteration make difficult",
      },
      {
        id: "servicesCard-03",
        src: "services/vector-artist.png",
        alt: "Vector Artist",
        title: "Vector Artist",
        desc:
          "There are many variations of passages of Lorem Ipsum available,  the majorityalteration make difficult",
      },
    ],
  },
  getters: {
    servicesOur(state) {
      return state.servicesOur;
    },
    servicesOurItems(state) {
      return state.servicesOurItems;
    },
  },
  mutations: {
    servicesOurAnimsFunc() {
      if (window.innerWidth >= 768 && window.innerHeight >= 850) {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(".services-our__title", {
          scrollTrigger: {
            trigger: "#services-our",
            toggleActions: "restart pause play pause",
          },
          yPercent: -500,
          opacity: 0,
          duration: 1,
        });

        const servicesOurItems = document.querySelectorAll(".services-our__item");

        servicesOurItems.forEach((item, idx) => {
          gsap.from(item, {
            scrollTrigger: {
              trigger: "#services-our",
              toggleActions: "restart pause play pause",
            },
            yPercent: 500,
            opacity: 0,
            duration: 1,
            delay: idx * 0.2,
          });
        });
      }
    },
  },
};
