//Global Component
Vue.component('component1', {
    template: '<div>This is component1</div>',
});

//Local Components
var component2 = {
    template: '<div>This is component2</div>',
};

var component3 = {
    template: '<div> {{dog.name}} is playing </div>',
    props: ['dog'],
};

//App
var app = new Vue({
    el: '#app',
    data: {
        dog: {
            name: 'Cuddles',
        },
    },
    components:{
        component2,
        component3,
    }
});