<template lang="pug">
section.copy#copy
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
  methods: {
    copyAnimsFunc() {
      this.$store.commit("copyAnimsFunc");
    },
  },
  mounted() {
    if(window.innerWidth >= 720 ) {
      this.copyAnimsFunc();
    }
  },
};
</script>
<style scoped lang="scss">
.copy {
  position: relative;
  overflow: hidden;
  z-index: 500;
  background: var(--whiteBg);
}

.copy-wrap {
  padding: 35px 0;
  border-top: 1px solid #dfdfdf;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 720px) {
    display: block;
  }
}

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
    top: -15px;
    left: 50%;
    width: 30px;
    height: 1px;
    background: var(--mainTextDesc);
    transform: translateX(-50%);

    @media (min-width: 720px) {
      top: -4px;
      left: -15px;
      width: 1px;
      height: calc(100% + 8px);
      transform: translateX(0%);
    }
  }
}

.copy-text:nth-child(1)::before {
  content: none;
}

.copy-text + .copy-text {
  margin-top: 30px;

  @media (min-width: 720px) {
    margin-left: 30px;
    margin-top: 0;
  }
}
</style>
