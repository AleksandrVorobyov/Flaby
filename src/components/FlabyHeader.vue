<template lang="pug">
section.header
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
      .header-col
        .header__phone
          .header__phone-border
            img(
              :src="require('@/assets/img/' + headerPhone.borderSrc)",
              :alt="headerPhone.borderAlt"
            )
          .header__phone-img
            img(
              :src="require('@/assets/img/' + headerPhone.imgBgSrc)",
              :alt="headerPhone.imgBgAlt"
            )
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
  computed: {
    ...mapGetters([
      "headerBg",
      "headerTitle",
      "headerSubtitle",
      "headerPhone",
      "googleStore",
    ]),
  },
  mounted() {},
};
</script>

<style scoped lang="scss">
.header {
  position: relative;
  height: 930px;
  padding-top: 250px;
  background: var(--header-bg);
  overflow: hidden;
  z-index: 500;
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

.header-bg-img:nth-child(1) {
  bottom: 50px;
  left: 0;
  width: 90px;
  height: 150px;

  img {
    object-position: left;
  }
}

.header-bg-img:nth-child(2) {
  bottom: 0;
  left: 0;
  width: 200px;
  height: 250px;

  img {
    object-position: left;
  }
}

.header-bg-img:nth-child(3) {
  top: 0;
  left: 0;
  width: 250px;
  height: 400px;

  img {
    object-position: left;
  }
}

.header-bg-img:nth-child(4) {
  top: 50%;
  right: 0;
  width: 150px;
  height: 300px;

  img {
    object-position: right;
  }
}

.header-wrap {
  display: grid;
  align-items: flex-start;
  gap: 95px;
  grid-template-columns: 1fr 1fr;
}

.header-col:nth-child(1) {
  margin-top: 150px;
}

.header__title {
  font-size: 40px;
  font-family: var(--fontMuseoSlab-500);
  color: var(--textWhite);
  font-weight: 500;
  text-transform: uppercase;
  line-height: 1;
  letter-spacing: 1px;
}

.header__title + .header__subtitle {
  margin-top: 40px;
}

.header__subtitle {
  font-size: 26px;
  font-family: var(--fontRobotoSlabRegular);
  font-weight: 400;
  color: var(--textWhite);
  line-height: 1.5;
}

.header__subtitle + .header__btns {
  margin-top: 80px;
}

.header__btns {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-btn {
  position: relative;
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
}

.header-btn:hover {
  box-shadow: inset 0px 0px 8px var(--textGrey);
}

.header__phone {
  position: relative;
}

.header__phone-border {
  img {
    object-fit: contain;
  }
}

.header__phone-img {
  position: absolute;
  top: 111px;
  left: 31px;
  width: 397px;
  height: 570px;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
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
  background-color: rgb(255, 255, 255);
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
