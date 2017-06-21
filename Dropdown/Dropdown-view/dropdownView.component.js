(function () {
    "use strict";

    var componentController =
    [ "$log",
    function ViewController($log) {
        var vm = this;

        vm.items = [
            'The first choice!',
            'And another choice for you.',
            'but wait! A third!'
        ];

        vm.status = {
            isopen: false
        };

        vm.toggled = function (open) {
            $log.log('Dropdown is now: ', open);
        };

        vm.toggleDropdown = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();
            vm.status.isopen = !vm.status.isopen;
        };

        vm.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));

    }];

    angular
        .module("dropdownViewModule")
        .component("dropdownView", {
            controller: componentController,
            controllerAs: "vm",
            templateUrl: "Dropdown/Dropdown-view/dropdownView.template.html",
            
        });

})();