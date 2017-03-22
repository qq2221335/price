
$(document).ready(function() {
	//tab切换
	$(".right_con .tab_nav span").on('click',function(){
		var index = $(this).index();
		$(".food").hide().eq(index).show();
		$(this).addClass('isclick').siblings().removeClass('isclick');
	});
	//简介截取字段
});