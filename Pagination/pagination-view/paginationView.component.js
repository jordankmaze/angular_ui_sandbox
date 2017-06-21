(function () {
    "use strict";

    var componentController =
    ["$scope", "$uibModal", "$log", "$document",
    function ViewController($scope, $uibModal, $log, $document) {
        var vm = this;

        vm.totalItems = 64;
        vm.currentPage = 4;

        vm.setPage = function (pageNo) {
            vm.currentPage = pageNo;
        };

        vm.pageChanged = function () {
            $log.log('Page changed to: ' + vm.currentPage);
        };

        vm.maxSize = 5;
        vm.bigTotalItems = 175;
        vm.bigCurrentPage = 1;
    }];

    angular
        .module("paginationViewModule")
        .component("paginationView", {
            controller: componentController,
            controllerAs: "vm",
            templateUrl: "Pagination/pagination-view/paginationView.template.html",
            
        });

})();