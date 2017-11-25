Vue.component('greeting', {
  template:'\
    <div>\
      <p>Hey guies!!! I am {{ name }}</p>\
      <button @click="changeName">Change name</button>\
    </div>\
  ',
  data: function(){
    return {
      name: 'VAsya'
    }
  },
  methods:{
    changeName: function(){
      this.name = 'Kostya'
    }
  }
})


var one = new Vue({
  el: '#vue-app',
  data: {
    output: 'Your fav food'
  },
  methods: {
    readRefs: function(){
      console.log(this.$refs)
      this.output = this.$refs.input.value    
    }
  }
}); 

