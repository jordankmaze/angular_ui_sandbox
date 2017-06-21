(function () {
    "use strict";

    var COMPONENT_NAME = "procedureSearchResults";

    var componentController =
    ["$state", "$window", "$scope", "Lamb", "virtualLookupFactory", "virtualUserFacilityFactory", "procedureSearchResultsService", "procedureAddEditService",
    function procedureSearchResultsController($state, $window, $scope, Lamb, virtualLookupFactory, virtualUserFacilityFactory, procedureSearchResultsService, procedureAddEditService) {
        var bus = new Lamb("procedureSearchResults", $scope);
        
        var vm = this;
        vm.showNavColumn = true;
        vm.errorMessage = null;
        vm.items = [];
        vm.selected = "None";
        vm.menuOptions = [];
        vm.showResults = showResults;
        vm.showGrid = false;
        vm.items = [];

        this.$onInit = function () {
            vm.selected = "None";
            vm.menuOptions = [
                ["View", function ($itemScope, $event, modelValue, text, $li) {
                    vm.selected = $itemScope.procedure;
                    var myPdfUrl = "./assets/img/LOTOtestForm.pdf";     // When published, this looks for the file under wwwroot/assets/img/
                    $window.open(myPdfUrl);
                }],
                ["Edit", function ($itemScope, $event, modelValue, text, $li) {
                    vm.selected = $itemScope.procedure;
                    var procedureId = vm.selected.procedureId;
                    //var url = "/loto/" + $state.href("edit");       // need to add the web app name to the URL otherwise it'll only give the #!/edit/8 instead of loto/#!/edit/8
                    var url = "/" + $state.href("edit");
                    $window.open(url + procedureId, "Edit");
                   // $window.open("/#!/edit/" + procedureId, "Edit");
                }],
                ["Delete", function ($itemScope, $event, modelValue, text, $li) {
                    vm.items.splice($itemScope.$index, 1);
                }],
                ["Mark Inspected", function ($itemScope, $event, modelValue, text, $li) {
                    vm.selected = $itemScope.procedure;
                }]
            ];
            // This feels like it belongs in a directive since it modifies the DOM.
            //vm.userFacility = virtualUserFacilityFactory.getByCurrentUserAndSelectedFacilityQuery().then( function(userFacilityData) {
            bus.subscribe("procedure.search.1", function (criteria) {
                procedureSearchResultsService.getProceduresBySearchParametersQuery(criteria).then(function(results) {
                    vm.showResults(results);
                });
            });
           
        }

         function showResults(data) {
            vm.showGrid = true;
            vm.items = data;
        }
       
    }];

    angular
        .module("gp.ttn.loto.procedure.search")
        .component(COMPONENT_NAME, {
            controller: componentController,
            controllerAs: "vm",
            templateUrl: "procedureSearch/procedure-search-results/procedureSearchResults.template.html",
            bindings: {
                renderResults: "&"
            }
        });

})();