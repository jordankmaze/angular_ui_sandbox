(function () {
    "use strict";

    var componentController =
    ["$sce",
    function ViewController($sce) {
        var vm = this;

        vm.dynamicTooltip = 'Hello, World!';
        vm.dynamicTooltipText = 'dynamic';
        vm.htmlTooltip = $sce.trustAsHtml('I\'ve been made <b>bold</b>!');
        vm.placement = {
            options: [
              'top',
              'top-left',
              'top-right',
              'bottom',
              'bottom-left',
              'bottom-right',
              'left',
              'left-top',
              'left-bottom',
              'right',
              'right-top',
              'right-bottom'
            ],
            selected: 'top'
        };
    }];

    angular
        .module("tooltipViewModule")
        .component("tooltipView", {
            controller: componentController,
            controllerAs: "vm",
            templateUrl: "Tooltip/tooltip-view/tooltipView.template.html",
            
        });

})();