new Vue({
  el: '#vue-app',
  data: {
    name: 'Artem',
    job: 'Ninjas' 
  },
  methods:{
    good: function(time){
      return 'Good ' + time + ' ' + this.name + '!!!'
    }
  }
});