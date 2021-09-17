<template lang="pug">
section.subscribe
  .container
    .subscribe-wrap
      .subscribe__title
        section-title(
          :title="sectionSubscribe.title",
          :subtitle="sectionSubscribe.subtitle"
        )
      form.subscribe__form(@submit.prevent)
        input.subscribe__form-input(
          type="text",
          :placeholder="sectionSubscribe.namePlaceholder"
        )
        input.subscribe__form-input(
          type="email",
          :placeholder="sectionSubscribe.emailPlaceholder"
        )
        button.subscribe__form-btn {{ sectionSubscribe.btnText }}
</template>

<script>
import { mapGetters } from "vuex";
import sectionTitle from "./parts/section-title.vue";
export default {
  components: {
    sectionTitle,
  },
  props: {},
  computed: {
    ...mapGetters(["sectionSubscribe"]),
  },
};
</script>

<style lang="scss">
.subscribe {
  position: relative;
  padding: 65px 0px 110px;
  background: var(--whiteBg);
  overflow: hidden;
  z-index: 500;
}

.subscribe__title {
  margin-bottom: 55px;
}

.subscribe__form {
  display: grid;
  gap: 30px;
  grid-template-columns: 380px;
  grid-template-rows: 75px 75px 75px;
  justify-content: center;
}

.subscribe__form-input {
  padding: 0 15px;
  background: rgb(245, 250, 250);
  outline: none;
  border: 2px solid rgba(0, 0, 0, 0);
  border-radius: 32px;
  font-size: 14px;
  font-family: var(--fontRalewayBold);
  color: var(--mainTextDesc);
  font-weight: bold;
  line-height: 1;
  text-align: center;
  transition: border 0.3s linear, background 0.3s linear, box-shadow 0.3s linear;

  &::placeholder {
    font-size: 14px;
    font-family: var(--fontRalewayBold);
    color: #50505059;
    font-weight: bold;
    line-height: 1;
    text-align: center;
  }

  &:hover,
  &:focus {
    border: 2px solid rgba(0, 0, 0, 0.3);
    background: rgb(255, 255, 255);
    box-shadow: 0px 8px 16px 0px rgba(92, 149, 161, 0.3);
  }
}

.subscribe__form-btn {
  position: relative;
  font-size: 14px;
  font-family: var(--fontRalewayBold);
  color: rgb(255, 255, 255);
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1;
  text-align: center;
  background: rgb(102, 212, 244);
  outline: none;
  border: none;
  border-radius: 32px;
  transition: box-shadow 0.3s linear, opacity 0.3s linear;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
    box-shadow: 0px 10px 16px 0px rgba(102, 212, 244, 0.3);
  }
}
</style>