<template lang="pug">
#home-page
  header
    flaby-navigation
    flaby-header
  main
    flaby-services-our
    flaby-features
    flaby-services-other
    flaby-download
    flaby-price-cards
    flaby-subscribe
</template>

<script>
// @ is an alias to /src
import FlabyHeader from "@/components/FlabyHeader.vue";
import FlabyNavigation from "@/components/FlabyNavigation.vue";
import FlabyServicesOur from "@/components/FlabyServicesOur.vue";
import FlabyFeatures from "@/components/FlabyFeatures.vue";
import FlabyServicesOther from "@/components/FlabyServicesOther.vue";
import FlabyDownload from "@/components/FlabyDownload.vue";
import FlabyPriceCards from "@/components/FlabyPriceCards.vue";
import FlabySubscribe from "@/components/FlabySubscribe.vue";

export default {
  name: "Home",
  components: {
    FlabyHeader,
    FlabyNavigation,
    FlabyServicesOur,
    FlabyFeatures,
    FlabyServicesOther,
    FlabyDownload,
    FlabyPriceCards,
    FlabySubscribe,
  },
};
</script>
