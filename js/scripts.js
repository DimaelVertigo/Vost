$(document).ready(function() {


	// Parallax
	// $('.parallax-layer').parallax({
	// 	mouseport: $(".jumbotron"),
	// });

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

			if (validation.validateForm(form) === false) {
				e.preventDefault();
				return false;
			}

			submitBtn.attr('disabled', 'disabled');

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

	// Scroll animation
	$(window).on('scroll', function() {
		var scrTop = $(window).scrollTop();
		console.log(scrTop);
		if (scrTop >= 500) {
			$('.content-block-1').addClass('fadeInUp');
		}
		if (scrTop >= 1300) {
			$('.title--content-block-2').addClass('fadeInUp');
			$('.content-block-2__logo').addClass('fadeInUp');
		}
		if (scrTop >= 1500) {
			$('.content-block-3').addClass('fadeInUp');
		}
		if (scrTop >= 1700) {
			$('.content-block-4').addClass('fadeInUp');
		}
		if (scrTop >= 2300) {
			$('.content-block-5__picture').addClass('fadeInLeft');
			$('.content-block-5__lists').addClass('fadeInRight');
		}
		if (scrTop >= 3100) {
			$('.title--content-block-6').addClass('fadeInUp');
		}
		if (scrTop >= 3300) {
			$('.content-block-7').addClass('fadeInUp');
		}
	});

	// Map 1
	$(function() {
		var map;
		image = new google.maps.MarkerImage("img/map-point1@2x.png", null, null, null, new google.maps.Size(24, 44));

		function initMap() {
			var myLatLng = new google.maps.LatLng(41.717213, 44.788041);
			var mapOptions = {
				center: myLatLng,
				zoom: 17,
				scrollwheel: false,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};
			map = new google.maps.Map(document.getElementById('map'), mapOptions);
			var marker = new google.maps.Marker({
				position: myLatLng,
				icon: image
			});
			var infowindow = new google.maps.InfoWindow({
				content: 'point1'
			});
			marker.setMap(map);
			infowindow.open(map, marker);
			google.maps.event.addListener(marker, 'click', (function() {
				infowindow.open(map, marker);
			}));
		}
		if (document.getElementById('map')) {
			google.maps.event.addDomListener(window, 'load', initMap);
			google.maps.event.addDomListener(window, 'resize', function() {
				var center = map.getCenter();
				google.maps.event.trigger(map, 'resize');
				map.setCenter(center);
			});
		}
	});
	// Footer map
	$(function() {
		var footerMap;
		image = new google.maps.MarkerImage("img/map-point1@2x.png", null, null, null, new google.maps.Size(24, 44));

		function initMap() {
			var myLatLng = new google.maps.LatLng(41.717213, 44.788041);
			var mapOptions = {
				center: myLatLng,
				zoom: 17,
				scrollwheel: false,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};
			footerMap = new google.maps.Map(document.getElementById('footer__map'), mapOptions);
			var marker = new google.maps.Marker({
				position: myLatLng,
				icon: image
			});
			var infowindow = new google.maps.InfoWindow({
				content: 'point1'
			});
			marker.setMap(footerMap);
			infowindow.open(footerMap, marker);
			google.maps.event.addListener(marker, 'click', (function() {
				infowindow.open(footerMap, marker);
			}));
		}
		if (document.getElementById('footer__map')) {
			google.maps.event.addDomListener(window, 'load', initMap);
			google.maps.event.addDomListener(window, 'resize', function() {
				var center = footerMap.getCenter();
				google.maps.event.trigger(footerMap, 'resize');
				footerMap.setCenter(center);
			});
		}
	});
});