//Global Component
Vue.component('contact', {
    template: '<div><p>email: equiries@selfdev.com,  number: 300 453 234</p></div>',
});

Vue.component('currentBlogs', {
    template: '<div><p>Blog1</p></div>',
});

var app = new Vue({
    el: '#app',
    data: {
        exist: true,
        name: '',
        phoneNum: '',
        enquiry: '',
        items: [{ message: 'Foo' }, { message: 'Bar' }],
    },
});

function confirm(){
    document.getElementById('confirmMessage').style.display = 'block';
}
