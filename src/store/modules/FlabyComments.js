export default {
    state: {
        comments: {
            title: "Get know About",
            subtitle: "what customer say",
            slides: [
                {
                    idx: 1,
                    author: "comments/avatar/author-01.png",
                    name: "Emil Lambert",
                    subtitle: "Co Founder of Mew",
                    text: "Great Team with great experience, i would reguler recommended to all that you will get better support by working with this awesome team and their expert members :)"
                },
                {
                    idx: 2,
                    author: "comments/avatar/author-02.jpg",
                    name: "Clement Rice",
                    subtitle: "Co Founder of Mew",
                    text: "Great Team with great experience, i would reguler recommended to all that you will get better support by working with this awesome team and their expert members :)"
                },
                {
                    idx: 3,
                    author: "comments/avatar/author-03.jpg",
                    name: "Adrian Cameron",
                    subtitle: "Co Founder of Mew",
                    text: "Great Team with great experience, i would reguler recommended to all that you will get better support by working with this awesome team and their expert members :)"
                },
                {
                    idx: 4,
                    author: "comments/avatar/author-04.jpg",
                    name: "Stephanie Pierce",
                    subtitle: "Co Founder of Mew",
                    text: "Great Team with great experience, i would reguler recommended to all that you will get better support by working with this awesome team and their expert members :)"
                },
                {
                    idx: 5,
                    author: "comments/avatar/author-05.jpg",
                    name: "Abigayle Anderson",
                    subtitle: "Co Founder of Mew",
                    text: "Great Team with great experience, i would reguler recommended to all that you will get better support by working with this awesome team and their expert members :)"
                },
            ],
            sliderArrow: {
                next: "Next",
                prev: "Previous"
            },
            ActiveCard: 1,
            lastActive: "",
        },
    },
    getters: {
        comments(state) {
            return state.comments;
        },
    },
    mutations: {
        getActiveSlide(state, event) {
            const carouselItems = document.querySelectorAll(".comments__content-slider__item");
            const carouselItemsMass = Array.from(carouselItems);
            carouselItemsMass.forEach((item) => {
                if (item.dataset.pos == 1) {
                    item.dataset.pos = event.dataset.pos
                }
            })
            event.dataset.pos = 1;
        },
        prevSlide(state) {
            const carouselItems = document.querySelectorAll(".comments__content-slider__item");
            const carouselItemsMass = Array.from(carouselItems);

            carouselItemsMass.forEach((item) => {
                if (item.dataset.pos > 1 && item.dataset.pos <= 5) {
                    item.dataset.pos = parseInt(item.dataset.pos) - 1
                } else if (item.dataset.pos == 1) {
                    item.dataset.pos = 5
                }
            })
        },
        nextSlide(state) {
            const carouselItems = document.querySelectorAll(".comments__content-slider__item");
            const carouselItemsMass = Array.from(carouselItems);

            carouselItemsMass.forEach((item) => {
                if (item.dataset.pos >= 1 && item.dataset.pos < 5) {
                    item.dataset.pos = parseInt(item.dataset.pos) + 1
                } else if (item.dataset.pos == 5) {
                    item.dataset.pos = 1
                }
            })
        },
    },
    actions: {}
}