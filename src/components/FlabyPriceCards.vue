<template lang="pug">
section.price-cards
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
};
</script>

<style scoped lang="scss">
.price-cards {
  position: relative;
  padding: 65px 100px;
  background: url("~@/assets/img/price-cards/bg-pattern.png") bottom left /
      cover no-repeat,
    linear-gradient(#f4fbfc, #f4fbfc);
  z-index: 500;
  overflow: hidden;
}

.price-cards__title {
  margin-bottom: 100px;
}

.price-cards__list-wrap {
  display: flex;
  justify-content: space-between;
}

.price-cards__list-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  background: url("~@/assets/img/price-cards/card-pattern.png") top left / cover
      no-repeat,
    linear-gradient(var(--whiteBg), var(--whiteBg));
  border: 1px solid #eaecf0;
  border-radius: 20px;
  padding: 50px;
  transition: box-shadow 0.3s linear, transform 0.3s linear;
}

.price-cards__list-item:hover {
  box-shadow: 0px 0px 51px 0px rgba(92, 149, 161, 0.33);
  transform: scale(1.05, 1.1);
}

.price-cards__list-img {
  position: relative;
  margin-bottom: 60px;
  width: 125px;
  height: 100px;

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
  margin-bottom: 45px;
  font-family: var(--fontRalewayBold);
  font-weight: bold;
  line-height: 1.2;
  text-align: center;
  font-size: 20px;

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
  margin-bottom: 50px;
  padding: 0;
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
  background-color: rgb(102, 212, 244);
  border-radius: 24px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: box-shadow 0.3s linear, opacity 0.3s linear;

  &:hover {
    box-shadow: 0px 0px 51px 0px rgba(92, 149, 161, 0.33);
    opacity: .7;
  }
}
</style>
