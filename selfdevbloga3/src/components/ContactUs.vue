<template>
<form>
    <b>
        <p>Full Name</p>
    </b>
    <input v-model="form.name" type="text" placeholder="Please enter your full name" />
    <b>
        <p>Phone Number</p>
    </b>
    <input v-model="form.phoneNum" type="tel" placeholder="Please enter your phone number" />
    <b>
        <p>Enquiry Details</p>
    </b>
    <textarea v-model="form.enquiry" placeholder="Enter your enquiry details"></textarea>

    <br>
    <button v-on:click="confirm">Submit</button>
    <p id="confirmMessage" style="display:none"> {{form.name}}, your enquiry has been sent! We will get back to you shortly.</p>
    <br><br><br>
</form>
</template>

<script>
export default {
    name: 'ContactUs',
    data() {
        return {
            form: {
                name: '',
                phoneNum: '',
                enquiry: '',
            }
        }
    },
    methods: {
        confirm() {
            document.getElementById('confirmMessage').style.display = 'block';
        }
    }
}
</script>
