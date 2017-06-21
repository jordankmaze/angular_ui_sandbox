(function () {
    "use strict";

    var componentController =
    [//injections go here
    function ViewController() {
        var vm = this;

        vm.dates = [
          {
              "index": 0,
              "picture": "Have a picnic in Laurelhurst Park",
              "price": 0
          },
          {
              "index": 1,
              "picture": "See a movie outside",
              "price": 0
          },
          {
              "index": 2,
              "picture": "Get cozy at Living Room Theater",
              "price": 5
          },
          {
              "index": 3,
              "picture": "See free art at the Portland Art Museum",
              "price": 5
          },
          {
              "index": 4,
              "picture": "Play mini golf at Oaks Park",
              "price": 6
          }
        ]

        vm.number = function () {
            var num = Math.floor(Math.random() * 5) + 0;
            vm.rand = vm.dates[num].picture;
        };



    }];

    angular
        .module("randomDateViewModule")
        .component("randomDateView", {
            controller: componentController,
            controllerAs: "vm",
            templateUrl: "RandomDate/randomdate-view/randomDateView.template.html",
            
        });

})();