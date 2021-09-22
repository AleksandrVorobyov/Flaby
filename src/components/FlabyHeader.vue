<template lang="pug">
section#header.header
  .header-bg
    .header-bg-img(v-for="item in headerBg", :key="item")
      img(:src="require('@/assets/img/' + item.src)", :alt="item.alt")
  .container
    .header-wrap
      .header-col
        h2.header__title {{ headerTitle }}
        h4.header__subtitle {{ headerSubtitle }}
        .header__btns
          btn-download(:link="googleStore.href", :text="googleStore.text")
          router-link.header-btn(to="/blog") Learn More
      .header__phone
        .header-elipses
          span(v-for="item in 4")
</template>

<script>
import { mapGetters } from "vuex";

import btnDownload from "./parts/btn-download.vue";
export default {
  name: "FlabyHeader",
  components: {
    btnDownload,
  },
  props: {},
  methods: {
    headerAnimsFunc() {
      this.$store.commit("headerAnimsFunc");
    },
  },
  computed: {
    ...mapGetters([
      "headerBg",
      "headerTitle",
      "headerSubtitle",
      "headerPhone",
      "googleStore",
    ]),
  },
  mounted() {
    if (window.innerWidth >= 720) {
      this.headerAnimsFunc();
    }
  },
};
</script>

<style scoped lang="scss">
.header {
  position: relative;
  height: 800px;
  padding-top: 200px;
  background: var(--header-bg);
  overflow: hidden;
  z-index: 500;

  @media (min-width: 970px) {
    padding-top: 250px;
    height: 930px;
  }
}

.header-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -100;
}

.header-bg-img {
  position: absolute;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: drop-shadow(3px 5px 5px rgba(0, 0, 0, 0.7));
  }
}

.header-bg-img:nth-child(3) {
  top: -90px;
  width: 250px;
  left: 0;
  height: 400px;

  img {
    object-position: left;
  }

  @media (min-width: 970px) {
    top: 0;
  }
}

@media (min-width: 480px) {
  .header-bg-img:nth-child(1) {
    display: block;
    bottom: 50px;
    left: 0;
    width: 90px;
    height: 150px;

    img {
      object-position: left;
    }
  }

  .header-bg-img:nth-child(2) {
    display: block;
    bottom: 0;
    left: 0;
    width: 200px;
    height: 250px;

    img {
      object-position: left;
    }
  }

  .header-bg-img:nth-child(4) {
    display: block;
    top: 50%;
    right: 0;
    width: 150px;
    height: 300px;

    img {
      object-position: right;
    }
  }
}

.header-wrap {
  position: relative;
  width: 100%;
}

.header-col {
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 970px) {
    margin-top: 150px;
    margin-left: 0;
  }
}

.header__title {
  font-size: 28px;
  font-family: var(--fontMuseoSlab-500);
  color: var(--textWhite);
  font-weight: 500;
  text-transform: uppercase;
  line-height: 1;
  letter-spacing: 1px;

  @media (min-width: 480px) {
    font-size: 34px;
  }

  @media (min-width: 720px) {
    font-size: 40px;
  }
}

.header__title + .header__subtitle {
  margin-top: 40px;
}

.header__subtitle {
  font-size: 18px;
  font-family: var(--fontRobotoSlabRegular);
  font-weight: 400;
  color: var(--textWhite);
  line-height: 1.5;

  @media (min-width: 480px) {
    font-size: 22px;
  }

  @media (min-width: 720px) {
    font-size: 26px;
  }
}

.header__subtitle + .header__btns {
  margin-top: 40px;

  @media (min-width: 720px) {
    margin-top: 80px;
  }
}

.header__btns {
  display: flex;
  align-items: center;
  flex-direction: column-reverse;

  & > * + * {
    margin-bottom: 30px;
  }

  @media (min-width: 720px) {
    flex-direction: row;

    & > * + * {
      margin: 0;
      margin-left: 30px;
    }
  }
}

.header-btn {
  position: relative;
  width: 100%;
  display: inline-block;
  font-size: 20px;
  padding: 20px 60px;
  font-family: var(--fontRalewayBold);
  color: var(--textWhite);
  font-weight: bold;
  line-height: 2;
  border-radius: 10px;
  background: rgba(72, 148, 206, 0.7);
  transition: box-shadow 0.4s linear;

  @media (min-width: 720px) {
    width: auto;
  }
}

.header-btn:hover {
  box-shadow: inset 0px 0px 8px var(--textGrey);
}

.header__phone {
  position: absolute;
  top: 400px;
  right: 50%;
  transform: translateX(50%);
  width: 100%;
  max-width: 460px;
  height: 930px;
  background: url("~@/assets/img/header/phone-border.png") top left / contain
    no-repeat;
  z-index: -100;

  @media (min-width: 970px) {
    top: -90px;
    right: 0;
    transform: translateX(0);
  }
}

.header-elipses {
  position: absolute;
  bottom: 250px;
  right: -30px;
  width: 628px;
  height: 628px;
  z-index: -100;
}

.header-elipses span:nth-child(1),
.header-elipses span:nth-child(2),
.header-elipses span:nth-child(3),
.header-elipses span:nth-child(4) {
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  background-color: var(--whiteBg);
  opacity: 0.1;
  width: 628px;
  height: 628px;
  transform: scale(0);
}

.header-elipses span:nth-child(1) {
  transform: scale(1);
}

.header-elipses span:nth-child(2) {
  transform: scale(1.5);
}

.header-elipses span:nth-child(3) {
  transform: scale(2);
}

.header-elipses span:nth-child(4) {
  transform: scale(2.5);
}
</style>
