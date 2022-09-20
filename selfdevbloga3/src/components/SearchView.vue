<template>
    <input type="text" v-model="blogquery" placeholder="Search fruits..." />
   <div class="blog fruit" v-for="blog in filteredList()" :key="blog.id">
     <p>{{ blog.message }}</p>
   </div>
   <div class="item error" v-if="blogquery&&!filteredList().length">
      <p>No results found!</p>
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