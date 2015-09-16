var myApp = angular.module('platform', ['angle','sprintf']);
myApp.run(["$log", function ($log) {
    $log.log('Starting platform');
}]);
