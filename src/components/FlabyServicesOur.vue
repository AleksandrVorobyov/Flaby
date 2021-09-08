<template lang="pug">
section.services-our
  .container
    .services-our-wrap
      .services-our__title
        section-title(
          :title="servicesOur.title",
          :subtitle="servicesOur.subtitle"
        )
      .services-our__items
        .services-our__item(v-for="item in servicesOurItems", :key="item.id")
          .services-our__item-img 
            img(:src="require('@/assets/img/' + item.src)", :alt="item.alt")
          h4.services-our__item-title {{ item.title }}
          p.services-our__item-desc {{ item.desc }}
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
    ...mapGetters(["servicesOur", "servicesOurItems"]),
  },
};
</script>

<style scoped lang="scss">
.services-our {
  position: relative;
  padding: 100px 0 150px;
  overflow: hidden;
  z-index: 500;
}

.services-our__items {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
}

.services-our__item-title {
  font-size: 18px;
  font-family: var(--fontRalewayBold);
  color: rgb(73, 73, 73);
  font-weight: bold;
  line-height: 1;
  text-align: center;
}

.services-our__item-desc {
  font-size: 14px;
  font-family: var(--fontRobotoSlabRegular);
  color: rgb(124, 124, 124);
  line-height: 1;
  text-align: center;
}
</style>
