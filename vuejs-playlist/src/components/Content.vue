<template>
  <div id="content">
    <ul>
      <li v-for="ninja in ninjas" @click="ninja.show = !ninja.show">
        <h2>{{ ninja.name }}</h2>
        <h3 v-show="ninja.show">speciality: {{ ninja.speciality }}</h3>
      </li>
    </ul>
  </div>
</template>

<script>


export default {
  props: {
    ninjas:{
      type: String,
      required: false
    }
  },
  data () {
    return {
      
    }      
  }
}
</script>

<style scoped>
  h2, h3{
    margin: 3px;
  }
</style>
