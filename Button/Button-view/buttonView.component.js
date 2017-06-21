(function () {
    "use strict";

    var componentController =
    [ "$scope",
    function ViewController($scope) {
        var vm = this;

        vm.singleModel = 1;

        vm.radioModel = 'Middle';

        vm.checkModel = {
            left: false,
            middle: true,
            right: false
        };

        vm.checkResults = [];

        $scope.$watchCollection('vm.checkModel', function () {
            vm.checkResults = [];
            angular.forEach(vm.checkModel, function (value, key) {
                if (value) {
                    vm.checkResults.push(key);
                }
            });
        });
    }];

    angular
        .module("buttonViewModule")
        .component("buttonView", {
            controller: componentController,
            controllerAs: "vm",
            templateUrl: "Button/Button-view/buttonView.template.html",
            
        });

})();