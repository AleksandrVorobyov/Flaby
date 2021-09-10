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
  padding: 50px 0 120px;
  background: var(--whiteBg);
  overflow: hidden;
  z-index: 500;
}

.services-other__title {
  margin-bottom: 100px;
}

.services-other__list {
  display: grid;
  padding: 0;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 170px 170px;
  gap: 70px 30px;
}

.services-other__list-item {
  display: grid;
  grid-template-columns: 50px 1fr;
  gap: 20px;
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
  text-align: left;
}

.services-other__list-desc {
  font-size: 14px;
  font-family: var(--fontRalewayMedium);
  color: var(--mainTextDesc);
  line-height: 1.857;
  text-align: left;
}
</style>
