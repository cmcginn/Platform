var myApp = angular.module('platform', ['angle']);
myApp.run(["$log", function ($log) {
    $log.log('Starting platform');
}]);
