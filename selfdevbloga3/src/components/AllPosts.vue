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

<!-- <li v-for="item in items">
        {{ item.message }}
</li> -->
</template>

    
<script>

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
</style>
