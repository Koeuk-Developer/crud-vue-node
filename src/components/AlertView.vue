<template>
  <div class="container">
    <div class="mb-4">
      <div class="alert alert-secondary" role="alert">
          {{ post }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "AlertComponent",
      props: {
        post: String,
      },
    };
  },
};
</script>

<style></style>
