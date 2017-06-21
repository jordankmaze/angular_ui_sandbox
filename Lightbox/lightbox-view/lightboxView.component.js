(function () {
    "use strict";

    var componentController =
    ["$scope", "$uibModal", "$log", "$document",
    function ViewController($scope, $uibModal, $log, $document) {
        var vm = this;
        var currIndex = 0;

        vm.slides = [
            {
                "id": 1,
                "image": "Assets/img/anton-repponen-109642.jpg",
            },
            {
                "id": 2,
                "image": "Assets/img/indranil-roy-57688.jpg",
            },
            {
                "id": 3,
                "image": "Assets/img/kelsey-johnsen-727.jpg",
            },
            {
                "id": 4,
                "image": "Assets/img/ryan-wilson-6626.jpg",
            }
        ];


        //vm.slides = {
        //    //image: 'https://unsplash.it/' + newWidth + '/300?random',
        //    image: 'Assets/img/ryan-wilson-6626.jpg',
        //    text: 'Nice image',
        //    //id: currIndex++
        //};

        vm.open = function (slide) {
            var modalInstance = $uibModal.open({
                animation: vm.animationsEnabled,
                component: "lightboxWindow",
                controllerAs: 'vm',
                resolve: {
                    items: function () {
                        return slide;
                    }
                }
            });
        };
    }];

    angular
        .module("lightboxViewModule")
        .component("lightboxView", {
            controller: componentController,
            controllerAs: "vm",
            templateUrl: "Lightbox/lightbox-view/lightboxView.template.html",
            
        });

})();