(function () {
    "use strict";

    var componentController =
    ["$scope", "$uibModal", "$log", "$document",
    function ViewController($scope, $uibModal, $log, $document) {
        var vm = this;

        vm.totalItems = 64;
        vm.currentPage = 4;
    }];

    angular
        .module("pagerViewModule")
        .component("pagerView", {
            controller: componentController,
            controllerAs: "vm",
            templateUrl: "Pager/pager-view/pagerView.template.html",
            
        });

})();