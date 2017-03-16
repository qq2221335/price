
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
}); 