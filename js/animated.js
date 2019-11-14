var reAnimate = function(){
			var _ele = $(".column");
			_ele.each(function(index, element) {
				var eleAnimate = $(element).find(".animated");
				eleAnimate.css({"animation-name":"none","-webkit-animation":"none"});//移除全部动效
				$(element).waypoint(function(direction){
						if(direction == "up"){
								eleAnimate.css({"animation-name":"none","-webkit-animation":"none"});
							}else{
								eleAnimate.css({"animation-name":"","-webkit-animation":""});
								//设置指定区块动效
								for (var i =0;i<eleAnimate.length;i++){
										if(index ==0){
												eleAnimate.eq(0).css("animation-delay",".2s");
												eleAnimate.eq(1).css("animation-delay",".4s");
												eleAnimate.eq(2).css("animation-delay",".6s");
												eleAnimate.eq(3).css("animation-delay",".8s");
											}
										if(index ==1){
												eleAnimate.eq(0).css("animation-delay","0s");
												eleAnimate.eq(1).css("animation-delay",".2s");
												eleAnimate.eq(2).css("animation-delay",".4s");
												eleAnimate.eq(3).css("animation-delay",".6s");
												eleAnimate.eq(4).css("animation-delay",".8s");
											}	
										if(index ==2){
												eleAnimate.eq(0).css("animation-delay","0s");
												eleAnimate.eq(1).css("animation-delay",".2s");
												eleAnimate.eq(2).css("animation-delay",".4s");
												eleAnimate.eq(3).css("animation-delay",".6s");
												eleAnimate.eq(4).css("animation-delay",".8s");
												eleAnimate.eq(5).css("animation-delay","1.2s");
												eleAnimate.eq(6).css("animation-delay","1.4s");
												eleAnimate.eq(7).css("animation-delay","1.6s");
												eleAnimate.eq(8).css("animation-delay","1.8s");											
											}	
										if(index ==3){
												eleAnimate.eq(0).css("animation-delay","0s");
											}
										if(index ==4){
												eleAnimate.eq(0).css("animation-delay","0s");
												eleAnimate.eq(1).css("animation-delay",".2s");
												eleAnimate.eq(2).css("animation-delay",".4s");
												eleAnimate.eq(3).css("animation-delay",".6s");
											}											
											
										if(index ==5){
												eleAnimate.eq(0).css("animation-delay","0s");
												eleAnimate.eq(1).css("animation-delay",".2s");
												eleAnimate.eq(2).css("animation-delay",".4s");
												eleAnimate.eq(3).css("animation-delay",".6s");
												eleAnimate.eq(4).css("animation-delay",".8s");
												eleAnimate.eq(5).css("animation-delay","1.2s");
												eleAnimate.eq(6).css("animation-delay","1.4s");
												eleAnimate.eq(7).css("animation-delay","1.6s");
												eleAnimate.eq(8).css("animation-delay","1.8s");											
											}											
										if(index ==6){
												eleAnimate.eq(0).css("animation-delay","0s");
												eleAnimate.eq(1).css("animation-delay",".2s");
												eleAnimate.eq(2).css("animation-delay",".4s");
												eleAnimate.eq(3).css("animation-delay",".6s");
												eleAnimate.eq(4).css("animation-delay",".8s");
												eleAnimate.eq(5).css("animation-delay","1.2s");
												eleAnimate.eq(6).css("animation-delay","1.4s");										
											}												
										if(index ==7){
												eleAnimate.eq(0).css("animation-delay","0s");
												eleAnimate.eq(1).css("animation-delay",".2s");
												eleAnimate.eq(2).css("animation-delay",".4s");
												eleAnimate.eq(3).css("animation-delay",".6s");
												eleAnimate.eq(4).css("animation-delay",".8s");
												eleAnimate.eq(5).css("animation-delay","1.2s");
												eleAnimate.eq(6).css("animation-delay","1.4s");										
											}												
										if(index ==8){
												eleAnimate.eq(0).css("animation-delay","0s");
												eleAnimate.eq(1).css("animation-delay",".2s");
												eleAnimate.eq(2).css("animation-delay",".4s");
												eleAnimate.eq(3).css("animation-delay",".6s");
												eleAnimate.eq(4).css("animation-delay",".8s");								
										}												
											
										if(index ==9){
												eleAnimate.eq(0).css("animation-delay","0s");
												eleAnimate.eq(1).css("animation-delay",".2s");
												eleAnimate.eq(2).css("animation-delay",".4s");
												eleAnimate.eq(3).css("animation-delay",".6s");
												eleAnimate.eq(4).css("animation-delay",".8s");
												eleAnimate.eq(5).css("animation-delay","1s");
												eleAnimate.eq(6).css("animation-delay","1.2s");
											}	
											
										if(index ==10){
												eleAnimate.eq(0).css("animation-delay","0s");
												eleAnimate.eq(1).css("animation-delay",".2s");

											}	
										if(index ==11){
												eleAnimate.eq(0).css("animation-delay","0s");
												eleAnimate.eq(1).css("animation-delay",".2s");
												eleAnimate.eq(2).css("animation-delay",".4s");
												eleAnimate.eq(3).css("animation-delay",".6s");
												eleAnimate.eq(4).css("animation-delay",".8s");
												eleAnimate.eq(5).css("animation-delay",".2s");
												eleAnimate.eq(6).css("animation-delay",".4s");
												eleAnimate.eq(7).css("animation-delay",".6s");
												eleAnimate.eq(8).css("animation-delay",".8s");	
												eleAnimate.eq(9).css("animation-delay","1s");											
											}	
										if(index ==12){
												eleAnimate.eq(0).css("animation-delay","0s");
												eleAnimate.eq(1).css("animation-delay",".2s");
												eleAnimate.eq(2).css("animation-delay",".4s");
												eleAnimate.eq(3).css("animation-delay",".6s");
												eleAnimate.eq(4).css("animation-delay",".8s");

											}	
																																	
										if(index ==13){
												eleAnimate.eq(0).css("animation-delay","0s");
												eleAnimate.eq(1).css("animation-delay",".2s");
												eleAnimate.eq(2).css("animation-delay",".4s");
												eleAnimate.eq(3).css("animation-delay",".6s");
												eleAnimate.eq(4).css("animation-delay",".8s");
                                                eleAnimate.eq(5).css("animation-delay","1s");
											}																																																										
									}
							}
					},{
							offset:"90%"
						});
			});
		};
	reAnimate(); 	
