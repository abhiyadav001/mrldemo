Mushroom.directive('circularMenu', function (circularMenuService) {
    return {
        restrict: 'E',
        scope: false,
        templateUrl: 'views/menus/circular_menu.html',
        link : function(scope){
            scope.links = circularMenuService.create(scope.menu);
        }
    }
});