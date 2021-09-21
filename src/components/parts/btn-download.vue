<template lang="pug">
a.btn-download(:href="link", target="_blank")
  img(src="@/assets/img/header/google-play.jpg")
  span {{ text }}
</template>

<script>
export default {
  props: {
    link: String,
    text: String,
  },
  emits: ["action"],
};
</script>

<style scoped lang="scss">
.btn-download {
  position: relative;
  width: 100%;
  padding: 20px 35px 20px 35px;
  display: inline-flex;
  background: var(--whiteBg);
  box-shadow: 0px 8px 11px 0px rgba(54, 54, 54, 0.15);
  border-radius: 10px;
  font-size: 20px;
  font-family: var(--fontRalewayBold);
  color: #3e3e3e;
  font-weight: bold;
  line-height: 2;
  transition: opacity 0.4s linear, box-shadow 0.4s linear;

  img + span {
    margin-left: 15px;
  }

  @media (min-width: 720px) {
    width: auto;
  }
}

.btn-download:hover {
  opacity: 0.8;
  box-shadow: 0px 8px 15px 10px rgba(54, 54, 54, 0.4);
}
</style>

