<template>
    <div class="totalquery">
        <div class="imagecontainer">
            <img src="@/assets/searchglass.jpg" alt="searchglass">
        </div>
        <div class="inputcontainer" >
            <input v-model="blogquery" type="text" placeholder="Search" />
        </div>
    </div>

<br>

    <div v-for="blog in filteredList()" :key="blog.id">
    <div class="posts">
        <router-link :to="`/blogPost/${blog.name}`">
        {{ blog.message }}
        </router-link>
    </div>
    <br>
<div class="item error" v-if="blogquery&&!filteredList().length">
    <p>No results found!</p>
 </div>
</div> 

</template>
<script setup>
    import { ref } from "vue";
    let blogquery = ref("");
    const blogs= [{
                    id: 1,
                    message: 'How to Build a Habit',
                    name: 'Habits'
                },
                {
                    id: 2,
                    message: 'Gaining Motivation',
                    name: 'Motivation'
                },
                {
                    id: 3,
                    message: 'Stick to your Goals',
                    name: 'Goals'
                }
            ];
    function filteredList() {
      return blogs.filter((blog) =>
        blog.message.toLowerCase().includes(blogquery.value.toLowerCase())
      );
    }
    </script>

<style scoped>
.imagecontainer {
    width: auto;
    height: auto;
    float: left;
}

.imagecontainer img {
    width: 10%;
    height: 10%;
    float: left;
    left:40vw;
    position: relative;
}

.inputcontainer {
    position: relative;
    right:10vw;
}

::placeholder {
    color: white;
    opacity: 1;
}

input[type=text] {
    background-color: #194F77;
    color: white;
    font-size: 40px;
}

.totalquery {
    margin: auto;
    text-align: center;
    width: 100%;
    font-size: 50px;
    margin-bottom: 0.30em;
    background-color: #194F77;
    padding: 3vw;
}

input {
    border: none;
    font-size: 30vw;
}

.posts {
    background-color: #D2E1EF;
    padding: 3vw;
    font-size: 2.75vw;
    width: 85vw;
    position: relative;
    left: 3vw;
}

.posts a {
  text-decoration: none;
  color: #194F77;
}

@media screen and (max-width: 878px) {
    .posts {
    background-color: #D2E1EF;
    padding: 4vw;
    font-size: 5vw;
    width: 85vw;
    position: relative;
    left: 2vw;
}
}

@media screen and (max-width: 1184px) {
    .inputcontainer {
    position: relative;
    left:10vw;
}
}

@media screen and (max-width: 1007px) {
    .inputcontainer {
    position: relative;
    left:15vw;
}
}

@media screen and (max-width: 814px) {
    .inputcontainer {
    position: relative;
    left:20vw;
}
}

@media screen and (max-width: 544px) {
    .inputcontainer {
    position: relative;
    left:30vw;
}
}

</style>
