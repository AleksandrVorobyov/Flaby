<template lang="pug">
section#price-cards.price-cards
  .container
    .price-cards-wrap
      .price-cards__title
        section-title(
          :title="priceCards.title",
          :subtitle="priceCards.subtitle"
        )
      .price-cards__list
        ul.price-cards__list-wrap
          li.price-cards__list-item(
            v-for="item in priceCards.list",
            :key="item"
          )
            .price-cards__list-img
              img(:src="require('@/assets/img/' + item.src)", :alt="item.alt")
            h3.price-cards__list-name {{ item.name }}
            h5.price-cards__list-price
              span $
              span {{ item.price }}
              span /mo
            ul.price-cards__list-tags
              li.price-cards__list-tags-item(
                v-for="link in item.listCard",
                :key="item"
              ) {{ link }}
            button.price-cards__list-btn {{ item.btn }}
</template>

<script>
import { mapGetters } from "vuex";
import sectionTitle from "./parts/section-title.vue";

export default {
  components: {
    sectionTitle,
  },
  computed: {
    ...mapGetters(["priceCards"]),
  },
  methods: {
    priceCardsAnimsFunc() {
      this.$store.commit("priceCardsAnimsFunc");
    },
  },
  mounted() {
    if (window.innerWidth >= 720) {
      this.priceCardsAnimsFunc();
    }
  },
};
</script>

<style scoped lang="scss">
.price-cards {
  position: relative;
  padding: 65px 0px 65px;
  background: url("~@/assets/img/price-cards/bg-pattern.png") bottom left /
      cover no-repeat,
    linear-gradient(#f4fbfc, #f4fbfc);
  z-index: 500;
  overflow: hidden;

  @media (min-width: 480px) {
    padding: 65px 0px 100px;
  }
}

.price-cards__title {
  margin-bottom: 100px;
}

.price-cards__list-wrap {
  display: grid;
  gap: 35px;
  grid-template-columns: minmax(0, 320px);
  justify-content: center;

  @media (min-width: 720px) {
    grid-template-columns: minmax(0, 320px) minmax(0, 320px);
  }

  @media (min-width: 970px) {
    gap: 75px;
  }

  @media (min-width: 1170px) {
    grid-template-columns: 320px 320px 320px;
  }
}

.price-cards__list-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: url("~@/assets/img/price-cards/card-pattern.png") top left / cover
      no-repeat,
    linear-gradient(var(--whiteBg), var(--whiteBg));
  border: 1px solid #eaecf0;
  border-radius: 20px;
  padding: 30px;
  transition: box-shadow 0.3s linear, transform 0.3s linear;

  @media (min-width: 970px) {
    padding: 50px;
  }
}

.price-cards__list-item:hover {
  box-shadow: 0px 0px 51px 0px rgba(92, 149, 161, 0.33);
  transform: scale(1.05, 1.1);
}

.price-cards__list-img {
  position: relative;
  margin-bottom: 30px;
  width: 125px;
  height: 100px;

  @media (min-width: 970px) {
    margin-bottom: 60px;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
}

.price-cards__list-name {
  margin-bottom: 15px;
  font-size: 16px;
  font-family: var(--fontRalewayBold);
  color: var(--mainTextTitle);
  font-weight: bold;
  line-height: 1.2;
  text-align: center;
}

.price-cards__list-price {
  margin-bottom: 30px;
  font-family: var(--fontRalewayBold);
  font-weight: bold;
  line-height: 1.2;
  text-align: center;
  font-size: 20px;

  @media (min-width: 970px) {
    margin-bottom: 45px;
  }

  span {
    background-image: linear-gradient(90deg, #5ee6f6, #2eb0ec);
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }

  span:nth-child(2) {
    font-size: 72px;
  }
}

.price-cards__list-tags {
  margin-bottom: 30px;
  padding: 0;

  @media (min-width: 970px) {
    margin-bottom: 50px;
  }
}

.price-cards__list-tags-item {
  font-size: 14.699px;
  font-family: var(--fontRalewayMedium);
  color: var(--mainTextDesc);
  line-height: 2.177;
  text-align: center;
}

.price-cards__list-btn {
  position: relative;
  padding: 18px 50px;
  font-size: 14px;
  font-family: var(--fontRalewayMedium);
  color: var(--textWhite);
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1;
  background: var(--btnBlueBg);
  border-radius: 24px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: box-shadow 0.3s linear, opacity 0.3s linear;

  &:hover {
    box-shadow: 0px 0px 51px 0px rgba(92, 149, 161, 0.33);
    opacity: 0.7;
  }
}
</style>
