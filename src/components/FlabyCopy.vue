<template lang="pug">
section.copy
  .container
    .copy-wrap
      p.copy-text(v-for="item in copy.text") {{ item }}
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["copy"]),
  },
};
</script>
<style scoped lang="scss">
.copy {
  position: relative;
  overflow: hidden;
  z-index: 500;
  background: white;
}

.copy-wrap {
  padding: 35px 0;
  border-top: 1px solid #dfdfdf;
  .copy-text {
    position: relative;
    display: inline;
    font-size: 14px;
    font-family: var(--fontRalewayMedium);
    color: var(--mainTextDesc);
    line-height: 1;

    &::before {
      position: absolute;
      content: "";
      top: -4px;
      left: -15px;
      width: 1px;
      height: calc(100% + 8px);
      background: var(--mainTextDesc);
    }
  }

  .copy-text:nth-child(1)::before {
    content: none;
  }

  .copy-text + .copy-text {
    margin-left: 30px;
  }
}
</style>
