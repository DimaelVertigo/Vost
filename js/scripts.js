// Parallax
$('.parallax-layer').parallax({
	mouseport: $(".jumbotron"),
});

// Carousel
$('.plans_slider').cycle({
	fx: 'fade',
	pager: '#nav',
	timeout: 4000,
	next: '.p_next',
	prev: '.p_prev',
});

$('.promo-slider').cycle({
	fx: 'fade',
	timeout: 3000,
	pager: '#content-block-9__nav'
});

// Anchors
$("a.header-navigation__link").click(function(e) { 
	var elementClick = $(this).attr("href");
	var destination = $(elementClick).offset().top;
	$('html, body').animate({
		scrollTop: destination 
	}, 1000);
	e.preventDefault();
});

// FORM VALIDATION

var form = $('form');

var validation = {
	init: function() {
		this.listeners();
	},
	listeners: function() {
		form.on('submit', validation.submitForm);
		form.on('keydown', 'input, textarea', validation.removeError);
	},
	submitForm: function(e) {

		var form = $(this),
			submitBtn = form.find('button[type="submit"]');

		if ( validation.validateForm(form) === false ) {
			e.preventDefault();
			return false;
		}

		submitBtn.attr('disabled', 'disabled');

		// var str = form.serialize();
		
		//  $.ajax({
		// 	 url: 'send/string',
		// 	 type: 'POST',
		// 	 data: str
		//  })
		//  .done(function(msg) {
		// 	 if(msg === "Ok"){
		// 		var result = $('.msg-email-send');
		// 		result.text('Ваше сообщение отправлено.')
		// 		 .fadeIn(300)
		// 		 .delay(2000)
		// 		 .fadeOut(1000);
		// 		form.find('input, textarea').val('').removeClass('has-success');
		// 	 }else{
		// 		 form.after(msg);
		// 	 }
		//  })
		//  .always(function() {
		// 	 submitBtn.removeAttr('disabled');
		//  });
	},
	validateForm: function(form) {
		var inputs = form.find('input:not(.novalid), textarea:not(.novalid)'),
			valid = true;

		$.each(inputs, function(idx, val) {
			var input = $(val),
				isValue = input.val();
			
			if (isValue.length === 0) {
				input.parent().addClass('has-error').removeClass('has-success');
				valid = false;
			} else {
				input.parent().addClass('has-success').removeClass('has-error');
			}
		});
		return valid;
	},
	removeError: function() {
		$(this).removeClass('has-error');
	}
};
validation.init();

$(window).on('scroll', function() {
	var scrTop = $(window).scrollTop();
	console.log(scrTop);
	if (scrTop >= 500) {
		console.log('work');
		$('.content-block-1-list').addClass('content-block-1-list--animate');
	}
});