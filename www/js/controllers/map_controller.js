Mushroom.controller('MapController', function ($scope, $ionicSideMenuDelegate, address) {

    $ionicSideMenuDelegate.canDragContent(false);
    //Change zoom value for zoom setting. min:1 - max:16
    $scope.map = {center: {latitude: address.lat, longitude: address.lng }, zoom: 16 };
    console.log("MAP ",$scope.map)
    $scope.options = {scrollwheel: true};
    $scope.markers = [
        {
            id: 11, //It could be anything unique
            latitude: $scope.map.center.latitude,
            longitude: $scope.map.center.longitude,
            icon: $scope.markericon
        }
    ];

});
