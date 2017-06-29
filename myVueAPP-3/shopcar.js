window.onload = function () {

var vm = new Vue({
  el: '#app',
  data: {
    totalMoney:0,
    totalNum:0,
    shopList:[],
  },
  filter:{
  
  },
  mounted: function(){
    this.cartView();
  },
  methods: {
    cartView: function () {
      var _this=this;
	  /*this.$http.jsonp('data.json',{"id":1},{headers:{'Access-Control-Allow-Origin':'*'},emulateJSON: true}).then(function(res){
		alert(res.data);
        _this.shopList=res.body.result.list;
        _this.totalMoney=res.body.result.totalMoney; 
        _this.totalNum=res.body.result.totalNum;
      });*/
	   _this.shopList=data.result.list;
        _this.totalMoney=data.result.totalMoney; 
        _this.totalNum=data.result.totalNum;
    },
  }
});
}