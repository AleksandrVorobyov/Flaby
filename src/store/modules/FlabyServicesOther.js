export default {
  state: {
    servicesOther: {
      title: "View Our Latest",
      subtitle: "other services",
      list: [
        {
          title: "Idea Developing",
          src: "services/idea.jpg",
          desc:
            "There are many variations of passages of Lorem Ipsum available, but the majorityalteration in some form with design",
        },
        {
          title: "Best Coding",
          src: "services/coding.jpg",
          desc:
            "There are many variations of passages of Lorem Ipsum available, but the majorityalteration in some form with design",
        },
        {
          title: "Game Design",
          src: "services/game-design.jpg",
          desc:
            "There are many variations of passages of Lorem Ipsum available, but the majorityalteration in some form with design",
        },
        {
          title: "Responsive Design",
          src: "services/responsive-design.jpg",
          desc:
            "There are many variations of passages of Lorem Ipsum available, but the majorityalteration in some form with design",
        },
        {
          title: "Free Shopping",
          src: "services/free-shop.jpg",
          desc:
            "There are many variations of passages of Lorem Ipsum available, but the majorityalteration in some form with design",
        },
        {
          title: "Bonus Download",
          src: "services/bonus.jpg",
          desc:
            "There are many variations of passages of Lorem Ipsum available, but the majorityalteration in some form with design",
        },
      ],
    },
  },
  getters: {
    servicesOther(state) {
      return state.servicesOther;
    },
  },
};
