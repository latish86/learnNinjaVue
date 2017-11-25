new Vue({
  el: '#vue-app',
  data: {
    name: 'Artem',
    job: 'Ninjas', 
    website: 'http://ijun.ru',
    websiteTag : '<a href="http://ijun.ru">Site</a>',
    age: 28,
    x: 0,
    y: 0
  },
  methods:{
    logName: function(){
      console.log("you entered you name")
    },
    logAge: function(){
      console.log("you entered you age")
    }
  }
});