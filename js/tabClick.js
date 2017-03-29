$(document).ready(function() {
	//tab切换
	$(".right_con .tab_nav span").on('click',function(){
		var index = $(this).index();
		$(".food").hide().eq(index).show();
		$(this).addClass('isclick').siblings().removeClass('isclick');
	});
	//简介截取字段
});
$(function() {
	var tabs = function(el) {
		this.el = el || {};
		var links = this.el.find('.link');
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown);	
	}
	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next(),
			bInfo = "",
			isRoot=$this.hasClass('rootlink');
		$next.slideToggle(function(){
			$(this).find('.submenu').css('display','none').parent().removeClass('open');
		});
		$this.parent().toggleClass('open');
		if (!e.data.multiple&&isRoot) {
			$this.parent().siblings().find('.submenu').slideUp().parent().removeClass('open');
		};
	}	
	var accordion = new Accordion($('#accordion'), false);
});