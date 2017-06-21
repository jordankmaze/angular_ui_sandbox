(function () {
    "use strict";

    var componentController =
    [ '$window', '$rootScope', '$auth',
    function ViewController($window, $rootScope, $auth) {
        var vm = this;
        
        vm.isAuthenticated = function () {
            return $auth.isAuthenticated();
        };

        vm.linkInstagram = function () {
            $auth.link('instagram')
            .then(function (response) {
                $window.localStorage.currentUser = JSON.stringify(response.data.user);
                $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
            });
        };

    }];

    angular
        .module("instagramViewModule")
        .component("instagramView", {
            controller: componentController,
            controllerAs: "vm",
            templateUrl: "InstagramFeed/instagram-view/instagramView.template.html",
            
        });

})();