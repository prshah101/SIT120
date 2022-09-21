<template>
<div class="querycolored">
    <div class="totalquery">
        <div class="container">
            <img src="@/assets/searchglass.jpg" alt="searchglass">
        </div>
        <div>
            <input v-model="blogquery" type="text" placeholder="Search" />
        </div>
    </div>
</div>

<br>

<div class="totalposts">
    <div v-for="blog in filteredList()" :key="blog.id">
    <div class="posts">
        <router-link :to="`/blogPost/${blog.name}`">
        {{ blog.message }}
        </router-link>
    </div>
    <br>
</div>
<div class="item error" v-if="blogquery&&!filteredList().length">
    <p>No results found!</p>
 </div>
</div> 

</template>

<!-- // list, filter, query, for..loop matched results -->
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
.container {
    width: auto;
    height: auto;
    float: left;
}

.container img {
    width: 20%;
    height: 20%;
    float: left;
}

.query {
    width: 39.063vw;
    height: 7.889vw;
    color: white;
    position: relative;
    float: right;
}

::placeholder {
    color: white;
    opacity: 1;
}

input[type=text] {
    background-color: #194F77;
    color: white;
    font-size: 32px;
}

.totalquery {
    margin: auto;
    text-align: center;
    width: 100%;
    padding: 4vw;
    font-size: 50px;
    margin-bottom: 0.30em;
    background-color: #194F77;
    padding: 10px;
}

input {
    border: none;
    font-size: 30vw;
}

.posts {
    background-color: #D2E1EF;
    padding: 2vw;
    font-size: 2vw;
    width: 90vw;
    position: relative;
    left: 3vw;
}

.posts a {
  text-decoration: none;
  color: #194F77;
}

.totalposts{
    margin-top: 100px;
}
</style>
