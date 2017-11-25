var one = new Vue({
  el: '#vue-app-one',
  data: {
    title: 'App one'
  },
  methods:{
  },
  computed:{
    greet: function(){
      return 'Hello app ONNNNEEE!!!'
    }
  }
});

var two = new Vue({
  el: '#vue-app-two',
  data: {
    title: 'App two'
  },
  methods:{
    changeTitleAppOne: function(){
      one.title = 'Title change'
    }
  },
  computed:{
    greet: function(){
      return 'Hello app two!!!'
    }
  }
});