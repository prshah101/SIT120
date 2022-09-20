<template>
    <br>

<div class="enquiry-forum">
        <b>
            <p>Full Name</p>
        </b>
        <input v-model="name" type="text" placeholder="Please enter your full name" />
        <b>
            <p>Phone Number</p>
        </b>
        <input v-model="phoneNum" type="tel" placeholder="Please enter your phone number" />
        <b>
            <p>Enquiry Details</p>
        </b>
        <textarea v-model="enquiry" placeholder="Enter your enquiry details"></textarea>

        <!-- <br>
        <button onclick="confirm()">Submit</button>
        <p id="confirmMessage" style="display:none"> {{name}}, your enquiry has been sent! We will get back to you shortly.</p>
        <br><br><br> -->
</div>
</template>

<script>
export default {
    name: 'ContactUs',
}
</script>
