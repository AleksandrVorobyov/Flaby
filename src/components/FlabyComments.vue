<template lang="pug">
section#comments.comments
  .container
    .comments-wrap
      .comments__title
        section-title(:title="comments.title", :subtitle="comments.subtitle")
      .comments__content
        .comments__content-slider
          ul.comments__content-slider__list
            li.comments__content-slider__item(
              v-for="item in comments.slides",
              :key="item",
              :data-pos="item.idx",
              @click="getActiveSlide($event)"
            )
              .comments__content-slide-avatar
                img(:src="require('@/assets/img/' + item.author)")
              h4.comments__content-slide-name {{ item.name }}
              h5.comments__content-slide-subtitle {{ item.subtitle }}
              p.comments__content-slide-text {{ item.text }}
          .comments__content-slider-arrow
            button.slider-arrow.slider-arrow--prev(@click="prevSlide()")
              img(src="@/assets/img/comments/arrow.png")
              span {{ comments.sliderArrow.prev }}
            button.slider-arrow.slider-arrow--next(@click="nextSlide()")
              span {{ comments.sliderArrow.next }}
              img(src="@/assets/img/comments/arrow.png")
</template>
<script>
import { mapGetters } from "vuex";
import sectionTitle from "./parts/section-title.vue";
export default {
  components: {
    sectionTitle,
  },
  computed: {
    ...mapGetters(["comments"]),
  },
  methods: {
    getActiveSlide(event) {
      this.$store.commit("getActiveSlide", event.target);
    },
    prevSlide() {
      this.$store.commit("prevSlide");
    },
    nextSlide() {
      this.$store.commit("nextSlide");
    },
    commentsAnimsFunc() {
      this.$store.commit("commentsAnimsFunc");
    },
  },
  mounted() {
    if (window.innerWidth >= 720) {
      this.commentsAnimsFunc();
    }
  },
};
</script>
<style scoped lang="scss">
.comments {
  position: relative;
  padding: 65px 0px 65px;
  overflow: hidden;
  z-index: 500;
  background: url("~@/assets/img/comments/bg.jpg") center center / cover
      no-repeat,
    linear-gradient(#f3f9fa, #f3f9fa);

  @media (min-width: 480px) {
    padding: 50px 0 100px;
  }
}

.comments-wrap {
  position: relative;
}

.comments__title {
  margin-bottom: 135px;
}

.comments__content-slide-name {
  font-size: 20px;
  font-family: var(--fontRalewayBold);
  color: var(--mainTextTitle);
  font-weight: bold;
  line-height: 1;
  text-align: center;
}

.comments__content-slide-subtitle {
  margin-bottom: 20px;
  font-size: 15px;
  font-family: var(--fontRalewayMedium);
  color: var(--mainTextDesc);
  line-height: 1;
  text-align: center;

  @media (min-width: 720px) {
    margin-bottom: 40px;
  }
}

.comments__content-slide-text {
  font-size: 16px;
  font-family: var(--fontRalewayMedium);
  color: var(--mainTextDesc);
  line-height: 1.5;
  text-align: center;

  @media (min-width: 720px) {
    font-size: 18px;
  }
}

.comments__content-slide-avatar {
  position: absolute;
  top: calc(-115px / 2);
  left: 50%;
  transform: translateX(-50%);
  width: 115px;
  height: 115px;
  border: 4px solid var(--whiteBg);
  border-radius: 50%;
  opacity: 1;
  transition: opacity 0.4s linear;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}

.comments__content-slider__list {
  margin-bottom: 80px;
}

.comments .comments__content-slider__item {
  position: absolute;
  transition: all 0.3s ease-in;
  padding: 80px 20px 20px;
  width: 100%;
  min-height: 350px;
  border-style: solid;
  border-width: 1px;
  border-color: #dae0e1;
  border-radius: 10px;
  background: var(--whiteBg);
  box-shadow: 0px 0px 15px 0px #dae0e1;
  cursor: pointer;

  @media (min-width: 720px) {
    padding: 80px 80px 20px;
  }

  @media (min-width: 480px) {
    padding: 80px 40px 20px;
  }
}

.comments__content-slider-arrow {
  display: flex;

  & > * + * {
    margin-left: 30px;
  }
}

.slider-arrow {
  display: flex;
  align-items: center;
  font-size: 18px;
  font-family: var(--fontRalewayBold);
  color: var(--mainTextTitle);
  font-weight: bold;
  line-height: 1;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.3s linear;

  & > * + * {
    margin-left: 10px;
  }

  &:hover {
    opacity: 1;
  }
}

.slider-arrow--prev img {
  transform: rotate(180deg);
}

.comments__content-slider {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  position: relative;
  margin: 0 auto;

  @media (min-width: 720px) {
    padding: 0 90px;
  }

  @media (min-width: 970px) {
    width: 900px;
    padding: 0;
  }

  &__list {
    display: flex;
    list-style: none;
    position: relative;
    width: 100%;
    height: 300px;
    justify-content: center;
    perspective: 400px;
  }

  &__item {
    position: absolute;
    transition: all 0.3s ease-in;
    padding: 80px 80px 0px;
    width: 100%;
    height: 350px;
    border-style: solid;
    border-width: 1px;
    border-color: #dae0e1;
    border-radius: 10px;
    background: var(--whiteBg);
    box-shadow: 0px 0px 15px 0px #dae0e1;
    cursor: pointer;

    @media (min-width: 970px) {
      width: 720px;
    }

    & > * {
      pointer-events: none;
    }

    &[data-pos="1"] {
      z-index: 5;
    }

    &[data-pos="2"],
    &[data-pos="5"] {
      opacity: 0.7;
      filter: blur(1px) grayscale(10%);
      .comments__content-slide-avatar {
        opacity: 0;
      }
    }

    &[data-pos="4"],
    &[data-pos="3"] {
      opacity: 0.4;
      filter: blur(3px) grayscale(20%);
      .comments__content-slide-avatar {
        opacity: 0;
      }
    }

    &[data-pos="2"] {
      transform: translateX(10%) scale(0.9);
      z-index: 4;
    }

    &[data-pos="3"] {
      transform: translateX(20%) scale(0.8);
      z-index: 3;
    }

    &[data-pos="4"] {
      transform: translateX(-20%) scale(0.8);
      z-index: 3;
    }

    &[data-pos="5"] {
      transform: translateX(-10%) scale(0.9);
      z-index: 4;
    }
  }
}
</style>

