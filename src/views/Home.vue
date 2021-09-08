<template lang="pug">
#home-page
  header
    flaby-navigation
    flaby-header
    flaby-services-our
</template>

<script>
// @ is an alias to /src
import FlabyHeader from '@/components/FlabyHeader.vue'
import FlabyNavigation from '@/components/FlabyNavigation.vue'
import FlabyServicesOur from '@/components/FlabyServicesOur.vue'

export default {
  name: 'Home',
  components: {
    FlabyHeader,
    FlabyNavigation,
    FlabyServicesOur
  }
}
</script>
