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
	addressList:[],
	limitNum:3,
	isMoreadd:false,
	curAdd:0,
	curTrans:1
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
	  this.$nextTick(function(){
        this.cartView();
	  });
  },
  computed: {
    filterAddress:function(){
	  return this.addressList.slice(0,this.limitNum);
	}
  },
  methods: {
    cartView: function () {
      /*var _this=this;
	  this.$http.jsonp('data.json',{"id":1},{headers:{'Access-Control-Allow-Origin':'*'},emulateJSON: true}).then(function(res){
		alert(res.data);
        _this.shopList=res.body.result.list;
        _this.totalMoney=res.body.result.totalMoney; 
        _this.totalNum=res.body.result.totalNum;
      });*/
	  this.shopList=data.result.list;
      this.totalMoney=data.result.totalMoney; 
      this.totalNum=data.result.totalNum;
	  this.addressList=addressdata.result;
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
	surePro: function(){
		var _this=this;
	    this.shopList.forEach(function(shop,index){
			 shop.product.forEach(function(pro,index){
		         console.log(shop.product);
				 var i=shop.product.indexOf(_this.curPro)
				 if(i!==-1){shop.product.splice(i,1);}
		     })	
		})
		this.delFlag=false;
		this.calcTotalPrice();
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
	},
	//地址的方法
	moreAddress:function(){
		this.limitNum=this.addressList.length;
		this.isMoreadd=true;
	},
	lessAddress:function(){
		this.limitNum=3;
		this.isMoreadd=false;
	},
	setDefault:function(id){
		var i=0;
		var _this=this;
	    this.addressList.forEach(function(address,index){
			address.isDefault=false;
		});
		this.addressList.forEach(function(address,index){
			if(address.addressID==id){
				address.isDefault=true;
				i=_this.addressList.indexOf(address);
			}
		});
	    var firstAdd=this.addressList[i];
		this.addressList.splice(i,1);
		this.addressList.unshift(firstAdd);
	},
	//删除地址
	deleteAdd: function(add){
		this.delFlag=true;
		this.curPro=add;
	},
	sureAdd: function(){
		var i=this.addressList.indexOf(this.curPro);
		if(i!==-1){this.addressList.splice(i,1);}
		this.delFlag=false;
	},
  }
});
}