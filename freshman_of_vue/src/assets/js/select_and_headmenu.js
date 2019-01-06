$(document).ready(function(){

	$("#h-logo").mousedown(function() {
		event.stopPropagation();
		event.preventDefault();
		if ($("#head-move").hasClass('rotate')) {
			$("#head-move").removeClass('rotate');
			$(".user-menu").slideUp(100);
		}
	});
	$(".values").mousedown(function() {
		event.stopPropagation();
		event.preventDefault();
		var value = $(this).attr('value');

		$(this).parents('.select').find('.select-text').attr("value", value);
		$(this).parent().hide();
		$(this).parent().prevUntil().removeClass('rotate');
	});

	$(".select-options").mousedown(function() {
		event.stopPropagation();
		event.preventDefault();
		if (!$(this).find(".select-move").hasClass('rotate')) {
			// $(".select-move").removeClass('rotate');
			// $('.select-content').slideUp(100);
			
			$(this).find('.select-content').slideDown(100);
			$(this).find(".select-move").addClass('rotate');
		}
	});

	$(document).mousedown(function(){
		$(".select-move").removeClass('rotate');      
		$('.select-content').slideUp(100);
		$("#head-move").removeClass('rotate');
		$(".user-menu").slideUp(100);
	});
});