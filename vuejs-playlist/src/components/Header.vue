<template>
<header>
  <h1>{{ title }}</h1>
</header>
</template>

<script>
export default {
  data() {
    return {
      title: "Vue NINJAS"
    };
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