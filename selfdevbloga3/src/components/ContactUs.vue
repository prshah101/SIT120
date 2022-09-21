<template>
<div class="flex-container">
    <div class="contact-details">
        <br>
        <div class="sub-detail">
            <p>Call Us</p>
            <p>300 546 273</p>
        </div>
        <br>
        <div class="sub-detail">
            <p>Our Address:</p>
            <p>1 Marivle Ave, AUD 3000</p>
        </div>
        <br>
        <div class="sub-detail">
            <p>Email Us:</p>
            <p>self.improvement@sf.com.au</p>
        </div>
    </div>
    <div class="forum">
        <h2>Contact Forum</h2>
        <div class="forum-detail">
            <label>Full Name:</label> &nbsp; &nbsp;
            <input v-model="name" type="text" placeholder="Please enter your full name" />
        </div>
        <br>
        <div class="forum-detail">
            <label>Phone Number:</label> &nbsp; &nbsp;
            <input v-model="phoneNum" type="tel" placeholder="Please enter your phone number" />
        </div>
        <br>
        <div class="forum-detail">
            <label>Email:</label> &nbsp; &nbsp;
            <input v-model="email" type="text" placeholder="Please enter your email" />
        </div>
        <br>
        <div class="forum-detail">
            <label>Enquiry Details:</label> &nbsp; &nbsp;
            <textarea v-model="enquiry" placeholder="Enter your enquiry details"></textarea>
        </div>
        <br>

        <SubmitButton  @submit-details="submitConfirmation"/>
        <!-- <button v-on:click="confirm">Submit</button>
        <p id="confirmMessage" style="display:none; color:white"> {{name}}, your enquiry has been sent! We will get back to you shortly.</p>
        <br> -->
    </div>
    <br><br><br>
</div>
</template>

<script>
import SubmitButton from './SubmitButton.vue'
export default {
    name: 'ContactUs',
    data() {
        return {
            name: '',
            phoneNum: '',
            enquiry: '',
            email: '',
        }
    },
    methods: {
        confirm() {
            document.getElementById('confirmMessage').style.display = 'block';
        },
        submitConfirmation(message){
            alert(`${message}`);
        }
    },
    components:{
        SubmitButton
    }
}
</script>

<style scoped>
/* Responsive Boxes */
.flex-container {
    display: flex;
    flex-direction: row;
    font-size: 30px;
    text-align: center;
}

.contact-details {
    background-color: #D2E1Ef;
    padding: 10px;
    flex: 50%;
}

.forum {
    background-color: #194F77;
    padding: 10px;
    flex: 50%;
}

.sub-detail {
    background-color: #ffffff;
    padding: 0.5vw;
    font-size: 2vw;
    width: 30vw;
    position: relative;
    left: 8vw;
}

.forum-detail {
    background-color: #ffffff;
    padding: 0.5vw;
    font-size: 2vw;
    width: 33vw;
    position: relative;
    left: 7vw;
}

h2 {
    color: #ffffff;
    font-size: 4vw;
}

input {
    border: none;
    font-size: 1.5vw;
    width: 25vw;
}

textarea {
    border: none;
    font-size: 1.5vw;
    height: 10vw;
}

@media (max-width: 600px) {
    .flex-container {
        flex-direction: column;
    }

    .sub-detail {
        background-color: #ffffff;
        padding: 0.5vw;
        font-size: 2vw;
        width: 30vw;
        position: relative;
        left: 30vw;
    }

    .sub-detail {
        background-color: #ffffff;
        padding: 3vw;
        font-size: 5vw;
        width: 60vw;
        position: relative;
        left: 12vw;
    }

    .forum-detail {
        background-color: #ffffff;
        padding: 3vw;
        font-size: 5vw;
        width: 70vw;
        left: 7vw;
        position: relative;
    }

    h2 {
        font-size: 8vw;
    }

    input {
        font-size: 4vw;
        width: 25vw;
    }

    textarea {
        font-size: 4vw;
        height: 30vw;
    }

}

button {
    background-color: white;
    border: none;
    padding: 16px 32px;
    text-decoration: none;
}
</style>
