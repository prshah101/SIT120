<template>

<div class="flex-container">
        <div class="contact-details">
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
        <form class="forum">
            <h2>Contact Forum</h2>
            <div class="forum-detail">
                <label>Full Name</label> &nbsp; &nbsp;
            <input v-model="form.name" type="text" placeholder="Please enter your full name" />
            </div>
            <br>
            <div class="forum-detail">
                <label>Phone Number</label> &nbsp; &nbsp;
            <input v-model="form.phoneNum" type="tel" placeholder="Please enter your phone number" />
            </div>
            <br>
            <div class="forum-detail">
                <label>Email</label> &nbsp; &nbsp;
            <input v-model="form.email" type="text" placeholder="Please enter your email" />
            </div>
            <br>
            <div class="forum-detail">
                <label>Enquiry Details</label> &nbsp; &nbsp;
            <textarea v-model="form.enquiry" placeholder="Enter your enquiry details"></textarea>
            </div>
            <br>

            <br>
            <button v-on:click="confirm">Submit</button>
            <p id="confirmMessage" style="display:none"> {{form.name}}, your enquiry has been sent! We will get back to you shortly.</p>
            <br><br><br>
        </form>
</div>

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
                email: '',
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

<style scoped>

/* Responsive Boxes */
.flex-container {
  display: flex;
  flex-direction: row;
  font-size: 30px;
  text-align: center;
}

@media (max-width: 600px) {
  .flex-container {
    flex-direction: column;
  }
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
/* Responsive End */

.sub-detail{
    background-color: #ffffff;
    padding: 0.5vw;
    font-size: 2vw;
    width: 30vw;
    position:relative; 
    left:8vw;
}

.forum-detail{
    background-color: #ffffff;
    padding: 0.5vw;
    font-size: 2vw;
    width: 35vw;
    position:relative; 
    left:8vw;
}

.h2{
    padding: 0.5vw;
    font-size: 2vw;
    width: 35vw;
    position:relative; 
    left:8vw;
}

input.middle:focus {
    outline-width: 0;
}
</style>
