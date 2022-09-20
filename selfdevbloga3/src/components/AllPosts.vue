<template>
<div class="querycolored">
    <div class="totalquery">
        <div class="container">
            <img src="@/assets/searchglass.jpg" alt="searchglass">
        </div>
        <div class="query">
            <input v-model.trim="blogquery" type="text" placeholder="Search" />
        </div>

    </div>
</div>

<br>
<div v-for="blog in blogs" v-bind:key="blog.id">
    <div class="posts">
        <router-link :to="`/blogPost/${blog.name}`">
        {{ blog.message }}
        </router-link>
    </div>
    <br>
</div>
</template>

<script>
// list, filter, query, for..loop matched results
export default {
    name: 'AllPosts',
    data() {
        return {
            blogs: [{
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
            ],
        }
    },
    props: {}
}
</script>

<style scoped>
.container {
    width: 100px;
    height: 100px;
    float: left;
    text-align: center;
}

.container img {
    width: 100%;
    height: auto;
    float: left;
}

.query {
    width: 500px;
    height: 100px;
    color: white;
}

::placeholder {
    color: white;
    opacity: 1;
}

input[type=text] {
    background-color: #194F77;
    color: white;
    font-size: 30px;
}

.totalquery {
    margin: auto;
    width: 30%;
    padding: 10px;
    font-size: 50px;
}

.querycolored {
    background-color: #194F77;
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
}
</style>
