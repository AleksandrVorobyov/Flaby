<template lang="pug">
#portfolio
  header
    flaby-navigation
    fake-navigation
    flaby-sidebar
  main
    flaby-price-cards
    flaby-subscribe
  footer
    flaby-footer
    flaby-copy
</template>

<script>
import FlabyNavigation from "@/components/FlabyNavigation.vue";
import FlabySidebar from "@/components/FlabySidebar.vue";
import fakeNavigation from "@/components/parts/fake-navigation.vue";
import FlabyPriceCards from "@/components/FlabyPriceCards.vue";
import FlabySubscribe from "@/components/FlabySubscribe.vue";
import FlabyFooter from "@/components/FlabyFooter.vue";
import FlabyCopy from "@/components/FlabyCopy.vue";

export default {
  name: "pagePortfolio",
  components: {
    FlabyNavigation,
    fakeNavigation,
    FlabySidebar,
    FlabyPriceCards,
    FlabySubscribe,
    FlabyFooter,
    FlabyCopy,
  },
};
</script>
