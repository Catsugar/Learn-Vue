var tips=["label-default","label-primary","label-success","label-info","label-warning","label-danger"];
/*判断设备
if(/ipad|iphone|android/.test(UA)){
   window.CLICK='tap';
   window.MobileDevice=true;
}else{
   window.CLICK='click';
}*/
$(document).ready(function(){
	//点击搜索显示搜索框
	$('#searchbtn').click(function(){
		$('#search').fadeIn("fast");
	})
	$('#backbtn').click(function(){
		$('#search').fadeOut("fast");
	})
	//qie
	$('.footer ul:eq(1)').click(function(){
		$('.header').fadeIn("fast");
	})
	$('.footer ul:eq(2)').click(function(){
		$('.header').fadeIn("fast");
	})
	$('.footer ul:eq(4)').click(function(){
		$('.header').fadeOut("fast");
	})
	$('.footer ul:eq(5)').click(function(){
		$('.header').fadeOut("fast");
	})
	
	//给标签添加颜色
	var j=0;
	var k=0;
    for(var i=0;i<$('.label').length;i++){
		if(i%tips.length===0){j=0;}
        $('.label:eq('+i+')').addClass(tips[j]);
		j++;
	}
	$(window).trigger('scroll');
	//文章页点赞
	$('.score').click(function(){
		$(this).toggleClass("icon-star");
		$(this).toggleClass("icon-wujiaoxing");
	})
    $('.favor').click(function(){
		$(this).toggleClass("icon-aixin1");
		$(this).toggleClass("icon-aixin");
	})

	//输入框拉长
	$('textarea').focus(function(){
	    $(this).animate({
		minHeight:160
		},800)
	})
	$('textarea').blur(function(){
	    $(this).animate({
		minHeight:80
		},800)
	})
});








