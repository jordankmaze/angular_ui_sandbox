(function () {
    "use strict";

    var componentController =
    ["$scope", "$uibModal", "$state",
    function modalWindowController($scope, $uibModal, $state) {
        var vm = this;

        vm.$onInit = function () {
            vm.items = vm.resolve.items;
            vm.selected = {
                item: vm.items[0]
            };
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
        .component("modalWindow", {
            controller: componentController,
            controllerAs: "vm",
            templateUrl: "Shared/modal/modalWindow.template.html",
            bindings: {
                resolve: "<",
                close: "&",
                dismiss: "&"
            }
        });

})();