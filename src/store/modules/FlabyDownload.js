export default {
    state: {
        download: {
            title: "Great Resourse for free",
            subtitle: "Feel free to download our",
            text: "There are many variations of passages of Lorem Ipsum available & majorityalteration",
            desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia",
            src: "download/download.png",
            alt: "download",
        }
    },
    getters: {
        download(state) {
            return state.download;
        }
    }
}