(function () {
    "use strict";

    var componentController =
    [ //injections go here
    function ViewController() {
        var vm = this;
        
        

    }];

    angular
        .module("instagramViewModule")
        .component("instagramPhoto", {
            controller: componentController,
            controllerAs: "vm",
            templateUrl: "InstagramFeed/instagram-photo/instagramPhoto.template.html",
            
        });

})();