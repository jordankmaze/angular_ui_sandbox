(function () {
    "use strict";

    var COMPONENT_NAME = "procedureSearchCriteria";

    var componentController =
    ["$state", "$window", "$scope", "Lamb",
        "virtualUserFacilityFactory", "virtualLookupFactory", "procedureSearchCriteriaService","ProcedureSearchCriteriaModel",
    function procedureSearchCriteriaController($state, $window, $scope, Lamb,
        virtualUserFacilityFactory, virtualLookupFactory, procedureSearchCriteriaService, ProcedureSearchCriteriaModel) {
        //dont use $rootScope, use $scope
        var bus = new Lamb(COMPONENT_NAME, $scope);
        var vm = this;
        vm.userFacility = null;
        vm.title = "Procedure Search";
        vm.advancedSearch = true;
        vm.procedureTypeDataSource = null;
        vm.procedureTypeOptions = {};
        vm.searchObject = {};
        vm.selected = null;
        vm.showGrid = false;
        vm.errorMessage = null;

        this.$onInit = function () {
            vm.searchObject = procedureSearchCriteriaService.getProcedureSearchCriteria() || new ProcedureSearchCriteriaModel(vm.searchObject);

            virtualLookupFactory.getProcedureTypes().then(function(data) {
                vm.procedureTypes = data;
                virtualLookupFactory.getProcedureWorktypes().then(function (data) {
                    vm.workTypes = data;
                });
            });

            vm.userFacility = virtualUserFacilityFactory.getByCurrentUserAndSelectedFacilityQuery();
        }

        vm.handleSearch = function () {

            vm.errorMessage = "";
            if (angular.isNumber(vm.searchObject.procedureId)) {
                vm.searchObject.procedureId = parseInt(vm.searchObject.procedureId);
            }

            procedureSearchCriteriaService.setProcedureSearchCriteria(vm.searchObject, vm.userFacility);
        }
    }];

    angular
        .module("gp.ttn.loto.procedure.search")
        .component(COMPONENT_NAME, {
            controller: componentController,
            controllerAs: "vm",
            templateUrl: "procedureSearch/procedure-search-criteria/procedureSearchCriteria.template.html"
        });

})();