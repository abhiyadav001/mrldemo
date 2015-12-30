Mushroom.controller('generalListController', function ($scope, $http, id, utilityService) {
    $http.get('json/general_list.json')
        .success(function (response) {
            $scope.general_list_id = id;
            $scope.general_list = response[$scope.general_list_id];
            $scope.general_list_headings = _.allKeys($scope.general_list);
        })
        .error(function (error) {
            alert('Response', JSON.stringify(error));
        });
});