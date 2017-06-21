(function () {
    "use strict";

    var componentController =
    ["$scope", "$sce",
    function ViewController($scope, $sce) {
        var vm = this;

        vm.dynamicPopover = {
            content: 'Hello, World!',
            templateUrl: 'myPopoverTemplate.html',
            title: 'Title'
        };

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

        vm.htmlPopover = $sce.trustAsHtml('<b style="color: red">I can</b> have <div class="label label-success">HTML</div> content');
    }];

    angular
        .module("popoverViewModule")
        .component("popoverView", {
            controller: componentController,
            controllerAs: "vm",
            templateUrl: "Popover/popover-view/popoverView.template.html",
            
        });

})();