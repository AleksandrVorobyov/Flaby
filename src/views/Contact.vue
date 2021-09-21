<template lang="pug">
#contact
  header
    flaby-navigation
    fake-navigation
    flaby-sidebar
  main
    flaby-subscribe
    flaby-download
  footer
    flaby-footer
    flaby-copy
</template>

<script>
import FlabyNavigation from "@/components/FlabyNavigation.vue";
import FlabySidebar from "@/components/FlabySidebar.vue";
import FlabySubscribe from "@/components/FlabySubscribe.vue";
import FlabyDownload from "@/components/FlabyDownload.vue";
import FlabyFooter from "@/components/FlabyFooter.vue";
import FlabyCopy from "@/components/FlabyCopy.vue";
import fakeNavigation from "@/components/parts/fake-navigation.vue";

export default {
  name: "pageContact",
  components: {
    FlabyNavigation,
    FlabySidebar,
    FlabySubscribe,
    FlabyDownload,
    FlabyFooter,
    FlabyCopy,
    fakeNavigation,
  },
};
</script>
