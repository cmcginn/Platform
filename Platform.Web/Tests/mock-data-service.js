myApp.service('dataservice', [
    '$http', '$q', function($http, $q) {
        var apiBaseRoute = '';
        var result = {
            getSchemaModelAsync: function(id) {
                return $q(function(resolve, reject) {
                    resolve(jQuery.extend(true, {}, mockData.schemaModel));
                });
            }
        };
        return result;
    }
]);
