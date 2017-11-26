<template>
  <div>
    <h2>Add a new Blog Post</h2>
    <form>
      <label>Blog title:</label>
      <input type="text" v-model.lazy="blog.title">
      <label>Blog Content:</label>
      <textarea v-model.lazy="blog.content"></textarea>
      <div id="checkbox">
        <label>Ninjas</label>
        <input type="checkbox" value="ninjas" v-model="blog.categories">
        <label>Wizards</label>
        <input type="checkbox" value="wizards" v-model="blog.categories">
        <label>Mario</label>
        <input type="checkbox" value="mario" v-model="blog.categories">
        <label>Cheese</label>
        <input type="checkbox" value="chesee" v-model="blog.categories">
      </div>
    </form>
    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog title: {{ blog.title }}</p>
      <p>Blog content:</p>
      <p>{{ blog.content }}</p>
      <p>Categories: {{ blog.categories }}</p>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      blog:{
        title: '',
        Content: '',
        categories: []
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
