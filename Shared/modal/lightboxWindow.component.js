(function () {
    "use strict";

    var componentController =
    ["$scope", "$uibModal", "$state",
    function modalWindowController($scope, $uibModal, $state) {
        var vm = this;

        vm.$onInit = function () {
            vm.bigslide = vm.resolve.items.image;
        };

    }];

    angular
        .module("lightboxViewModule")
        .component("lightboxWindow", {
            controller: componentController,
            controllerAs: "vm",
            templateUrl: "Shared/modal/lightboxWindow.template.html",
            bindings: {
                resolve: "<",
                close: "&",
                dismiss: "&"
            }
        });

})();