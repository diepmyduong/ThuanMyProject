var main = function (){
	$('#my-navbar').waypoint({
	  handler: function(direction) {
	  	if(direction == 'down'){
	  		$('#my-navbar').addClass('navbar-fixed-top');
	  	}else{
	  		$('#my-navbar').removeClass('navbar-fixed-top');
	  	}
	  }
	});

	// Carousel set time 
	$("#product-items .carousel").each(function(index, el) {
		var time = Math.floor(Math.random()*10000);
		$(el).carousel({
        	interval: time //set the initial interval
    	});
	});

	$(".product-thumbnail .carousel").on('slid.bs.carousel', function () {
		var time = Math.floor(Math.random()*10000);
		$(this).data("bs.carousel").options.interval =  time;
		// $(this).attr('data-interval', time.toString());
    });

    // News Carousel Control
    $('#news .carousel-control.left').click(function() {
	  $('#carousel-news').carousel('prev');
	});

	$('#news .carousel-control.right').click(function() {
	  $('#carousel-news').carousel('next');
	});
};

jQuery(document).ready(main);

var map;        
            var myCenter=new google.maps.LatLng(10.748459, 106.665306);
var marker=new google.maps.Marker({
    position:myCenter
});

