<template lang="pug">
section.services-other
  .container
    .services-other-wrap
      .services-other__title
        section-title(
          :title="servicesOther.title",
          :subtitle="servicesOther.subtitle"
        )
      .services-other__list-wrap
        ul.services-other__list
          li.services-other__list-item(v-for="item in servicesOther.list")
            .services-other__list-img
              img(:src="require('@/assets/img/' + item.src)")
            .services-other__list-text
              h4.services-other__list-title {{ item.title }}
              p.services-other__list-desc {{ item.desc }}
</template>

<script>
import { mapGetters } from "vuex";
import sectionTitle from "./parts/section-title.vue";
export default {
  components: {
    sectionTitle,
  },
  props: {},
  computed: {
    ...mapGetters(["servicesOther"]),
  },
};
</script>

<style scoped lang="scss">
.services-other {
  position: relative;
  padding: 65px 0px 65px;
  background: var(--whiteBg);
  overflow: hidden;
  z-index: 500;

  @media (min-width: 480px) {
    padding: 50px 0 100px;
  }
}

.services-other__title {
  margin-bottom: 100px;
}

.services-other__list {
  display: grid;
  padding: 0 10px;
  grid-template-columns: minmax(0, 250px);
  grid-template-rows: 220px 220px 220px;
  gap: 30px;
  justify-content: center;
  border-left: 2px solid var(--header-bg);
  border-right: 2px solid var(--header-bg);

  @media (min-width: 480px) {
    grid-template-columns: minmax(0, 250px) minmax(0, 250px);
    gap: 70px 30px;
  }

  @media (min-width: 720px) {
    grid-template-columns: minmax(0, 350px) minmax(0, 350px);
    grid-template-rows: 170px 170px 170px;
  }

  @media (min-width: 970px) {
    padding: 0;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 170px 170px;
    border-left: 0px solid var(--header-bg);
    border-right: 0px solid var(--header-bg);
  }

  @media (min-width: 1170px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

.services-other__list-item {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  justify-items: center;

  @media (min-width: 720px) {
    grid-template-columns: 50px 1fr;
  }
}

.services-other__list-img {
  position: relative;
  width: 50px;
  height: 50px;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
}

.services-other__list-title {
  margin-bottom: 20px;
  font-size: 18px;
  font-family: var(--fontRalewayBold);
  color: var(--mainTextTitle);
  font-weight: bold;
  line-height: 1;
  text-align: center;

  @media (min-width: 720px) {
    text-align: left;
  }
}

.services-other__list-desc {
  font-size: 14px;
  font-family: var(--fontRalewayMedium);
  color: var(--mainTextDesc);
  line-height: 1.857;
  text-align: left;
}
</style>
