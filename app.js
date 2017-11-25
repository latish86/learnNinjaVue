new Vue({
  el: '#vue-app',
  data: {
    red: false,
    ital: true,
    blue: true
  },
  methods:{
    checkColor: function(){
      this.red = !this.red;
    },
    checkStyle: function(){
      this.ital = !this.ital;
    }
  },
  computed:{
    Ex2Classes: function(){
      return {
        blue: this.blue,
        ital: this.ital
      }
    }
  }
});