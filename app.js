new Vue({
  el: '#vue-app',
  data: {
    name: '',
    job: 'Ninjas', 
    website: 'http://ijun.ru',
    websiteTag : '<a href="http://ijun.ru">Site</a>',
    age: 20,
    a: 0,
    b: 0
  },
  methods:{
    // addToA: function(){
    //   console.log('testAAAA')
    //   return this.a + this.age
    // },
    // addToB: function(){
    //   console.log('testBBB')
    //   return this.b + this.age
    // },
    // test: function(){
    //   console.log('test')
    // }
  },
  computed:{
    addToA: function(){
      console.log('testAAAA')
      return this.a + this.age
    },
    addToB: function(){
      console.log('testBBB')
      return this.b + this.age
    }
  }
});