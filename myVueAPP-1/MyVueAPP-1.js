var isstop=false;
var app = new Vue({
  el: '#app',
  data: {
    title: '搞一个斐波那契数列',
  },
  methods: {
    returnData: function () {
	   var timer=setInterval(function(){
		  var parent=document.getElementsByTagName("ul")[0];
		  var arr=document.getElementById("box").getElementsByTagName("li");
		  var li=document.createElement("li")
		  if(arr.length==0 || arr.length==1){
			li.innerHTML=1;
		  }else{
			li.innerHTML=parseInt(arr[arr.length-2].innerHTML)+parseInt(arr[arr.length-1].innerHTML);
		  }
		  parent.appendChild(li);
		  console.log(isstop);
		  if(isstop){clearInterval(timer);timer=null;isstop=false;}
        },1000)
     },
	 stopData:function(){
		 isstop=true;
	 },
	 cleanData:function(){document.getElementsByTagName("ul")[0].innerHTML="";}
  }
})