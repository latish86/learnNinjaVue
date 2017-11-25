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
  el: '#vue-app-one'
});

var two = new Vue({
  el: '#vue-app-two'
});