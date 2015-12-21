
angular.module('ScoutIOApp')
  .controller('PhotoDialogCtrl', ['$mdDialog', '$scope', '$rootScope', '$state', function ($mdDialog, $rootScope, $scope, $state, NgMap) {
    $scope.showDialog = function (e, photo) {
      $scope.photo = photo;
      $scope.photo.datetaken = new Date($scope.photo.datetaken).toLocaleString();
      $scope.photoDialogFlexWidth = "80";
      $rootScope.directions = {};
      $rootScope.directions.place = '';
      $rootScope.directions.origin = '';

      //NgMap.getMap({id: 'photomap'}).then(function (map) {
      //  debebugger(map);
      //});

      function getOrigin()
      {
        $rootScope.origin = photoDialogService.getOrigin;
      }

      if ($scope.photo.height_m > $scope.photo.width_m) {
        $scope.photoDialogFlexWidth = "60";
      }

      $scope.placeChanged = function () {
        var place = this.getPlace();
        $rootScope.directions.place = place;
        $scope.origin = place.geometry.location.lat() + "," + place.geometry.location.lng();

        var elevator = new google.maps.ElevationService;
      };

      $mdDialog.show({
        targetEvent: e,
        locals: {
          photo: $scope.photo,
          photoDialogFlexWidth: $scope.photoDialogFlexWidth,
          placeChanged: $scope.placeChanged,
          origin: $rootScope.origin
        },
        controller: DialogController,
        controllerAs: 'dialog',
        bindToController: true,
        templateUrl: 'components/modal/photoDialog.html',
        parent: angular.element(document.body),
        clickOutsideToClose: true
      });
    };

    function DialogController($scope, $rootScope, $mdDialog, NgMap) {
      $scope.hide = function () {
        $mdDialog.hide();
      };

      $scope.cancel = function () {
        $mdDialog.cancel();
      };

      $scope.answer = function (answer) {
        $mdDialog.hide(answer);
      };

      NgMap.getMap({id: 'photomap'}).then(function (map) {
        $scope.map = map;

        $scope.map.setMapTypeId(google.maps.MapTypeId.TERRAIN);

        //some hackery to make the map appear in this dialog and then recenter it as
        // resizing pushed the center down and to the right for some reason
        var center = $scope.map.getCenter();
        google.maps.event.trigger($scope.map, 'resize');
        $scope.map.setCenter(center);

        //var myLatlng = new google.maps.LatLng(photo.latitude, photo.longitude);
        //var marker = new google.maps.Marker({position: myLatlng, animation: "DROP"});
        //marker.setMap($scope.map);
      });
    }
  }]);
