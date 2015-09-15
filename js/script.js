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

function initialize() {
  var mapProp = {
      center:myCenter,
      zoom: 14,
      draggable: false,
      scrollwheel: false,
      mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  
  map=new google.maps.Map(document.getElementById("map-canvas"),mapProp);
  marker.setMap(map);
    
  google.maps.event.addListener(marker, 'click', function() {
      
    infowindow.setContent(contentString);
    infowindow.open(map, marker);
    
  }); 
};
google.maps.event.addDomListener(window, 'load', initialize);

google.maps.event.addDomListener(window, "resize", resizingMap());

$('#myMapModal').on('show.bs.modal', function() {
   //Must wait until the render of the modal appear, thats why we use the resizeMap and NOT resizingMap!! ;-)
   resizeMap();
})

function resizeMap() {
   if(typeof map =="undefined") return;
   setTimeout( function(){resizingMap();} , 400);
}

function resizingMap() {
   if(typeof map =="undefined") return;
   var center = map.getCenter();
   google.maps.event.trigger(map, "resize");
   map.setCenter(center); 
}