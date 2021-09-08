<template lang="pug">
.section-title
  h5.section-title__subtitle {{ subtitle }}
  h3.section-title__title {{ title }}
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String,
  },
};
</script>

<style scoped lang="scss">
.section-title {
  position: relative;
  padding-bottom: 20px;
}

.section-title::before {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  content: "";
  width: 30px;
  height: 2px;
  background-color: rgb(46, 176, 236);
}

.section-title__subtitle {
  margin: 0 auto;
  margin-bottom: 15px;
  font-size: 18px;
  font-family: var(--fontRobotoSlabRegular);
  color: #7c7c7c;
  line-height: 1;
  font-weight: 400;
  text-align: center;
}

.section-title__title {
  position: relative;
  margin: 0 auto;
  font-size: 24px;
  font-family: var(--fontRobotoSlabRegular);
  color: #494949;
  text-transform: uppercase;
  line-height: 1;
  text-align: center;
}
</style>