<template>
    <div class="totalquery">
        <div class="inputcontainer" >
            <i class="fa-solid fa-magnifying-glass"></i> &nbsp;
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
.inputcontainer {
    position: relative;
    right:-5vw;
}

::placeholder {
    color: white;
    opacity: 1;
}

input[type=text] {
    background-color: #194F77;
    color: white;
    font-size: 4vw;
    width: 45vw;
}

.fa-magnifying-glass{
    color: white;  
}

.totalquery {
    margin: auto;
    text-align: center;
    width: 90vw;
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

input[type=text] {
    font-size: 6vw;
}

}

@media screen and (max-width: 752px) {
    input[type=text] {
    font-size: 7vw;
}

.fa-magnifying-glass{
    font-size: 7vw;
}
}

@media screen and (max-width: 603px) {
    .totalquery {
    position: relative;
    width: 88vw;
}

.inputcontainer {
    position: relative;
    right:2vw;
}
}

</style>
