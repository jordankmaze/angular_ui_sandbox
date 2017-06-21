(function () {
    "use strict";

    var componentController =
    ["$scope",
    function ViewController($scope) {
        var vm = this;
    }];

    angular
        .module("homeViewModule")
        .component("homeView", {
            controller: componentController,
            controllerAs: "vm",
            templateUrl: "Home/home-view/homeView.template.html"

        });

})();