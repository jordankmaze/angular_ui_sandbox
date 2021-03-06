﻿(function () {
    "use strict";

    var componentController =
    ["$scope", "$sce",
    function ViewController($scope, $sce) {
        var vm = this;

        vm.max = 200;

        vm.random = function () {
            var value = Math.floor(Math.random() * 100 + 1);
            var type;

            if (value < 25) {
                type = 'success';
            } else if (value < 50) {
                type = 'info';
            } else if (value < 75) {
                type = 'warning';
            } else {
                type = 'danger';
            }

            vm.showWarning = type === 'danger' || type === 'warning';

            vm.dynamic = value;
            vm.type = type;
        };

        vm.random();

        vm.randomStacked = function () {
            vm.stacked = [];
            var types = ['success', 'info', 'warning', 'danger'];

            for (var i = 0, n = Math.floor(Math.random() * 4 + 1) ; i < n; i++) {
                var index = Math.floor(Math.random() * 4);
                vm.stacked.push({
                    value: Math.floor(Math.random() * 30 + 1),
                    type: types[index]
                });
            }
        };

        vm.randomStacked();
    }];

    angular
        .module("progressbarViewModule")
        .component("progressbarView", {
            controller: componentController,
            controllerAs: "vm",
            templateUrl: "Progressbar/progressbar-view/progressbarView.template.html",
            
        });

})();