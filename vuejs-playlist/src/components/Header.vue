<template>
<header>
  <h1 @click="changeTitle">{{ title }}</h1>
</header>
</template>

<script>
import { bus } from '../main'
export default {
  props:{
    title:{
      type: String
    }
  },
  data() {
    return {
    };
  },
  methods:{
    changeTitle: function(){
      //this.$emit('changeTitle', {name: 'Changed!!!!!!!!!'});
      this.title = 'CHANGED!!!!';
      bus.$emit('titleChange', 'CHANGED!!!!')
    }
  }
};
</script>

<style scoped>
header {
  background: #1a0e67;
  margin: 0;
  padding: 10px;
}
h1 {
  text-align: center; 
  color: #a70000; 
  margin: 0;
}
</style>