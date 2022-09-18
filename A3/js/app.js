//Global Component
Vue.component('contact', {
    template: '<div>email: equiries@selfdev.com,  number: 300 453 234</div>',
});

var app = new Vue({
    el: '#app',
    data: {
        exist: true,
        name: '',
        phoneNum: '',
        enquiry: '',
    },
});

function confirm(){
    document.getElementById('confirmMessage').style.display = 'block';
}
