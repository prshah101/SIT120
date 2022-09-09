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
