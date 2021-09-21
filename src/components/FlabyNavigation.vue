<template lang="pug">
section#navigation.navigation
  .container
    .navigation-wrap
      .navigation__logo
        router-link.navigation__logo-link(to="/")
          img.navigation__logo-link-img(
            :src="require('@/assets/img/' + logo.src)",
            :alt="logo.alt"
          )
      .navigation__nav
        ul.navigation__nav-row
          li.navigation__nav-item(v-for="item in navLinks")
            router-link.navigation__nav-item-link(:to="item.link")
              span {{ item.text }}
      .navigation__form
        btn-double(:btnText="navbtn", @action="formLoginUnlock()")
      button.navigation__burger(@click="unlockSidebar(), hideScroll()")
        span
</template>

<script>
import { mapGetters } from "vuex";
import btnDouble from "./parts/btn-double.vue";

export default {
  name: "FlabyNavigation",
  components: {
    btnDouble,
  },
  computed: {
    ...mapGetters(["logo", "navbtn", "navLinks"]),
  },
  methods: {
    formLoginUnlock() {
      this.$store.commit("formLoginUnlock");
    },
    unlockSidebar() {
      this.$store.commit("unlockSidebar");
    },
    hideScroll() {
      this.$store.commit("hideScroll");
    },
  },
  mounted() {
    window.onscroll = () => {
      const nav = document.getElementById("navigation");
      if (window.pageYOffset > 250) {
        nav.classList.add("navigation--fixed");
      } else {
        nav.classList.remove("navigation--fixed");
      }
    };
  },
};
</script>

<style scoped lang="scss">
.navigation {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2000;
  height: 140px;
  overflow: hidden;
}

.navigation--fixed {
  position: fixed;
  background: rgba(0, 0, 0, 0.4);
  animation: navigationFixed 0.6s ease-in-out 0s;
  border-bottom: 2px solid var(--btnDoubleBg);

  .navigation-wrap {
    border-bottom: 0px solid var(--btnDoubleBg);
  }
}

.navigation-wrap {
  padding: 40px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ffffff99;
  height: 140px;
  overflow: hidden;
}

@media (max-width: 970px) {
  .navigation__nav {
    display: none;
  }
}

.navigation__nav-row {
  display: flex;
  align-items: center;
}

.navigation__nav-item + .navigation__nav-item {
  margin-left: 20px;
}

.navigation__nav-item-link {
  position: relative;
  display: block;
  padding: 10px;
  font-family: var(--fontRalewayMedium);
  font-size: 17px;
  color: var(--textWhite);
  font-weight: 500;
  text-transform: uppercase;
  line-height: 1;
  border-radius: 10px;
  background: transparent;
  z-index: 10;
  overflow: hidden;

  &::before {
    position: absolute;
    top: 0;
    left: 0%;
    width: 100%;
    height: 0%;
    content: "";
    background: var(--btnDoubleBg);
    transition: height 0.3s linear;
    z-index: -1;
  }
  &::after {
    position: absolute;
    bottom: 0;
    left: 0%;
    width: 100%;
    height: 0%;
    content: "";
    background: var(--btnDoubleBg);
    transition: height 0.3s linear;
    z-index: -1;
  }
}

.router-link-active.navigation__nav-item-link,
.navigation__nav-item-link:hover {
  &::before,
  &::after {
    height: 50%;
  }
}

@keyframes navigationFixed {
  from {
    top: -250px;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
}

@media (max-width: 970px) {
  .navigation__form {
    display: none;
  }
}

.navigation__burger {
  position: relative;
  display: block;
  cursor: pointer;
  background: linear-gradient(var(--btnDoubleBg), #ffffff80);
  width: 60px;
  height: 60px;
  border: 2px solid var(--whiteBg);
  border-radius: 10px;
  overflow: hidden;

  &::before {
    position: absolute;
    top: 10px;
    left: 5px;
    width: calc(100% - 10px);
    height: 4px;
    background: var(--whiteBg);
    content: "";
    transition: top 0.3s linear 0s, transform 0.3s linear 0s;
  }

  &::after {
    position: absolute;
    bottom: 10px;
    left: 5px;
    width: calc(100% - 10px);
    height: 4px;
    background: var(--whiteBg);
    content: "";
    transition: bottom 0.3s linear 0s, transform 0.3s linear 0s;
  }

  span::before {
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    width: calc(100% - 10px);
    height: 4px;
    background: var(--whiteBg);
    content: "";
    transition: opacity 0.3s linear 0.3s;
  }
}

.navigation__burger.navigation__burger--active {
  span::before {
    opacity: 0;
    transition: opacity 0.3s linear 0s;
  }

  &::before {
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
    transition: top 0.3s linear 0.3s, transform 0.3s linear 0.3s;
  }

  &::after {
    bottom: 50%;
    transform: translateY(50%) rotate(-45deg);
    transition: bottom 0.3s linear 0.3s, transform 0.3s linear 0.3s;
  }
}

@media (min-width: 970px) {
  .navigation__burger {
    display: none;
  }
}
</style>
