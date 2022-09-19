import Vue from "vue";
import App from "./Hello";

Vue.config.profuctionTip = false;

new Vue({
    el: "#app",
    template: "<App/s>",
    components: [App]

});