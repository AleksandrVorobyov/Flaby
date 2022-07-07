import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
export default {
  state: {
    priceCards: {
      title: "Pricing plan",
      subtitle: "Get Idea About",
      list: [
        {
          src: "price-cards/book.png",
          alt: "book.png",
          name: "Student",
          price: "39",
          btn: "Sign up",
          listCard: [
            "6 GB storage",
            "Fast Brandwidht",
            "Responsive",
            "Customization",
          ],
        },
        {
          src: "price-cards/bag.png",
          alt: "bag.png",
          name: "Professional",
          price: "59",
          btn: "Sign up",
          listCard: [
            "6 GB storage",
            "Fast Brandwidht",
            "Responsive",
            "Customization",
          ],
        },
        {
          src: "price-cards/shopping-bag.png",
          alt: "shopping-bag.png",
          name: "Unlimited",
          price: "99",
          btn: "Sign up",
          listCard: [
            "6 GB storage",
            "Fast Brandwidht",
            "Responsive",
            "Customization",
          ],
        },
      ],
    },
  },
  getters: {
    priceCards(state) {
      return state.priceCards;
    },
  },
  mutations: {
    priceCardsAnimsFunc() {
      if (window.innerWidth >= 768 && window.innerHeight >= 850) {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(".price-cards__title", {
          scrollTrigger: {
            trigger: "#price-cards",
            toggleActions: "restart pause play pause",
          },
          yPercent: -500,
          opacity: 0,
          duration: 1,
        });

        const priceCardsListItem = document.querySelectorAll(
          ".price-cards__list-item"
        );

        priceCardsListItem.forEach((item, idx) => {
          gsap.from(item, {
            scrollTrigger: {
              trigger: "#price-cards",
              toggleActions: "restart pause play pause",
            },
            scale: 0.4,
            opacity: 0,
            duration: 1,
            delay: 0.5 * idx,
          });
        });
      }
    },
  },
};
