(function () {
    "use strict";

    var componentController =
    [ //injections go here
    function ViewController() {
        var vm = this;
        vm.pageClass = 'slideinfromthebottom';
        vm.alerts = [
            { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
            { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
        ];

        vm.addAlert = function () {
            vm.alerts.push({ msg: 'Another alert!' });
        };

        vm.closeAlert = function (index) {
            vm.alerts.splice(index, 1);
        };
    }];

    angular
        .module("alertViewModule")
        .component("alertView", {
            controller: componentController,
            controllerAs: "vm",
            templateUrl: "Alert/Alert-view/alertView.template.html",
            
        });

})();