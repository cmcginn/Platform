myApp.controller('SchemaBuilderController', ['$scope', 'dataservice', function ($scope, dataservice) {

    //private
    function validateSchemaModel() {
        $scope.validationErrors = [];
        var colNames = [];
        var colDisplayNames = [];
        for (var i = 0; i < $scope.schemaModel.columns.length; i++) {
            var colDef = $scope.schemaModel.columns[i];
            var name = colDef.displayName != null ? colDef.displayName : sprintf('Column at Index %1$s', i);
            var valid = true;
            var errors = [];
            if (!colDef.dataType) {
                valid = false;
                errors.push('Datatype is required.');
            }
            if (!colDef.name) {
                valid = false;
                errors.push('Column Name is required.');
            }
            if (!colDef.displayName) {
                valid = false;
                errors.push('Column Display Name is required.');
            }
            if (colNames.indexOf(colDef.name) >= 0) {
                valid = false;
                errors.push('Duplicate Column Name');
            }
            colNames.push(colDef.name);
            if (colDisplayNames.indexOf(colDef.displayName) >= 0) {
                valid = false;
                errors.push('Duplicate Column Display Name');
            }
            colDisplayNames.push(colDef.displayName);
            if (!valid)
                $scope.validationErrors.push({ column: name, errors: errors });
        }
    }

    //properties
    $scope.columnDataTypes = [
        { id: 'Boolean', key: 'Boolean' },
        { id: 'Double', key: 'Decimal' },
        { id: 'Int', key: 'Integer' },
        { id: 'String', key: 'String' }
    ];
    $scope.events = {
        onSchemaModelReceived: 'onSchemaModelReceived'
    };
    $scope.schemaModel = null;
    $scope.validationErrors = [];
    //scope functions
    $scope.init = function (id) {
        var getSchema = dataservice.getSchemaModelAsync(id);
        getSchema.then(function (data) {
            $scope.schemaModel = data;
            $scope.sampleRows = _.take(data.rows, 5);
            $scope.$emit($scope.events.onSchemaModelReceived, { schemaModel: $scope.schemaModel });
        })
    };
    $scope.save = function () {
        validateSchemaModel();
    }
}]);