(function () {
    "use strict";

    var componentController =
    [//injections go here
    function ViewController() {
        var vm = this;

        vm.image = "Assets/img/ryan-wilson-6626.jpg";

        vm.makeBigger = function () {
            this.toggleClass("hoverimgbigger");
        }

    }];

    angular
        .module("imageHoverViewModule")
        .component("imageHoverView", {
            controller: componentController,
            controllerAs: "vm",
            templateUrl: "ImageHover/imagehover-view/imageHoverView.template.html",
            
        });

})();