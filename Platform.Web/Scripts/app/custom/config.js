myApp.config([
    '$stateProvider', '$locationProvider', '$urlRouterProvider', 'CustomRouteHelpersProvider',
    function ($stateProvider, $locationProvider, $urlRouterProvider, helper) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('platform', {
                //url: '/',
                abstract: true,
                controller: 'AppController',
                resolve: helper.resolveFor('icons')
            })
            .state('platform.home', {
                url: '/',
                title: 'Home',
                templateUrl: helper.basepath('Home/Index')
                //resolve: helper.resolveFor('isteven-multi-select', 'whirl', 'ngDialog')
            }).state('platform.uikit', {
                url: '/UIKit',
                title: 'UIKit',
                templateUrl: helper.basepath('Test/UIKit')

            }).state('page', {
                url: '/page',
                templateUrl: helper.basepath('App/Page'),
                resolve: helper.resolveFor('modernizr', 'icons'),
                controller: [
                    "$rootScope", function($rootScope) {
                        $rootScope.app.layout.isBoxed = false;
                    }
                ]
            }).state('page.register', {
                url: '/Register',
                title: "Register",
                templateUrl: helper.basepath('Account/Register')
            }).state('page.login', {
                url: '/Login',
                title: "Login",
                templateUrl: helper.basepath('Account/Login')
            });

    }
]);