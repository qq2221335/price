
$(document).ready(function() {
	//搜索框
	$("#seek_choice").hover(function(){
		$("#choice_con").show();
	},
	function(){
		$("#choice_con").hide();
	});
	$("#choice_con li a").click(function(){
		$("#seek_choice a samp").html($(this).html());
		$("#choice_con").hide();
	});
	//导航分类
	$("#nav_all").click(function(){
		if($(this).find("a").attr("name")!="home"){
			$("#nav_all_one").slideToggle(0);
		}
		
	});
	
	$("#nav_all_one li").hover(function(){
		$(this).find(".nav_class").show();
	},
	function(){
		$(this).find(".nav_class").hide();
	});
	
		var total=$("#solid ul").children().length;
		var now=0;
		//banner效果
		$("#solid ul li").eq(0).fadeIn(400);
		$("#btt span").eq(0).css("background","#ffffff");
		$("#solid .solid0").fadeIn(50);
		$("#solid ul li,#btt span").mouseenter(function(){
			window.clearInterval(int);
		});
		$("#btt span").mouseenter(function(){
			if($(this).index()!=now){
				now=$(this).index()-1;
				clock();
			}
		});
		var int=self.setInterval(clock,3000)
		$("#solid ul li,#solid span").mouseleave(function(){
			int=self.setInterval(clock,3000)
		});
		$("#btt span").eq(1).css("margin-left","52px");
		$("#btt span").eq(2).css("margin-left","90px");
		function clock(){
			var cname
			if(now==total -1){
				now=0; 
			}else{
				now=now+1; 
			}
			for(i=0;i<total;i++){
				cname="#solid .solid" + i;
				$("#solid ul li").eq(i).css("display","none");
				$("#btt span").eq(i).css("background","#3d3d3d");
				$(cname).css("display","none");
			} 
			cname="#solid .solid" + now;
			$("#solid ul li").eq(now).fadeIn(400);
			$("#btt span").eq(now).css("background","#ffffff");
			$(cname).css("display","block");
		}
	//scene_service.html场景服务点击事件
	$(".sceneChoice a").click(function () {
        $(".sceneChoice a").removeClass("active");
        $(this).addClass("active");
        $(".sceneBox").hide().eq($(this).index()).show();
    });
    
    
    //index返回顶部定位
	$(window).scroll(function (){
		var st = $(this).scrollTop();
		if(st > 720){
			$(".po_right").css('top',st - 720 + 100);
		};
		if(st < 720){
			$(".po_right").css('top',52);
		}
	});
   	
}); 
	
	

	

