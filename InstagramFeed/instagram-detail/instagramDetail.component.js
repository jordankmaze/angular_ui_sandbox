(function () {
    "use strict";

    var componentController =
    [ //injections go here
    function ViewController() {
        var vm = this;
        
        

    }];

    angular
        .module("instagramViewModule")
        .component("instagramDetail", {
            controller: componentController,
            controllerAs: "vm",
            templateUrl: "InstagramFeed/instagram-detail/instagramDetail.template.html",
            
        });

})();