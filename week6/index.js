Vue.component('todo-item', {
    template: '<li>This is a todo</li>'
})

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        name: 'Preet',
        phoneNum: '0430085916',
        checked: false,
    },
});

// var checkbox = new Vue({
//     el: '#app'
// })