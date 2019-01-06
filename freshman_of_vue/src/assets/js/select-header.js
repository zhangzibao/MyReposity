// $(document).ready(function(){
	var li=$('.ul_li'),move=$('.move');
	var width,left;
	li.hover(function(){		
		width=$(this).width()-40,
		left=$(this).offset().left-$('#nav_ul').offset().left+20+'px' ;
		move.css({ "left" : left , "width" : width+"px"});
	},
	function(){
		move.css({ "width" :"0"});
	});
	$("#h-logo").mousedown(function() {
		event.stopPropagation();//阻止mousedown 事件冒泡（注意只阻止了mousedown事件）
    	event.preventDefault();
		if ($("#head-move").hasClass('rotate')) {
			$("#head-move").removeClass('rotate');
			$(".user-menu").slideUp(100);
		} else {
			$(".user-menu").slideDown(100);
			$("#head-move").addClass('rotate');
		}
	});

	$(".select-move").mousedown(function() {
		event.stopPropagation();//阻止mousedown 事件冒泡（注意只阻止了mousedown事件）
    	event.preventDefault();
		if (!$(this).hasClass('rotate')) {
			$(".select-move").removeClass('rotate');
			$(this).addClass('rotate');
			$('.select-content').slideUp(100);
			$(this).next().slideDown(100);
		} else {
			$(this).next().slideUp(100);
			$(this).removeClass('rotate');
		}
	});
	
	$(".values").mousedown(function() {
		event.stopPropagation();//阻止mousedown 事件冒泡（注意只阻止了mousedown事件）
    	event.preventDefault();
		var value = $(this).attr('value');
		// $(this).parents('.select').find('.select-text').attr("placeholder", value);
		$(this).parents('.select').find('.select-text').attr("value", value);
		$(this).parent().hide();
		$(this).parent().prevUntil().removeClass('rotate');
	});
	

	$(document).mousedown(function(){
		$(".select-move").removeClass('rotate');			
		$('.select-content').slideUp(100);
		$("#head-move").removeClass('rotate');
		$(".user-menu").slideUp(100);
	});
// });