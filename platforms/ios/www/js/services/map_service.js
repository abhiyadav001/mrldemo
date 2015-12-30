Mushroom.factory('mapService', function ($http, $q) {
    return {
        location: function (address) {
            var deffered_q = $q.defer();
            $http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=AIzaSyCChS5HyKN7Cm5rtjHmczUv_-9J9GNCRtM')
                .then(function (resp) {
                    if (resp.data.status == "ZERO_RESULTS") {
                        SimpleTools.errorHandler('Sorry, Unable to locate.');
                        deffered_q.reject(resp);
                    } else {
                        deffered_q.resolve(resp.data.results[0].geometry.location);
                    }
                }, function (err) {
                    SimpleTools.errorHandler('Sorry, Unable to locate.');
                    deffered_q.reject(resp);
                });
            return deffered_q.promise;
        }
    }
})
