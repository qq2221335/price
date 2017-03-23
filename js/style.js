
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
	//scene_service.html场景服务点击事件
	$(".sceneChoice a").click(function () {
        $(".sceneChoice a").removeClass("active");
        $(this).addClass("active");
        $(".sceneBox").hide().eq($(this).index()).show();
    });
}); 