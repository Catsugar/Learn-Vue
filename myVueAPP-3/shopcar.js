window.onload = function (){ 
var vm = new Vue({
  el: '#app',
  data: {
    totalMoney:0,
    totalNum:0,
	checkAllFlag:false,
	delFlag:false,
	curPro:'',
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
		this.calcTotalPrice();
	},
	deletePro: function(pro){
		this.delFlag=true;
		this.curPro=pro;
	},
	surePro: function(pro){
        var index=this.shopList.product.index(this.curPro);
		this.shopList.product.splice(index,1);
		this.delFlag=false;
	},
	selectPro: function(pro){
	    if(typeof pro.checked=='undefined'){
		  Vue.set(pro,"checked",true);//全局注册
		  //this.$set(pro,"checked",true);//局部注册
		}else{
		   pro.checked=!pro.checked;	
		}
		this.calcTotalPrice();		
	},
    selectShop: function(shop){
		shop.checked=!shop.checked;
	    shop.product.forEach(function(pro,index){
		  if(typeof pro.checked=='undefined'){
		     Vue.set(pro,"checked",shop.checked);
		  }else{
		     pro.checked=shop.checked;	
		  }
		})
		this.calcTotalPrice();		
	},
	checkAll: function(){
		this.checkAllFlag=!this.checkAllFlag;
		var _this=this;
	    this.shopList.forEach(function(shop,index){
			 if(typeof shop.checked=='undefined'){
		       Vue.set(shop,"checked",_this.checkAllFlag);
		     }else{
		       shop.checked=_this.checkAllFlag;
			 }
			 shop.product.forEach(function(pro,index){
		       if(typeof pro.checked=='undefined'){
		         Vue.set(pro,"checked",shop.checked);
		       }else{
		         pro.checked=shop.checked;	
		       }
		     })	
		})
		this.calcTotalPrice();		
	},
	cancelAll: function(){
		this.checkAllFlag=false;
		var _this=this;
	    this.shopList.forEach(function(shop,index){
			 if(typeof shop.checked=='undefined'){
		       Vue.set(shop,"checked",false);
		     }else{
		       shop.checked=false;
			 }
			 shop.product.forEach(function(pro,index){
		       if(typeof pro.checked=='undefined'){
		         Vue.set(pro,"checked",false);
		       }else{
		         pro.checked=false;	
		       }
		     })	
		})
		this.calcTotalPrice();		
	},
	calcTotalPrice:function(){
	   var _this=this;
	   _this.totalMoney=0;
	   _this.totalNum=0;
	   this.shopList.forEach(function(shop,index){
		 shop.product.forEach(function(pro,index){
		    if(pro.checked){
		      _this.totalMoney += pro.productprice * pro.productnum;
			  _this.totalNum += pro.productnum;
		    }
		 })	
	   })		
	}
  }
});
}