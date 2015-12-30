Mushroom.controller('contactsController', function ($scope, $http, id, utilityService) {
    $http.get('json/contact_list.json')
        .success(function (response) {
            $scope.grouped_contacts = response[id];
        })
        .error(function (error) {
            alert('Response', JSON.stringify(error));
        });

    $scope.toggleGroup = function (group) {
        if ($scope.isGroupShown(group)) {
            $scope.shownGroup = null;
        } else {
            $scope.shownGroup = group;
        }
    };

    $scope.isGroupShown = function (group) {
        return $scope.shownGroup === group;
    };

    $scope.openLink = function (url) {
        utilityService.openLink(url);
    }
});