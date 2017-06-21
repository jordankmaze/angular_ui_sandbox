(function () {
    "use strict";

    var componentController =
    [ '$window', '$location', '$rootScope', '$auth',
    function ViewController($window, $location, $rootScope, $auth) {
        var vm = this;
        
        vm.instagramLogin = function () {
            $auth.authenticate('instagram')
              .then(function (response) {
                  $window.localStorage.currentUser = JSON.stringify(response.data.user);
                  $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
              })
              .catch(function (response) {
                  console.log(response.data);
              });
        };

        vm.emailLogin = function () {
            $auth.login({ email: vm.email, password: vm.password })
              .then(function (response) {
                  $window.localStorage.currentUser = JSON.stringify(response.data.user);
                  $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
              })
              .catch(function (response) {
                  vm.errorMessage = {};
                  angular.forEach(response.data.message, function (message, field) {
                      vm.loginForm[field].$setValidity('server', false);
                      vm.errorMessage[field] = response.data.message[field];
                  });
              });
        };        

    }];

    angular
        .module("instagramViewModule")
        .component("instagramLogin", {
            controller: componentController,
            controllerAs: "vm",
            templateUrl: "InstagramFeed/instagram-login/instagramLogin.template.html",
            
        });

})();