<template>
  <div>
    <app-header v-bind:title="title"></app-header>
    <hr>
    <p>При нажатии на заголовок меняется заголовок тролько в одном элементе.
      т.к. строка передается как <strong>значение</strong>.
    </p>
    <app-header v-bind:title="title"></app-header>
    <app-content v-bind:ninjas="ninjas"></app-content>
    <hr>
    <app-content v-bind:ninjas="ninjas"></app-content>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Content from './components/Content.vue'


export default {
  components:{
    'app-header': Header,
    'app-footer': Footer,
    'app-content': Content
  },
  data () {
    return {
      ninjas: [
        {name: 'Ryu', speciality: 'Vue Components', show: false},
        {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
        {name: 'Hitoshi', speciality: 'Click Events', show: false},
        {name: 'Tango', speciality: 'Conditionals', show: false},
        {name: 'Kami', speciality: 'Webpack', show: false},
        {name: 'Yoshi', speciality: 'Data Diggin', show: false}
      ],
      title: 'App Ninja'
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
