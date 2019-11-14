
$(function(){
	
//   导航下拉菜单
   $(".menu li").hover(function () {
      $(this).find(".txtk").toggle();
  	});
	
//	鼠标移入背景颜色更改
	$("#list-item li").hover(function(){
		var index = $(this).index();
		$(this).addClass('active').siblings('li').removeClass('active');
		$(".software_right_mian").eq(index).addClass('selected').siblings().removeClass('selected');
      	$(".software_left_p").eq(index+1).addClass("border").parent().siblings().children().removeClass("border");
		
		if (index == 0) {
		        $("#software_bgb").css("background-color", "#7977ef");
		        $("#list-item li .after").css("background-color", "#7977ef");
		    }
		    else if (index == 1) {
		        $("#software_bgb").css("background-color", "#a1943b");
		        $("#list-item li.active .after").css("background-color", "#a1943b");
		    }
		    else if (index == 2) {
		        $("#software_bgb").css("background-color", "#09b662");
		        $("#list-item li.active .after").css("background-color", "#09b662");
		    }
		    else if (index == 3) {
		        $("#software_bgb").css("background-color", "#7c17da");
		        $("#list-item li.active .after").css("background-color", "#7c17da");
		    }
		    else if (index == 4) {
		        $("#software_bgb").css("background-color", "#6ead0c");
		        $("#list-item li.active .after").css("background-color", "#6ead0c");
		    }
	})

})
