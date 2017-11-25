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
  data () {
    return {
      ninjas: [
        {name: 'Ryu', speciality: 'Vue Components', show: false},
        {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
        {name: 'Hitoshi', speciality: 'Click Events', show: false},
        {name: 'Tango', speciality: 'Conditionals', show: false},
        {name: 'Kami', speciality: 'Webpack', show: false},
        {name: 'Yoshi', speciality: 'Data Diggin', show: false}
      ]
    }      
  }
}
</script>

<style scoped>
  h2, h3{
    margin: 3px;
  }
</style>
