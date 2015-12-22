angular.module('ScoutIOApp')
  .controller('ResultsController', ResultsController);

function ResultsController($state, $http, NgMap, Search, $rootScope) {
  var results = this;
  var bounds;

  results.place;
  results.search = {};
  results.search.placeName;
  results.search.keywords;
  results.search.setting = {};
  results.search.setting.indoor = false;
  results.search.setting.outdoor = false;
  results.search.radius = null;
  results.search.startDate = '';
  results.search.endDate = '';
  results.search.tag = 'all keywords';
  results.showHide = 'Show Advanced Search';
  results.advancedSearchOpen = false;

  results.name = "Scout IQ";
  results.map = null;
  results.mapStyle = [{"featureType":"landscape","stylers":[{"hue":"#FFBB00"},{"saturation":43.400000000000006},{"lightness":37.599999999999994},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#FFC200"},{"saturation":-61.8},{"lightness":45.599999999999994},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":51.19999999999999},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":52},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#0078FF"},{"saturation":-13.200000000000003},{"lightness":2.4000000000000057},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#00FF6A"},{"saturation":-1.0989010989011234},{"lightness":11.200000000000017},{"gamma":1}]}];

  results.$http = $http;
  results.$state = $state;
  $rootScope.photos = [];

  results.getByTagOnly = function (query) {
    results.$state.go('results');
    results.search.keywords = query;  //TODO: not setting form element text for some reason

    Search.getByTagOnly(query)
      .then(function (response) {
        $rootScope.photos = response.data.photos.photo;

        setMarkers();
      })
  };

  results.advancedSearch = function () {
    if (results.place) {
      results.search.geoCoordinates = results.place.geometry;
      results.search.lat = results.search.geoCoordinates.location.lat();
      results.search.lon = results.search.geoCoordinates.location.lng();
    } else {
      results.search.geoCoordinates = null;
    }

    if (results.search.radius === 0){
      results.search.radius = null;
    }

    Search.getAdvanced(results.search)
      .then(function (response) {
        if (response.data.photos) {
          $rootScope.photos = response.data.photos.photo;
        } else {
          response.data.photos.photo = [];
        }
        setMarkers();
      })
  };

  var setMarkers = function () {
    NgMap.getMap({id: 'resultsmap'}).then(function (map) {
      results.map = map;

      if (results.map.markers) {
        for (var i = 0; i < results.map.markers.length; i++) {
          results.map.markers[i].setMap(null);
        }
      }

      results.map.markers = [];
      bounds = new google.maps.LatLngBounds();

      for (var i = 0; i < $rootScope.photos.length; i++) {
        var myLatlng = new google.maps.LatLng($rootScope.photos[i].latitude, $rootScope.photos[i].longitude);
        var marker = new google.maps.Marker({position: myLatlng});

        marker.addListener('click', results.toggleBounce);
        marker.setMap(results.map);
        results.map.markers.push(marker);

        if ($rootScope.photos[i].latitude > -68) {
          bounds.extend(myLatlng);
        }
      }

      results.map.setCenter(bounds.getCenter());
      results.map.fitBounds(bounds);
    });
  };

  results.toggleBounce = function () {
    var marker = this;

    marker.setAnimation(google.maps.Animation.BOUNCE);
    setTimeout(function () {
      marker.setAnimation(null);
    }, 2100);

    $('#photos').animate({scrollTop:$('#photos')}, 'fast');
  };

  results.showPhotoPin = function (evt, photoId) {
    results.photo = $rootScope.photos[id];
    results.map.showInfoWindow('photoInfo', this);
  };

  results.placeChanged = function () {
    results.place = this.getPlace();

    if (results.place && !results.search.radius) {
      results.search.radius = 15;
    }
  };

  results.toggleAdvancedSearchDiv = function (divStatus) {
    results.advancedSearchOpen = !results.advancedSearchOpen;

    if(!divStatus) {
      results.showHide = 'Hide Advanced Search';
    } else {
      results.showHide = 'Show Advanced Search';
    }
  };
}
