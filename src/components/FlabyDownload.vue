<template lang="pug">
section#download.download
  .container
    .download-wrap
      .download-col
        h5.download__subtitle {{ download.subtitle }}
        h3.download__title {{ download.title }}
        p.download__text {{ download.text }}
        p.download__desc {{ download.desc }}
      .download-col
        .download__img
          img(
            :src="require('@/assets/img/' + download.src)",
            :alt="download.alt"
          )
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["download"]),
  },
  methods: {
    downloadAnimsFunc() {
      this.$store.commit("downloadAnimsFunc");
    },
  },
  mounted() {
    if (window.innerWidth >= 720) {
      this.downloadAnimsFunc();
    }
  },
};
</script>

<style scoped lang="scss">
.download {
  position: relative;
  padding: 65px 0px 65px;
  background: var(--whiteBg);
  overflow: hidden;
  z-index: 500;

  @media (min-width: 480px) {
    padding: 150px 0px;
  }
}

.download-wrap {
  display: grid;
  grid-template-columns: minmax(0px, 570px);
  grid-template-rows: minmax(0px, 300px) minmax(0px, 300px);
  gap: 30px;

  @media (min-width: 720px) {
    grid-template-columns: minmax(0px, 475px) minmax(0px, 570px);
    grid-template-rows: minmax(0px, 100%);
  }

  @media (min-width: 970px) {
    gap: 65px;
  }
}

.download-col {
  position: relative;
}

.download__subtitle {
  margin-bottom: 20px;
  font-size: 20px;
  font-family: var(--fontRalewayBold);
  color: rgba(73, 73, 73, 0.4);
  font-weight: bold;
  line-height: 1.2;
  text-align: left;

  @media (min-width: 970px) {
    font-size: 22px;
    margin-bottom: 25px;
  }
}

.download__title {
  margin-bottom: 25px;
  font-size: 28px;
  font-family: var(--fontRalewayBold);
  color: var(--mainTextTitle);
  font-weight: bold;
  line-height: 1.2;
  text-align: left;

  @media (min-width: 970px) {
    font-size: 32px;
    margin-bottom: 35px;
  }
}

.download__text {
  margin-bottom: 30px;
  font-size: 18px;
  font-family: var(--fontRalewayMedium);
  color: var(--mainTextDesc);
  line-height: 1.6;
  text-align: left;

  @media (min-width: 970px) {
    font-size: 20px;
    margin-bottom: 45px;
  }
}

.download__desc {
  font-size: 14px;
  font-family: var(--fontRalewayMedium);
  color: var(--mainTextDesc);
  line-height: 1.8;
  text-align: left;
}

.download__img {
  position: absolute;
  height: 300px;
  width: 100%;

  @media (min-width: 720px) {
    height: 100%;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>