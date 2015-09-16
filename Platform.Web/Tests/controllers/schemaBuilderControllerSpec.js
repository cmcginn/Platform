describe('SchemaBuilderController controller', function () {

    beforeEach(module('platform'));
    beforeEach(inject(function (_$httpBackend_) {
        _$httpBackend_.expectGET("/i18n/en.json").respond({});
        _$httpBackend_.expectGET("/Home/Index").respond({});

    }));
    beforeEach(inject(function ($q, $http, dataservice) {
        spyOn(dataservice, 'getSchemaModelAsync').and.callFake(function () {
            var deferred = $q.defer();
            deferred.resolve(jQuery.extend(true, {}, mockData.schemaModel));
            return deferred.promise;
        });
    }));

    it('save should populate scope validation errors when data type empty', inject(function ($rootScope, $q, $controller) {
        var $scope = $rootScope.$new();
        spyOn($scope, '$emit').and.callThrough();
        var controller = $controller('SchemaBuilderController', { $scope: $scope });
        $rootScope.$apply();
        $scope.init('x');
        $rootScope.$digest();
        $scope.save();
        expect($scope.validationErrors.length).toBeGreaterThan(0);
    }));

    it('init should raise onSchemaModelReceived', inject(function ($rootScope, $q, $controller, $httpBackend) {
        var $scope = $rootScope.$new();
        spyOn($scope, '$emit').and.callThrough();
        var controller = $controller('SchemaBuilderController', { $scope: $scope });
        $rootScope.$apply();
        $scope.init('x');
        $rootScope.$digest();
        expect($scope.$emit).toHaveBeenCalledWith('onSchemaModelReceived', { schemaModel: mockData.schemaModel });

    }));
    it('save should populate scope validation errors when column name empty', inject(function ($rootScope, $q, $controller) {
        var $scope = $rootScope.$new();
        spyOn($scope, '$emit').and.callThrough();
        var controller = $controller('SchemaBuilderController', { $scope: $scope });
        $rootScope.$apply();
        $scope.init('x');
        $rootScope.$digest();
        for (var i = 0; i < $scope.schemaModel.columns.length; i++) {
            $scope.schemaModel.columns[i].dataType = 'Int';
        }
        $scope.schemaModel.columns[0].name = '';
        $scope.save();
        expect($scope.validationErrors.length).toBeGreaterThan(0);
    }));


    it('save should populate scope validation errors when column display name empty', inject(function ($rootScope, $q, $controller) {
        var $scope = $rootScope.$new();
        spyOn($scope, '$emit').and.callThrough();
        var controller = $controller('SchemaBuilderController', { $scope: $scope });
        $rootScope.$apply();
        $scope.init('x');
        $rootScope.$digest();
        for (var i = 0; i < $scope.schemaModel.columns.length; i++) {
            expect($scope.schemaModel.columns[i].name.length).toBeGreaterThan(0);
            $scope.schemaModel.columns[i].dataType = 'Int';
        }
        $scope.schemaModel.columns[0].displayName = '';
        $scope.save();
        expect($scope.validationErrors.length).toBeGreaterThan(0);


    }));

    it('save should populate scope validation errors when duplicate column name', inject(function ($rootScope, $q, $controller) {
        var $scope = $rootScope.$new();
        spyOn($scope, '$emit').and.callThrough();
        var controller = $controller('SchemaBuilderController', { $scope: $scope });
        $rootScope.$apply();
        $scope.init('x');
        $rootScope.$digest();
        for (var i = 0; i < $scope.schemaModel.columns.length; i++) {
            expect($scope.schemaModel.columns[i].name.length).toBeGreaterThan(0);
            $scope.schemaModel.columns[i].dataType = 'Int';
        }
        $scope.schemaModel.columns[0].name = 'Col1';
        $scope.schemaModel.columns[1].name = 'Col1';
        $scope.save();
        expect($scope.validationErrors.length).toBeGreaterThan(0);


    }));
    it('save should populate scope validation errors when duplicate display name', inject(function ($rootScope, $q, $controller) {
        var $scope = $rootScope.$new();
        spyOn($scope, '$emit').and.callThrough();
        var controller = $controller('SchemaBuilderController', { $scope: $scope });
        $rootScope.$apply();
        $scope.init('x');
        $rootScope.$digest();
        for (var i = 0; i < $scope.schemaModel.columns.length; i++) {
            expect($scope.schemaModel.columns[i].name.length).toBeGreaterThan(0);
            $scope.schemaModel.columns[i].dataType = 'Int';
        }
        $scope.schemaModel.columns[0].displayName = 'Col1';
        $scope.schemaModel.columns[1].displayName = 'Col1';
        $scope.save();
        expect($scope.validationErrors.length).toBeGreaterThan(0);


    }));
});