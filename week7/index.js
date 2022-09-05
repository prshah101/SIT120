Vue.component('component1', {
    template: '<div>This is component1</div>',
});

var component2 = {
    template: '<div>This is component2</div>',
};

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
    },
    components:{
        component2,
    }
});