var map;

function initialize() {
    directionsDisplay = new google.maps.DirectionsRenderer();
    var manchester = new google.maps.LatLng(53.4808, 2.2426);
    var mapOptions = {
        zoom: 7,
        center: manchester
    };
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    directionsDisplay.setMap(map);
    calcRoute();
}

function calcRoute() {
    var start = prompt('starting point');
    var end = prompt('destination');
    var request = {
        origin: start,
        destination: end,
        travelMode: google.maps.TravelMode.DRIVING
    };
    directionsService.route(request, function (response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            var result = document.getElementById('result');
            result.innerHTML= "";
            for (var i =0; i < response.routes[0].legs[0].steps.length; i++){
                result.innerHTML+=response.routes[0].legs[0].steps[i].instructions+"<br>"
            }
            console.log(response)
            directionsDisplay.setDirections(response);
        }
    });
}

google.maps.event.addDomListener(window, 'load', initialize);