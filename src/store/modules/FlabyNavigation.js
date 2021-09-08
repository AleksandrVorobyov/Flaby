export default {
    state: {
        logo: {
            src: "logo.png",
            alt: "logo"
        },
        navLinks: [
            {
                text: "home",
                link: "/",
            },
            {
                text: "services",
                link: "/services",
            },
            {
                text: "portfolio",
                link: "/portfolio",
            },
            {
                text: "blog",
                link: "/blog",
            },
            {
                text: "contact us",
                link: "/contact",
            },
        ],
        navbtn: "Login",
    },
    getters: {
        logo(state) {
            return state.logo;
        },
        navLinks(state) {
            return state.navLinks;
        },
        navbtn(state) {
            return state.navbtn;
        },
    },
    mutations: {
        formLoginUnlock() {
            console.log('form login unlock!');
        }
    }
}
