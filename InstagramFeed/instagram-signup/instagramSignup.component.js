(function () {
    "use strict";

    var componentController =
    [ //injections go here
    function ViewController() {
        var vm = this;
        
        

    }];

    angular
        .module("instagramViewModule")
        .component("instagramSignup", {
            controller: componentController,
            controllerAs: "vm",
            templateUrl: "InstagramFeed/instagram-signup/instagramSignup.template.html",
            
        });

})();