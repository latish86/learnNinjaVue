new Vue({
  el: '#vue-app',
  data: {
    name: 'Artem',
    job: 'Ninjas', 
    website: 'http://ijun.ru',
    websiteTag : '<a href="http://ijun.ru">Site</a>'
  },
  methods:{
    good: function(time){
      return 'Good ' + time + ' ' + this.name + '!!!'
    }
  }
});