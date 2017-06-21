(function () {
    'use strict';

    var componentController =
    ["$scope",
    function ViewController($scope) {
        var vm = this;

        vm.myInterval = 5000;
        vm.noWrapSlides = false;
        vm.active = 0;
        vm.slides = [];
        var currIndex = 0;

        vm.$onInit = function () {

        };

        vm.addSlide = function () {
            var newWidth = 600 + vm.slides.length + 1;
            vm.slides.push({
                image: 'https://unsplash.it/' + newWidth + '/300?random',
                //image: ['Assets/img/anton-repponen-109642.jpg', 'Assets/img/indranil-roy-57688.jpg', 'Assets/img/kelsey-johnsen-727.jpg', 'Assets/img/ryan-wilson-6626.jpg'][vm.slides.length % 4],
                text: ['Nice image', 'Awesome photograph', 'That is so cool', 'I love that'][vm.slides.length % 4],
                id: currIndex++
            });
        };

        vm.randomize = function () {
            var indexes = generateIndexesArray();
            assignNewIndexesToSlides(indexes);
        };

        for (var i = 0; i < 4; i++) {
            vm.addSlide();
        }

        // Randomize logic below

        function assignNewIndexesToSlides(indexes) {
            for (var i = 0, l = vm.slides.length; i < l; i++) {
                vm.slides[i].id = indexes.pop();
            }
        }

        function generateIndexesArray() {
            var indexes = [];
            for (var i = 0; i < currIndex; ++i) {
                indexes[i] = i;
            }
            return shuffle(indexes);
        }

        function shuffle(array) {
            var tmp, current, top = array.length;

            if (top) {
                while (--top) {
                    current = Math.floor(Math.random() * (top + 1));
                    tmp = array[current];
                    array[current] = array[top];
                    array[top] = tmp;
                }
            }

            return array;
        }
    }];

    angular
        .module("carouselViewModule")
        .component("carouselView", {
            controller: componentController,
            controllerAs: "vm",
            templateUrl: "Carousel/carousel-view/carouselView.template.html"
          
        });
})();
