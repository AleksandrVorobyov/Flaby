export default {
    state: {
        sidebar: {
            title: "Flaby",
            subtitle: "Menu",
        },
    },
    getters: {
        sidebar(state) {
            return state.sidebar;
        },
    },
    mutations: {
        unlockSidebar(state, payload) {
            const sidebar = document.getElementById("sidebar");
            const navigation = document.getElementById("navigation");

            if (sidebar.classList.contains("sidebar--active")) {
                sidebar.classList.remove("sidebar--active")
                navigation.querySelector('.navigation__burger').classList.remove("navigation__burger--active")
            } else {
                sidebar.classList.add("sidebar--active")
                navigation.querySelector('.navigation__burger').classList.add("navigation__burger--active")
            }
        },
        hideScroll() {
            if (document.querySelector('body').classList.contains("no-scroll")) {
                document.querySelector('body').classList.remove('no-scroll');
            } else {
                document.querySelector('body').classList.add('no-scroll');
            }
        }
    },
    actions: {
        sidebar({ commit, state }, products) {
            console.log(commit.sidebar);
        }
    }
}