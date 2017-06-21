(function () {
    "use strict";

    var componentController =
    ["$uibModal",
    function ViewController($uibModal) {
        var vm = this;

        vm.rate = 3;
        vm.max = 5;

        vm.totalItems = 64;

        vm.slides = [
            {
                "id": 1,
                "image": "Assets/img/anton-repponen-109642.jpg",
            },
            {
                "id": 2,
                "image": "Assets/img/kelsey-johnsen-727.jpg",
            },
            {
                "id": 3,
                "image": "Assets/img/kelsey-johnsen-727.jpg",
            },
            {
                "id": 4,
                "image": "Assets/img/ryan-wilson-6626.jpg",
            },
            {
                "id": 5,
                "image": "Assets/img/indranil-roy-57688.jpg",
            },
            {
                "id": 6,
                "image": "Assets/img/indranil-roy-57688.jpg",
            },
            {
                "id": 7,
                "image": "Assets/img/anton-repponen-109642.jpg",
            },
            {
                "id": 8,
                "image": "Assets/img/ryan-wilson-6626.jpg",
            },
            {
                "id": 9,
                "image": "Assets/img/anton-repponen-109642.jpg",
            },
            {
                "id": 10,
                "image": "Assets/img/ryan-wilson-6626.jpg",
            },
            {
                "id": 11,
                "image": "Assets/img/kelsey-johnsen-727.jpg",
            },
            {
                "id": 12,
                "image": "Assets/img/indranil-roy-57688.jpg",
            }
        ];

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
        .module("shoppingViewModule")
        .component("shoppingView", {
            controller: componentController,
            controllerAs: "vm",
            templateUrl: "Shopping/Shopping-view/shoppingView.template.html",
            
        });

})();