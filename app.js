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
    add: function(inc){
      this.age+= inc;
    },
    substract: function(dec){
      this.age-=dec;
    },
    updateXY: function(event){
      this.x = event.offsetX;
      this.y = event.offsetY;
    }
  }
});