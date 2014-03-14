$(document).ready( function() {

	$(".shape").mousemove(function(e) { 
		var tooltipSelector = $(this).attr('data-tooltip-content');
		var $tooltip = $(tooltipSelector);

		$tooltip.css({
			'top': e.pageY - 20,
			'left': e.pageX + 10
		}).show();
    });

    // Remove tooltip when mouseout
    $(".shape").mouseout(function() { 
        $('.tooltip').hide();
    });
});