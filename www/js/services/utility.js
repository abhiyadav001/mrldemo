Mushroom.factory('utilityService', function () {
    return{
        openLink: function (url) {
            window.open(url, "_blank")
        },
        errorHandler: function (message) {
            alert(message);
        }
    }
})