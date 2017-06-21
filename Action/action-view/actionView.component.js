(function () {
    "use strict";

    var componentController =
    ["$scope", "$log", "$exceptionHandler",
    function ViewController($scope, $log, $exceptionHandler) {
        var vm = this;
        vm.pageClass = 'rotateandfall';
        //$log information or message in the console
        vm.$log = $log;
        vm.message = 'Hello World!';
        
        //use ng-hide
        vm.isHide = false;
        vm.hide = function () {
            vm.isHide = true;
        }

        //type an email and console.log runs
        vm.email = "";

        $scope.$watch("vm.email", function (newValue, oldValue) {
            if (vm.email.length > 0) {
                console.log("User has started writing into email");
            }
        });

        //directive 
        vm.naomi = { name: 'Naomi', address: '1600 Amphitheatre' };
        vm.igor = { name: 'Igor', address: '123 Somewhere' };


        //one time binding vs normal binding
        var counter = 0;
        var names = ['Igor', 'Misko', 'Chirayu', 'Lucas'];
        /*
         * expose the event object to the scope
         */
        vm.clickMe = function (clickEvent) {
            vm.name = names[counter % names.length];
            counter++;
        };

    }];

    angular
        .module("actionViewModule")
        .component("actionView", {
            controller: componentController,
            controllerAs: "vm",
            templateUrl: "Action/action-view/actionView.template.html"
        });
})();