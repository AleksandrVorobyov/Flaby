<template lang="pug">
section.download
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
};
</script>

<style scoped lang="scss">
.download {
  position: relative;
  padding: 150px;
  background: var(--whiteBg);
  overflow: hidden;
  z-index: 500;
}

.download-wrap {
  display: grid;
  grid-template-columns: 475px 570px;
  gap: 65px;
}

.download-col {
  position: relative;
}

.download__subtitle {
  margin-bottom: 25px;
  font-size: 22px;
  font-family: var(--fontRalewayBold);
  color: rgba(73, 73, 73, 0.4);
  font-weight: bold;
  line-height: 1.2;
  text-align: left;
}

.download__title {
  margin-bottom: 35px;
  font-size: 32px;
  font-family: var(--fontRalewayBold);
  color: var(--mainTextTitle);
  font-weight: bold;
  line-height: 1.2;
  text-align: left;
}

.download__text {
  margin-bottom: 45px;
  font-size: 20px;
  font-family: var(--fontRalewayMedium);
  color: var(--mainTextDesc);
  line-height: 1.6;
  text-align: left;
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
  height: 100%;
  width: 100%;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>