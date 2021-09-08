<template lang="pug">
button.btn-double(@click="$emit('action')") {{ btnText }}
</template>

<script>
export default {
  props: {
    btnText: String,
  },
  emits: ["action"],
};
</script>

<style scoped lang="scss">
.btn-double {
  display: block;
  position: relative;
  padding: 20px 30px;
  background: var(--btnDoubleBg);
  font-size: 17px;
  font-family: var(--fontRalewayMedium);
  color: var(--textWhite);
  font-weight: 500;
  text-transform: uppercase;
  line-height: 1;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
  transition: box-shadow 0.4s linear;
}

.btn-double:hover {
  box-shadow: inset 0px 0px 8px var(--textGrey);
}
</style>