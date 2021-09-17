<template lang="pug">
section.footer
  .container
    .footer-wrap
      .footer-col
        .footer__logo
          router-link(:to="sectionFooter.logo.href")
            img(:src="require('@/assets/img/' + sectionFooter.logo.src)")
        .footer__desc 
          p {{ sectionFooter.desc }}
        .footer__social
          .footer__social-item(v-for="item in sectionFooter.social")
            a.footer__social-item-link(, :href="item.link")
              img(:src="require('@/assets/img/' + item.src)")
      .footer-col(v-for="list in sectionFooter.list")
        .footer__list
          h4.footer__list-title {{ list.title }}
          a.footer__list-link(, v-for="item in list.links", :href="item.href") {{ item.text }}
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["sectionFooter"]),
  },
};
</script>

<style scoped lang="scss">
.footer {
  position: relative;
  background: var(--whiteBg);
  z-index: 500;
  overflow: hidden;
}

.footer-wrap {
  padding: 55px 0px;
  border-top: 1px solid #dfdfdf;
}

.footer__logo {
  margin-bottom: 20px;
}

.footer__desc {
  margin-bottom: 25px;
  font-size: 14px;
  font-family: var(--fontRalewayMedium);
  color: var(--mainTextDesc);
  line-height: 2;
}

.footer-wrap {
  display: grid;
  grid-template-columns: 190px 125px 125px 125px 125px;
  justify-content: space-between;
}

.footer__list {
  display: grid;
}

.footer__list-title {
  margin-bottom: 40px;
  font-size: 20px;
  font-family: var(--fontRalewayBold);
  color: var(--mainTextTitle);
  font-weight: bold;
  line-height: 1;
}

.footer__list-link {
  position: relative;
  display: block;
  width: fit-content;
  font-size: 14px;
  font-family: var(--fontRalewayMedium);
  color: var(--mainTextDesc);
  line-height: 1;

  &::before {
    position: absolute;
    bottom: -5px;
    left: 0px;
    content: "";
    width: 100%;
    height: 0;
    background: var(--btnBlueBg);
    transition: height 0.2s linear;
  }

  &:hover::before {
    height: 3px;
  }
}

.footer__list-link + .footer__list-link {
  margin-top: 15px;
}

.footer__social {
  display: flex;

  & > * + * {
    margin-left: 10px;
  }

  & > *:nth-child(1) .footer__social-item-link {
    background: var(--bgFacebook);
  }

  & > *:nth-child(2) .footer__social-item-link {
    background: var(--bgGoogle);
  }

  & > *:nth-child(3) .footer__social-item-link {
    background: var(--bgTwitter);
  }
}

.footer__social-item-link {
  position: relative;
  display: flex;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  transition: opacity 0.3s linear, box-shadow 0.3s linear;

  img {
    position: absolute;
    top: 8px;
    left: 8px;
    width: calc(100% - 16px);
    height: calc(100% - 16px);
    object-fit: contain;
    object-position: center;
  }

  &:hover {
    opacity: 0.7;
    box-shadow: 0px 8px 16px 0px rgba(92, 149, 161, 0.7);
  }
}
</style>
