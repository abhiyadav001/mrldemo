Mushroom.controller('generalListDetailController', function ($scope, $http, id, category_name) {
    $http.get('json/general_list.json')
        .success(function (response) {
            $scope.category_name = category_name;
            $scope.general_list_detail = response[id][category_name].list;
        })
        .error(function (error) {
            alert('Response', JSON.stringify(error));
        });
});