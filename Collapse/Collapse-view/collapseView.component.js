(function () {
    "use strict";

    var componentController =
    [ //injectors go here
    function ViewController() {
        var vm = this;

        vm.isNavCollapsed = true;
        vm.isCollapsed = false;
        vm.isCollapsedHorizontal = false;

    }];

    angular
        .module("collapseViewModule")
        .component("collapseView", {
            controller: componentController,
            controllerAs: "vm",
            templateUrl: "Collapse/Collapse-view/collapseView.template.html",
            
        });

})();