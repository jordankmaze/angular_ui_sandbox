(function () {
    "use strict";

    var componentController =
    [ //injections go here
    function ViewController() {
        var vm = this;
        vm.pageClass = 'slideinfromtheright';
        vm.oneAtATime = true;

        vm.groups = [
          {
              title: 'Dynamic Group Header - 1',
              content: 'Dynamic Group Body - 1'
          },
          {
              title: 'Dynamic Group Header - 2',
              content: 'Dynamic Group Body - 2'
          }
        ];

        vm.items = ['Item 1', 'Item 2', 'Item 3'];

        vm.addItem = function () {
            var newItemNo = vm.items.length + 1;
            vm.items.push('Item ' + newItemNo);
        };

        vm.status = {
            isCustomHeaderOpen: false,
            isFirstOpen: true,
            isFirstDisabled: false
        };
    }];

    angular
        .module("accordionViewModule")
        .component("accordionView", {
            controller: componentController,
            controllerAs: "vm",
            templateUrl: "Accordion/Accordion-view/accordionView.template.html",
            
        });

})();