<template lang="pug">
section#features.features
  .container
    .features-wrap
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
  methods: {
    featuresAnimsFunc() {
      this.$store.commit("featuresAnimsFunc");
    },
  },
  mounted() {
    if (window.innerWidth >= 720) {
      this.featuresAnimsFunc();
    }
  },
};
</script>

<style scoped lang="scss">
.features {
  position: relative;
  padding: 65px 0px 65px;
  background: url("~@/assets/img/features/bg.jpg") center center / cover
    no-repeat;
  overflow: hidden;
  z-index: 500;

  @media (min-width: 480px) {
    padding: 120px 0 100px;
  }
}

.features-wrap {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

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
    z-index: -10;
  }

  &::after {
    position: absolute;
    content: "";
    top: 58%;
    right: -150px;
    transform: translateY(-50%);
    height: 470px;
    width: 450px;
    background: url("~@/assets/img/features/iPhone.png") bottom right / contain
      no-repeat;
    filter: drop-shadow(-10px 10px 10px rgba(0, 0, 0, 0.4));
    z-index: -10;

    @media (min-width: 970px) {
      left: -105px;
    }
  }

  @media (min-width: 970px) {
    display: block;
  }
}

.features__info {
  max-width: 440px;
  padding: 10px 20px;
  background: rgb(236, 231, 231);
  border-radius: 10px;
  box-shadow: 0px 0px 25px #dbd6d6;

  @media (min-width: 970px) {
    margin-left: auto;
    max-width: 540px;
    padding: 0;
    background: transparent;
    border-radius: 0;
    box-shadow: none;
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
  font-size: 18px;
  font-family: var(--fontRalewayBold);
  color: rgba(73, 73, 73, 0.4);
  font-weight: bold;
  line-height: 1;
  text-align: left;

  @media (min-width: 480px) {
    font-size: 22px;
  }
}

.features__info-title {
  margin-bottom: 35px;
  font-size: 26px;
  font-family: var(--fontRalewayBold);
  color: var(--mainTextTitle);
  font-weight: bold;
  line-height: 1.2;
  text-align: left;

  @media (min-width: 480px) {
    font-size: 32px;
  }
}

.features__info-desc {
  margin-bottom: 60px;
  font-size: 16px;
  font-family: var(--fontRalewayBold);
  color: var(--mainTextDesc);
  line-height: 1.6;
  text-align: left;

  @media (min-width: 480px) {
    font-size: 20px;
  }
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
  border-radius: 24px;
  overflow: hidden;
  transition: box-shadow 0.3s linear, opacity 0.3s linear;

  &:hover {
    box-shadow: 0px 0px 51px 0px rgba(92, 149, 161, 0.33);
    opacity: 0.7;
  }
}
</style>
