<template lang="pug">
#home-page
  header
    flaby-navigation
    flaby-sidebar
    flaby-header
  main
    flaby-services-our
    flaby-features
    flaby-services-other
    flaby-comments
    flaby-download
    flaby-price-cards
    flaby-subscribe
  footer
    flaby-footer
    flaby-copy
</template>

<script>
import FlabyNavigation from "@/components/FlabyNavigation.vue";
import FlabySidebar from "@/components/FlabySidebar.vue";
import FlabyHeader from "@/components/FlabyHeader.vue";
import FlabyServicesOur from "@/components/FlabyServicesOur.vue";
import FlabyFeatures from "@/components/FlabyFeatures.vue";
import FlabyServicesOther from "@/components/FlabyServicesOther.vue";
import FlabyComments from "@/components/FlabyComments.vue";
import FlabyDownload from "@/components/FlabyDownload.vue";
import FlabyPriceCards from "@/components/FlabyPriceCards.vue";
import FlabySubscribe from "@/components/FlabySubscribe.vue";
import FlabyFooter from "@/components/FlabyFooter.vue";
import FlabyCopy from "@/components/FlabyCopy.vue";

export default {
  name: "Home",
  components: {
    FlabyHeader,
    FlabyNavigation,
    FlabySidebar,
    FlabyServicesOur,
    FlabyFeatures,
    FlabyServicesOther,
    FlabyComments,
    FlabyDownload,
    FlabyPriceCards,
    FlabySubscribe,
    FlabyFooter,
    FlabyCopy,
  },
};
</script>
