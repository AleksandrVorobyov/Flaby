<template lang="pug">
#blog
  header
    flaby-navigation
    fake-navigation
    flaby-sidebar
  main
    flaby-comments
    flaby-features
  footer
    flaby-footer
    flaby-copy
</template>

<script>
import FlabyNavigation from "@/components/FlabyNavigation.vue";
import FlabySidebar from "@/components/FlabySidebar.vue";
import fakeNavigation from "@/components/parts/fake-navigation.vue";
import FlabyComments from "@/components/FlabyComments.vue";
import FlabyFeatures from "@/components/FlabyFeatures.vue";
import FlabyFooter from "@/components/FlabyFooter.vue";
import FlabyCopy from "@/components/FlabyCopy.vue";
export default {
  name: "pageBlog",
  components: {
    FlabyNavigation,
    fakeNavigation,
    FlabySidebar,
    FlabyComments,
    FlabyFeatures,
    FlabyFooter,
    FlabyCopy,
  },
};
</script>
