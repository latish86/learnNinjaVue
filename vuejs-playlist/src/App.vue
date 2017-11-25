<template>
  <div>
    <h1>{{ title }}</h1>
    <ninjas></ninjas>
    <localNinjas></localNinjas>
  </div>
</template>

<script>
import La from './locallatish.vue'


export default {
  components:{
    'localNinjas': La
  },
  data () {
    return {
      title: 'LA App'
    }
  }
}
</script>

<style>

</style>
