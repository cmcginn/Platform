﻿var myApp = angular.module('platform', ['angle', 'sprintf', 'ngDialog']);
myApp.run(["$log", function ($log) {
    $log.log('Starting platform');
}]);
