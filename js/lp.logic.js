/*
 *	Techno Media Ltd
 *	Ivaykin T.S. 12/2014
 */

(function() {
	$(document).ready(function() {
		function setupSelectorMask() {
			$('.parameter-selector.phase-selector .selection-mask').removeClass('phase-one');
			$('.parameter-selector.phase-selector .selection-mask').removeClass('phase-three');
			$('.parameter-selector.phase-selector .selection-mask').addClass(parameters.phase);
			$('.parameter-selector.fuel-selector .selection-mask').removeClass('gas');
			$('.parameter-selector.fuel-selector .selection-mask').removeClass('diesel');
			$('.parameter-selector.fuel-selector .selection-mask').addClass(parameters.fuel);
			
			$('.parameter-selector .phase, .parameter-selector .fuel').removeClass('unselected-for-time');
		}	
			
		var parameters = {
			phase: 'phase-one',
			fuel: 'gas'
		};
		function setComparisonParameters() {			
			parameters.phase = ($('.parameter-selector .phase:nth-of-type(1)')
				.attr('selected')?'phase-one':'phase-three');
			parameters.fuel = ($('.parameter-selector .fuel:nth-of-type(1)')
				.attr('selected')?'gas':'diesel');
			
			setupSelectorMask();
			
			$('.parameter-selector article').hide();
			$('.parameter-selector article.'+parameters.phase).show();
			$('.parameter-selector article.'+parameters.fuel).show();
			
			$('.generators-cards-with-comparison').fadeOut('fast');
			$('.generators-cards-with-comparison.'+parameters.phase+'.'+parameters.fuel).fadeIn('fast');			
		}
		
		$('.parameter-selector .phase')
			.hover(function() {
					$('.parameter-selector.phase-selector .selection-mask').removeClass('phase-one');
					$('.parameter-selector.phase-selector .selection-mask').removeClass('phase-three');
					
					if($(this).hasClass('phase-one')) {
						$('.parameter-selector.phase-selector .selection-mask').addClass('phase-one');
						$('.parameter-selector .phase.phase-three').addClass('unselected-for-time');
					} else if($(this).hasClass('phase-three')) {
						$('.parameter-selector.phase-selector .selection-mask').addClass('phase-three');
						$('.parameter-selector .phase.phase-one').addClass('unselected-for-time');
					}
				},
			setupSelectorMask			
		);
		$('.parameter-selector .fuel')
			.hover(function() {
					$('.parameter-selector.fuel-selector .selection-mask').removeClass('gas');
					$('.parameter-selector.fuel-selector .selection-mask').removeClass('diesel');
					
					if($(this).hasClass('gas')) {
						$('.parameter-selector.fuel-selector .selection-mask').addClass('gas');
						$('.parameter-selector .fuel.diesel').addClass('unselected-for-time');
					} else if($(this).hasClass('diesel')) {
						$('.parameter-selector.fuel-selector .selection-mask').addClass('diesel');
						$('.parameter-selector .fuel.gas').addClass('unselected-for-time');
					}
				},
			setupSelectorMask			
		);
		
		

		$('.parameter-selector .phase:nth-of-type(1), .parameter-selector .fuel:nth-of-type(1)')
			.attr({selected: true});
		setComparisonParameters();
			
		$('.parameter-selector button').click(function() {
			if($(this).hasClass('phase')) {
				$('.parameter-selector .phase').attr({selected: false});
			} else if($(this).hasClass('fuel')) {
				$('.parameter-selector .fuel').attr({selected: false});
			}
			
			$(this).attr({selected: true});
			
			setComparisonParameters();
		});
		
		(function animateAncorScrolls() {
			$('a').click(function(){
			    $('html, body').animate({
			        scrollTop: $( $(this).attr('href') ).offset().top
			    }, 500);
			    return false;
			});	
		})();
		
	});
}) ();
