$(document).ready(function(){

	// image movement======================


var c1_w=$(window).width()-$(".cloud1").width();
var c2_w=$(window).width()-$(".cloud2").width();
var c3_w=$(window).width()-$(".cloud3").width();
var c4_w=$(window).width()-$(".cloud4").width();

	var movementStrength = 40;
	var movementStrength3 = 50;
	var movementStrength4 = 20;
	var movementStrength5 = 25;
	var height = movementStrength / $(window).height();
	var width = movementStrength / $(window).width();

		var height3 = movementStrength3 / $(window).height();
	var width3 = movementStrength3 / $(window).width();

	var height4 = movementStrength4 / $(window).height();
	var width4 = movementStrength4 / $(window).width();

	var height5 = movementStrength5 / $(window).height();
	var width5= movementStrength5 / $(window).width();

		$(document).mousemove(function(e){
	var pageX = e.pageX - ($(window).width() / 2);
	var pageY = e.pageY - ($(window).height() / 2);

	var newvalueX = width * pageX * -1 + c1_w +50;
	var newvalueY = height * pageY * -1 -20 ;

	var newvalueX2 = width3 * pageX * -1 -60;
	var newvalueY2 = height3 * pageY * -1 -30  ;

	var newvalueX3 = width4 * pageX * -1 +c3_w +50;
	var newvalueY3 = height4 * pageY * -1 -10 ;

	var newvalueX4 = width5 * pageX * -1 -30 ;
	var newvalueY4 = height5 * pageY * -1 -20;

	// var newvalueY2 = height * pageY * -1-15;

		$('.cloud1').css({
			'left': newvalueX,
			'bottom':newvalueY
		});
		$('.cloud2').css({
			'left': newvalueX2,
			'bottom':newvalueY2
		});
		$('.cloud3').css({
			'left': newvalueX3,
			'bottom':newvalueY3
		});
		$('.cloud4').css({
			'left': newvalueX4,
			'bottom':newvalueY4
		});
		
})


$(document).mouseout(function () {
		$('.cloud1').css({
			'left': c1_w + 50,
			'bottom':0
		});
		$('.cloud2').css({
			'left': '-60px',
			'bottom':0
		});
		$('.cloud3').css({
			'left': c3_w +50,
			'bottom':0
		});
		$('.cloud4').css({
			'left':'-30px',
			'bottom':-10
		});
	})


$(".top").click(function(){
		$("body").animate({
			scrollTop:0
		},1200)
		
	})

$(window).scroll(function(){
	


	if($(window).scrollTop()>$(window).height()){
		$(".top").css({
			'width':'40px',
			'height':'40px'

		});
	}else{
		$(".top").css({
			'width':'0px',
			'height':'0px'

		});
	}

	
		$(".js-intro").css({
			'margin-top':200-0.3*$(window).scrollTop()
		})

	if($(window).scrollTop()>=($(window).height()*70)/100){
		$(".header2").css({
			'top':'0px'
		})
	}
	else{
		$(".header2").css({
			'top':'-100px'
		})
	}
})


// landing pageY

$(".blogs-list ul li").click(function(){
	$(this).addClass("active");
	$(this).siblings().removeClass("active");
})

})