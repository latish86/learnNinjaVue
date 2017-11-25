<template>
<footer>
  <p>{{ copyright }}</p>
</footer>
</template>

<script>
export default {
  data() {
    return {
      copyright: 'copyright 2017 ninjas'
    };
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