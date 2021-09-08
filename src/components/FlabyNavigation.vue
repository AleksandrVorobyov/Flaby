<template lang="pug">
section#navigation.navidation
  .container
    .navidation-wrap
      .navidation__logo
        router-link.navidation__logo-link(to="/")
          img.navidation__logo-link-img(
            :src="require('@/assets/img/' + logo.src)",
            :alt="logo.alt"
          )
      .navidation__nav
        ul.navidation__nav-row
          li.navidation__nav-item(v-for="item in navLinks")
            router-link.navidation__nav-item-link(:to="item.link")
              span {{ item.text }}
      .navidation__btn
        btn-double(:btnText="navbtn", @action="formLoginUnlock()")
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
.navidation {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

.navigation--fixed {
  position: fixed;
  background: rgba(0, 0, 0, 0.4);
  animation: navigationFixed 0.6s ease-in-out 0s;
  border-bottom: 2px solid var(--btnDoubleBg);

  .navidation-wrap {
    border-bottom: 0px solid var(--btnDoubleBg);
  }
}

.navidation-wrap {
  padding: 40px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ffffff99;
}
.navidation__nav-row {
  display: flex;
  align-items: center;
}

.navidation__nav-item + .navidation__nav-item {
  margin-left: 20px;
}

.navidation__nav-item-link {
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

.router-link-active.navidation__nav-item-link,
.navidation__nav-item-link:hover {
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
</style>
