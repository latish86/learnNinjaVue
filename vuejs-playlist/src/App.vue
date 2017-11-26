<template>
  <div>
    <h2>Add a new Blog Post</h2>
    <form>
      <label>Blog title:</label>
      <input type="text" v-model.lazy="blog.title">
      <label>Blog Content:</label>
      <textarea v-model.lazy="blog.content"></textarea>
    </form>
    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog title: {{ blog.title }}</p>
      <p>Blog content:</p>
      <p>{{ blog.content }}</p>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      blog:{
        title: '',
        Content: ''
      }
    }
  }
}
</script>

<style>
  body{
    margin: 0;
    padding: 0;
  }
</style>
