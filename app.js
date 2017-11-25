new Vue({
  el: '#vue-app',
  data: {
    name: '',
    job: 'Ninjas', 
    website: 'http://ijun.ru',
    websiteTag : '<a href="http://ijun.ru">Site</a>',
    age: '',
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