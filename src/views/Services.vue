<template lang="pug">
#services
  header
    flaby-navigation
    fake-navigation
    flaby-sidebar
  main
    flaby-services-our
    flaby-services-other
    flaby-features
  footer
    flaby-footer
    flaby-copy
</template>

<script>
import FlabyNavigation from "@/components/FlabyNavigation.vue";
import FlabySidebar from "@/components/FlabySidebar.vue";
import fakeNavigation from "@/components/parts/fake-navigation.vue";
import FlabyServicesOur from "@/components/FlabyServicesOur.vue";
import FlabyFeatures from "@/components/FlabyFeatures.vue";
import FlabyServicesOther from "@/components/FlabyServicesOther.vue";
import FlabyFooter from "@/components/FlabyFooter.vue";
import FlabyCopy from "@/components/FlabyCopy.vue";

export default {
  name: "pageServices",
  components: {
    FlabyNavigation,
    fakeNavigation,
    FlabySidebar,
    FlabyServicesOur,
    FlabyFeatures,
    FlabyServicesOther,
    FlabyFooter,
    FlabyCopy,
  },
};
</script>
