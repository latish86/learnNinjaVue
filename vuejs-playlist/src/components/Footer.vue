<template>
<footer>
  <p>{{ copyright }} {{ title }}</p>
</footer>
</template>

<script>
import { bus } from '../main'
export default {
  data() {
    return {
      copyright: 'copyright 2017',
      title: 'Vue ninjas'
    };
  },
  created(){
    bus.$on('titleChange', (data)=>{
      this.title = data;
    })
  }
};
</script>

<style scoped>
footer{
  background-color: #053302;
  padding: 5px;
  text-align: center;
  color: #ffffff;
}
p{
  padding: 0;
  margin: 0;
}
</style>