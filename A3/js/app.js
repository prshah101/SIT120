//Global Component
Vue.component('contact', {
    template: '<div><p>email: equiries@selfdev.com,  number: 300 453 234</p></div>',
});

//Routing//
var Home = { template: "<div><h1>Home</h1><p>This is home</p></div>" };
var About = { template: "<div><h1>About</h1><p>This is some information about our awesome company.</p></div>" };

var routes = [
  { path: '/', component: Home },
  { path: '/contactUs', component: About}
];

var router = new VueRouter({
  routes: routes,
});
//Routing//

var app = new Vue({
    el: '#app',
    router: router, //Routing//
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

function myFunction() {
  var x = document.getElementById("mynav");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

