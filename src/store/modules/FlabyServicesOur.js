export default {
    state: {
        servicesOur: {
            title: "our sevices",
            subtitle: "Welcome to"
        },
        servicesOurItems: [
            {
                id: 'servicesCard-01',
                src: 'services/web-development.png',
                alt: 'Web Development',
                title: 'Web Development',
                desc: 'There are many variations of passages of Lorem Ipsum available,  the majorityalteration make difficult'
            },
            {
                id: 'servicesCard-02',
                src: 'services/photography.png',
                alt: 'Photography',
                title: 'Photography',
                desc: 'There are many variations of passages of Lorem Ipsum available,  the majorityalteration make difficult'
            },
            {
                id: 'servicesCard-03',
                src: 'services/vector-artist.png',
                alt: 'Vector Artist',
                title: 'Vector Artist',
                desc: 'There are many variations of passages of Lorem Ipsum available,  the majorityalteration make difficult'
            },
        ]
    },
    getters: {
        servicesOur(state) {
            return state.servicesOur;
        },
        servicesOurItems(state) {
            return state.servicesOurItems;
        }
    }
}