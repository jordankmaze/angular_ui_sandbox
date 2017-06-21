(function () {
    "use strict";

    var componentController =
    ["$scope", "$uibModal", "$state",
    function modalDoubleWindowController($scope, $uibModal, $state) {
        var vm = this;

        vm.$onInit = function () {
            vm.name = vm.resolve.names;
        };

        vm.ok = function () {
            vm.cancel();
        };

        vm.cancel = function () {
            vm.dismiss({ $value: "cancel" });
        };

    }];

    angular
        .module("modalViewModule")
        .component("modalDoubleWindow", {
            controller: componentController,
            controllerAs: "vm",
            templateUrl: "Shared/modal/modalDoubleWindow.template.html",
            bindings: {
                resolve: "<",
                close: "&",
                dismiss: "&"
            }
        });

})();