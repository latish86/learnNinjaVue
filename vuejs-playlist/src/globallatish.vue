<template>
  <ul>
    <div><h1>Глобальный компонент</h1></div>
    <li v-for="ninja in ninjas">{{ ninja }}</li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      ninjas: ['Yoishi', 'MArio', 'Mira', 'Koko']
    }
  }
}
</script>

<style scoped>
  h1{
    color: red;
  }
</style>
