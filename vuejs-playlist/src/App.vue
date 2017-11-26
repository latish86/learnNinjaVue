<template>
  <div>
    <form-helper>
      <h2 slot="title">{{title}}</h2>
      <p slot="text">I am paragraph text for the slot</p>
    </form-helper>
  </div>
</template>

<script>
import formHelper from './components/formHelper.vue'


export default {
  components:{
    'form-helper': formHelper,
  },
  data () {
    return {
      title: 'Slot title'
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
