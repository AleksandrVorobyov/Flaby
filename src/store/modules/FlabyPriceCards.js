export default {
    state: {
        priceCards: {
            title: "Pricing plan",
            subtitle: "Get Idea About",
            list: [
                {
                    src: "price-cards/book.png",
                    alt: "book.png",
                    name: "Student",
                    price: "39",
                    btn: "Sign up",
                    listCard: [
                        "6 GB storage",
                        "Fast Brandwidht",
                        "Responsive",
                        "Customization",
                    ],
                },
                {
                    src: "price-cards/bag.png",
                    alt: "bag.png",
                    name: "Professional",
                    price: "59",
                    btn: "Sign up",
                    listCard: [
                        "6 GB storage",
                        "Fast Brandwidht",
                        "Responsive",
                        "Customization",
                    ],
                },
                {
                    src: "price-cards/shopping-bag.png",
                    alt: "shopping-bag.png",
                    name: "Unlimited",
                    price: "99",
                    btn: "Sign up",
                    listCard: [
                        "6 GB storage",
                        "Fast Brandwidht",
                        "Responsive",
                        "Customization",
                    ],
                },
            ]
        },
    },
    getters: {
        priceCards(state) {
            return state.priceCards;
        }
    },
}
