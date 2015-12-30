Mushroom.controller('HomeController', function ($scope, $http) {
    $http.get('json/menu.json')
        .success(function (response) {
            $scope.menu = response.menu;
        })
        .error(function (error) {
            alert('Response', JSON.stringify(error));
        });
});