<template lang="pug">
section.features
  .container
    .features-wrap
      .features-col
        .features-img
          img(:src="require('@/assets/img/' + featuresInfo.imgSrc)")
      .features-col
        .features__info
          h5.features__info-subtitle {{ featuresInfo.subtitle }}
          h3.features__info-title {{ featuresInfo.title }}
          p.features__info-desc {{ featuresInfo.desc }}
          ul.features__info-list
            li.features__info-list-item(v-for="item in featuresInfo.list")
              span {{ item }}
          button.features__info-btn {{ featuresInfo.btn }}
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["featuresInfo"]),
  },
};
</script>

<style scoped lang="scss">
.features {
  position: relative;
  padding: 120px 0 100px;
  background: url("~@/assets/img/features/bg.jpg") center center / cover
    no-repeat;
  overflow: hidden;
  z-index: 500;
}

.features-wrap {
  position: relative;
  display: grid;
  grid-template-columns: 445px 540px;
  gap: 125px;

  &::before {
    position: absolute;
    content: "";
    top: 50%;
    left: -500px;
    transform: translateY(-50%);
    height: 590px;
    width: 830px;
    background: url("~@/assets/img/features/iPad.png");
    filter: drop-shadow(-10px 10px 10px rgba(0, 0, 0, 0.4));
  }
}

.features-col:nth-child(1) {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
}

.features-img {
  position: relative;
  width: 235px;
  height: 530px;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100%;
    width: 100%;
    object-fit: contain;
    object-position: bottom;
    filter: drop-shadow(-10px 10px 10px rgba(0, 0, 0, 0.4));
  }
}

.features__info-subtitle {
  margin-bottom: 25px;
  font-size: 22px;
  font-family: var(--fontRalewayBold);
  color: rgba(73, 73, 73, 0.4);
  font-weight: bold;
  line-height: 1;
  text-align: left;
}

.features__info-title {
  margin-bottom: 35px;
  font-size: 32px;
  font-family: var(--fontRalewayBold);
  color: var(--mainTextTitle);
  font-weight: bold;
  line-height: 1.2;
  text-align: left;
}

.features__info-desc {
  margin-bottom: 60px;
  font-size: 20px;
  font-family: var(--fontRalewayBold);
  color: var(--mainTextDesc);
  line-height: 1.6;
  text-align: left;
}

.features__info-list {
  padding-left: 40px;
  margin-bottom: 40px;
}

.features__info-list-item + .features__info-list-item {
  margin-top: 15px;
}

.features__info-list-item {
  position: relative;
  font-size: 14px;
  font-family: var(--fontRalewayMedium);
  color: var(--mainTextDesc);
  line-height: 1.5;
  text-align: left;
}

.features__info-list-item::before {
  position: absolute;
  content: "";
  top: 0;
  left: -40px;
  border-radius: 50%;
  background: #96dbef;
  opacity: 0.502;
  width: 20px;
  height: 20px;
}

.features__info-list-item::after {
  position: absolute;
  content: "";
  top: 4px;
  left: -36px;
  border-radius: 50%;
  background: var(--btnBlueBg);
  width: 12px;
  height: 12px;
}

.features__info-btn {
  padding: 15px 35px;
  font-size: 14px;
  font-family: var(--fontRalewayBold);
  color: var(--textWhite);
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1;
  outline: none;
  cursor: pointer;
  border: none;
  background: var(--btnBlueBg);
  transition: box-shadow 0.3s linear;
  border-radius: 24px;
  overflow: hidden;

  &:hover {
    box-shadow: 0px 10px 16px 0px rgba(102, 212, 244, 0.3);
  }
}
</style>
