var vm = new Vue({
  el: '#app',
  data: {
    totalMoney:0,
    totalNum:0,
    productList:[],
  },
  filter:{
  
  },
  mounted: function(){
    this.cartView();
  },
  methods: {
    cartView: function () {
      var _this=this;
	  this.$http.get("data.jsonp",{"id":123}).then(function(res){
        _this.productList=res.body.result.list;
        _this.totalMoney=res.body.result.totalMoney; 
        _this.totalNum=res.body.result.totalNum;
      });
	  },
  }
});