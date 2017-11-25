<template>
  <div>
    <app-header v-bind:title="title" v-on:changeTitle="changeTitle($event)"></app-header>
    <hr>
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
  },
  methods:{
    changeTitle: function(updateTitle){
      this.title = updateTitle.name;
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
