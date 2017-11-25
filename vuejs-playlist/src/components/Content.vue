<template>
  <div id="content">
    <ul>
      <li v-for="ninja in ninjas" @click="ninja.show = !ninja.show">
        <h2>{{ ninja.name }}</h2>
        <h3 v-show="ninja.show">speciality: {{ ninja.speciality }}</h3>
      </li>
    </ul>
    <p>Кнопка удаляет ninja из списка. Изменяетя оба списка т.к. объект передается по ссылке</p>
    <button @click="delNinja">Del Ninjas()</button>
  </div>
</template>

<script>


export default {
  props: {
    ninjas:{
      type: String,
      required: false
    }
  },
  data () {
    return {
      
    }      
  },
  methods:{
    delNinja: function(){
      this.ninjas.pop();
    }
  }
}
</script>

<style scoped>
  h2, h3{
    margin: 3px;
  }
  p{
    padding: 10px;
  }
  button{
    margin: 10px;
  }
</style>
