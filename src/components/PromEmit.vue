<template>
  <div class="container">
    <div class="mb-4" >
      <!-- <h1>{{ msg }}</h1>
      <h1>Hello ពិភពលោក !</h1> -->

      <div class="card">
        <div class="card-header">Featured</div>
        <div class="card-body">
          <h5 class="card-title">{{ title }}</h5>
          <p class="card-text">
           {{ body }}
          </p>
          <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  props: {
    title: String,
    body: String,
    // name: String,
    // description: String,
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
