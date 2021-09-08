export default {
    state: {
        headerBg: [
            {
                src: 'header/pencil.png',
                alt: 'pencil',
            },
            {
                src: 'header/pencil-2.png',
                alt: 'pencil-2',
            },
            {
                src: 'header/headphones.png',
                alt: 'headphones',
            },
            {
                src: 'header/earphones.png',
                alt: 'earphones',
            },
        ],
        headerTitle: "Flat + free = flaby",
        headerSubtitle: "A Modern Flat design corporate template for free download with all great features and trendy look.",
        headerPhone: {
            borderSrc: "header/phone-border.png",
            borderAlt: "phone-border",
            imgBgSrc: "header/phone-bg.jpg",
            imgBgAlt: "phone-bg",
        },
        googleStore: {
            text: "Google Store",
            href: "https://play.google.com/store/apps"
        },
    },
    getters: {
        headerBg(state) {
            return state.headerBg;
        },
        headerTitle(state) {
            return state.headerTitle;
        },
        headerSubtitle(state) {
            return state.headerSubtitle;
        },
        headerPhone(state) {
            return state.headerPhone;
        },
        googleStore(state) {
            return state.googleStore;
        },
    }
}