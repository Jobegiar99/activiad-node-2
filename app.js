
const app = new Vue({
  el:"#app",
  data:{
      dbInfo: [],
      noDBInfo: true,
      showInfo:false
  },
  methods:{
      async callDBInfo(){
        
        const response = await fetch("http://localhost:8080/api/eshop")
        var data = await response.json();
        this.dbInfo = data;
        this.noDBInfo = false;
        this.showInfo = true;
        
      }
    }

});

