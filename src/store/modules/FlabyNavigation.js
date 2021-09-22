import { gsap } from "gsap";
export default {
  state: {
    logo: {
      src: "logo.png",
      alt: "logo",
    },
    navLinks: [
      {
        text: "home",
        link: "/",
      },
      {
        text: "services",
        link: "/services",
      },
      {
        text: "portfolio",
        link: "/portfolio",
      },
      {
        text: "blog",
        link: "/blog",
      },
      {
        text: "contact us",
        link: "/contact",
      },
    ],
    navbtn: "Login",
  },
  getters: {
    logo(state) {
      return state.logo;
    },
    navLinks(state) {
      return state.navLinks;
    },
    navbtn(state) {
      return state.navbtn;
    },
  },
  mutations: {
    formLoginUnlock() {
      console.log("form login unlock!");
    },
    navigationAnimsFunc() {
      gsap.from("#navigation", {
        y: -200,
        duration: 2,
        ease: "expo.outout",
      });
    },
    navFixed() {
      window.onscroll = () => {
        const nav = document.getElementById("navigation");
        if (window.pageYOffset > 250) {
          nav.classList.add("navigation--fixed");
        } else {
          nav.classList.remove("navigation--fixed");
        }
      };
    },
  },
};
