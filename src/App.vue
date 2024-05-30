<template>
  <div class="container w-100  " style="display:flex; justify-content:center;   "> 
    <!-- Form for creating or updating a post -->
    <div class="mb-4 w-50" style="border-right:2px solid black">
      <div class="card p-5 w-75 mt-5">
        <form @submit.prevent="createOrUpdatePost">
          <div class="mb-3">
            <input
              type="text"
              v-model="name"
              class="form-control"
              placeholder="Input name..."
            />
          </div>
          <div class="form-floating">
            <textarea
              v-model="description"
              class="form-control"
              placeholder="Leave a comment here"
              style="height: 100px"
            ></textarea>
            <label for="floatingTextarea2">Description ...</label>
          </div>
          <button type="submit" class="btn mt-4 w-100 btn-primary">
            {{ editId === null ? 'Create' : 'Update' }}
          </button>
          <button
            type="button"
            class="btn mt-2 w-100 btn-secondary"
            @click="cancelEdit"
            v-if="editId !== null"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
    

    <!-- Display posts -->
    <div class="w-50 mt-4 " style="display: flex;  justify-content:center;  gap:20px; flex-direction: row; flex-wrap:wrap; ">
    <div v-for="post in posts" :key="post.id" class="card mb-3 w-75" >
      <div class="card-body">
        <h5 class="card-title">{{ post.name }}</h5>
        <p class="card-text">{{ post.description }}</p>
        <button @click="editPost(post)" class="btn btn-warning">Edit</button>
        <button @click="deletePost(post.id)" class="btn m-4 btn-danger">Delete</button>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      name: "",
      age: null,
      // description: "",
      posts: [],
      editId: null, // Track the post being edited
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      axios
        .get("http://localhost:5000/api/datas")
        .then((response) => {
          this.posts = response.data.datas;
          console.log("Fetched posts:", this.posts);
        })
        .catch((error) => console.log(error));
    },
    createOrUpdatePost() {
      if (this.editId === null) {
        // Create new post
        axios
          .post("http://localhost:5000/api/datas/post", {
            name: this.name,
            description: this.description,
          })
          .then((response) => {
            console.log("Created post:", response.data);
            this.posts.unshift(response.data);
            this.resetForm();
          })
          .catch((error) => console.error(error));
      } else {
        // Update existing post
        axios
          .put(`http://localhost:5000/api/datas/${this.editId}`, {
            name: this.name,
            description: this.description,
          })
          .then((response) => {
            console.log("Updated post:", response.data);
            const index = this.posts.findIndex((post) => post.id === this.editId);
            this.$set(this.posts, index, response.data);
            this.resetForm();
          })
          .catch((error) => console.error(error));
      }
    },
    editPost(post) {
      this.name = post.name;
      this.description = post.description;
      this.editId = post.id;
      console.log("Editing post:", post);
    },
    deletePost(id) {
      axios
        .delete(`http://localhost:5000/api/datas/${id}`)
        .then(() => {
          this.posts = this.posts.filter((post) => post.id !== id);
          console.log(`Deleted post with ID: ${id}`);
        })
        .catch((error) => console.error(error));
    },
    cancelEdit() {
      this.resetForm();
      console.log("Edit cancelled, form reset");
    },
    resetForm() {
      this.name = "";
      this.description = "";
      this.editId = null;
      console.log("Form reset");
    },
  },
};
</script>

<style>
/* Your styles here */
</style>
