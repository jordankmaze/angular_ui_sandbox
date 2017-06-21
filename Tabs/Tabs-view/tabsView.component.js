(function () {
    "use strict";

    var componentController =
    ["$scope", "$window", 
    function ViewController($scope, $window) {
        var vm = this;

        vm.tabs = [
            { title: 'Dynamic Title 1', content: 'Dynamic content 1' },
            { title: 'Dynamic Title 2', content: 'Dynamic content 2', disabled: true }
        ];

        vm.alertMe = function () {
            setTimeout(function () {
                $window.alert('You\'ve selected the alert tab!');
            });
        };

        vm.model = {
            name: 'Tabs'
        };
    }];

    angular
        .module("tabsViewModule")
        .component("tabsView", {
            controller: componentController,
            controllerAs: "vm",
            templateUrl: "Tabs/tabs-view/tabsView.template.html",
            
        });

})();