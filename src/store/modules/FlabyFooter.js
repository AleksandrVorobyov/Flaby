export default {
  state: {
    sectionFooter: {
      desc:
        "Flaby is a free flat template and available for free downloads but please don’t use for sell",
      list: [
        {
          title: "Useful Link",
          links: [
            {
              text: "Resource",
              href: "#",
            },
            {
              text: "Downloads",
              href: "#",
            },
            {
              text: "Graphics",
              href: "#",
            },
            {
              text: "Templates",
              href: "#",
            },
            {
              text: "UI colors",
              href: "#",
            },
          ],
        },
        {
          title: "Free Goods",
          links: [
            {
              text: "Movies",
              href: "#",
            },
            {
              text: "Music",
              href: "#",
            },
            {
              text: "Videos",
              href: "#",
            },
            {
              text: "Games",
              href: "#",
            },
            {
              text: "Application",
              href: "#",
            },
          ],
        },
        {
          title: "Elements",
          links: [
            {
              text: "UI Elements",
              href: "#",
            },
            {
              text: "Materials",
              href: "#",
            },
            {
              text: "Flat UI",
              href: "#",
            },
            {
              text: "Print File",
              href: "#",
            },
            {
              text: "Flyer",
              href: "#",
            },
          ],
        },
        {
          title: "About Us",
          links: [
            {
              text: "Home",
              href: "#",
            },
            {
              text: "Portfolio",
              href: "#",
            },
            {
              text: "Layourt",
              href: "#",
            },
            {
              text: "Blog",
              href: "#",
            },
            {
              text: "Contact Us",
              href: "#",
            },
          ],
        },
      ],
      logo: {
        src: "logo-footer.png",
        href: "/",
      },
      social: [
        {
          link: "#",
          src: "icons/facebook.png",
        },
        {
          link: "#",
          src: "icons/google.png",
        },
        {
          link: "#",
          src: "icons/twitter.png",
        },
      ],
    },
  },
  getters: {
    sectionFooter(state) {
      return state.sectionFooter;
    },
  },
};
