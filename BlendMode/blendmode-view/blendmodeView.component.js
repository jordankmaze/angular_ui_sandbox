(function () {
    "use strict";

    var componentController =
    [ //injections go here
    function ViewController() {
        var vm = this;
        
        

    }];

    angular
        .module("blendmodeViewModule")
        .component("blendmodeView", {
            controller: componentController,
            controllerAs: "vm",
            templateUrl: "BlendMode/blendmode-view/blendmodeView.template.html",
            
        });

})();