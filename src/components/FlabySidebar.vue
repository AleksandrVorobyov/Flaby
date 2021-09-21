<template lang="pug">
section#sidebar.sidebar
  .container
    .sidebar-wrap
      .sidebar__title
        section-title(:title="sidebar.title", :subtitle="sidebar.subtitle")
      .sidebar__links
        ul.sidebar__links-row
          li.sidebar__links-item(v-for="item in navLinks")
            router-link.sidebar__links-item-link(
              :to="item.link",
              @click="hideScroll"
            )
              span {{ item.text }}
      .sidebar__login
        btn-double(:btnText="navbtn", @action="formLoginUnlock()")
</template>
<script>
import { mapGetters } from "vuex";
import sectionTitle from "./parts/section-title.vue";
import btnDouble from "./parts/btn-double.vue";

export default {
  computed: {
    ...mapGetters(["sidebar", "navbtn", "navLinks"]),
  },
  components: {
    sectionTitle,
    btnDouble,
  },
  methods: {
    formLoginUnlock() {
      this.$store.commit("formLoginUnlock");
    },
    hideScroll() {
      this.$store.commit("hideScroll");
    },
  },
};
</script>
<style scoped lang="scss">
.sidebar {
  position: fixed;
  top: 100%;
  left: 0;
  width: 100%;
  height: calc(100% - 140px);
  padding: 30px 0;
  z-index: 1000;
  transition: top 0.6s ease-in;
  overflow: scroll;

  &::before {
    position: absolute;
    content: "";
    background: url("~@/assets/img/price-cards/bg-pattern.png") top left / cover
        no-repeat,
      linear-gradient(var(--header-bg) 10%, #f3f9fade);
    width: 100%;
    height: calc(100% + 140px);
    top: 0;
    left: 0;
    transform: rotate(180deg);
  }
}

.sidebar--active {
  top: 140px;
}

.sidebar-wrap {
  position: relative;
  border: 2px solid var(--whiteBg);
  padding: 20px;
}

.sidebar__title {
  margin-bottom: 30px;
}

.sidebar__links-row {
  display: grid;
  gap: 20px;
  margin-bottom: 30px;
}

.sidebar__links-item-link {
  position: relative;
  display: block;
  padding: 20px 30px;
  font-family: var(--fontRalewayBold);
  font-size: 17px;
  color: var(--mainTextTitle);
  font-weight: 500;
  text-transform: uppercase;
  line-height: 1;
  border-radius: 10px;
  background: var(--whiteBg);
  z-index: 10;

  &::before {
    position: absolute;
    top: 10px;
    left: 10px;
    bottom: 10px;
    width: calc(60% - 20px);
    height: calc(100% - 20px);
    content: "";
    background: #ff5c5c;
    border-radius: 10px;
    z-index: -1;
    transition: background 0.4s linear, width 0.4s linear;

    @media (min-width: 480px) {
      width: calc(40% - 20px);
    }

    @media (min-width: 720px) {
      width: calc(30% - 20px);
    }
  }
}

.router-link-active.sidebar__links-item-link,
.sidebar__links-item-link:hover {
  &::before {
    position: absolute;
    top: 10px;
    left: 10px;
    bottom: 10px;
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    content: "";
    background: var(--btnBlueBg);
    border-radius: 10px;
    z-index: -1;
  }
}
</style>