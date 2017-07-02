window.onload = function (){ 
var vm = new Vue({
  el: '#app',
  data: {
    totalMoney:0,
    totalNum:0,
	checkAllFlag:false,
    shopList:[],
  },
  filters: {
    formatMoney: function(value){
		return "¥"+value.toFixed(2);
	},
	sumMoney: function(value){
		return value.toFixed(2);
	}
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
	changeNum: function(product,way){
		if (way>0 ){
		  product.productnum++;	
		}else if(way<0 && product.productnum!==1){
		   product.productnum--;	
		}	
	},
	selectPro: function(product){
	    if(typeof product.checked=='undefined'){
		  Vue.set(product,"checked",true);//全局注册
		  //this.$set(product,"checked",true);//局部注册
		}else{
		   product.checked=!product.checked;	
		}
	},
    selectShop: function(shop){
		shop.shopflag=!shop.shopflag;
	    shop.product.forEach(function(pro,index){
		  if(typeof pro.checked=='undefined'){
		     Vue.set(pro,"checked",shop.shopflag);
		  }else{
		     pro.checked=shop.shopflag;	
		  }
		})
	},
	checkAll: function(){
		this.checkAllFlag=!this.checkAllFlag;
		var _this=this;
	    this.shopList.forEach(function(shop,index){
		     shop.shopflag=_this.checkAllFlag;
			 shop.product.forEach(function(pro,index){
		       if(typeof pro.checked=='undefined'){
		         Vue.set(pro,"checked",shop.shopflag);
		       }else{
		         pro.checked=shop.shopflag;	
		       }
		     })	
		})
		
	}
  }
});
}