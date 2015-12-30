// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var Mushroom = angular.module('starter', ['ionic', 'uiGmapgoogle-maps', 'ngCordova'])
Mushroom.run(function ($ionicPlatform, $rootScope) {
    $rootScope._ = _; //Making underscore js available through out
    $rootScope.menu = {};

    $ionicPlatform.ready(function () {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
});

Mushroom.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider, uiGmapGoogleMapApiProvider) {
    $ionicConfigProvider.backButton.text('Back').icon('ion-chevron-left'); //Back button with icon for both iOS and android
    $ionicConfigProvider.navBar.alignTitle("center"); //Align title center for all android OS
    //Default template
    $urlRouterProvider.otherwise('/home');

    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyDFberVyWaVDCxFLaRxYLxUuSd4uPb_I2s',
        v: '3.17',
        libraries: 'weather,geometry,visualization',
        language: 'en',
        sensor: 'false'
    })

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'views/home/index.html',
            controller: 'HomeController'
        })
        .state('contacts_list', {
            url: "/contacts_list/:id",
            templateUrl: "views/contacts/index.html",
            controller: "contactsController",
            resolve: {
                id: function ($stateParams) {
                    return $stateParams.id;
                }
            }
        })
        .state('general_list', {
            url: "/general_list/:id",
            templateUrl: "views/general_list/index.html",
            controller: "generalListController",
            resolve: {
                id: function ($stateParams) {
                    return $stateParams.id;
                }
            }
        })
        .state('general_detail', {
            url: '/general_list/:id/:category_name',
            templateUrl: 'views/general_list/detail.html',
            controller: 'generalListDetailController',
            resolve: {
                id: function ($stateParams) {
                    return $stateParams.id;
                },
                category_name: function ($stateParams) {
                    return $stateParams.category_name;
                }
            }
        })
        .state('map', {
            url: "/map/:address",
            templateUrl: "views/map/index.html",
            controller: "MapController",
            resolve: {
                address: function ($stateParams, mapService) {
                    return mapService.location($stateParams.address);
                }
            }
        })

});