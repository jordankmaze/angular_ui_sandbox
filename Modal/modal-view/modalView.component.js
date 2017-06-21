(function () {
    "use strict";

    var componentController =
    ["$scope", "$uibModal", "$log", "$document",
    function ViewController($scope, $uibModal, $log, $document) {
        var vm = this;

        vm.ok = function () {
            vm.close({ $value: vm.selected.item });
        };

        vm.cancel = function () {
            vm.dismiss({ $value: 'cancel' });
        };

        vm.items = [ 'item1', 'item2', 'item3' ];
       
        vm.$onInit = function () {
            vm.items = vm.resolve.items;
            vm.selected = {
                item: vm.items[0]
            };
        };

        vm.animationsEnabled = true;

        vm.open = function (size, parentSelector) {
            var parentElem = parentSelector ? 
              angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
            var modalInstance = $uibModal.open({
                animation: vm.animationsEnabled,
                component: "modalWindow",
                size: size,
                controllerAs: 'vm',
                appendTo: parentElem,
                resolve: {
                    items: function () {
                        return vm.items;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                vm.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };

        vm.openComponentModal = function () {
            var modalInstance = $uibModal.open({
                animation: vm.animationsEnabled,
                component: "modalWindow",
                resolve: {
                    items: function () {
                        return vm.items;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                vm.selected = selectedItem;
            }, function () {
                $log.info('modal-component dismissed at: ' + new Date());
            });
        };

        vm.openMultipleModals = function () {
            $uibModal.open({
                animation: vm.animationsEnabled,
                //ariaLabelledBy: 'modal-title-bottom',
                //ariaDescribedBy: 'modal-body-bottom',
                component: "modalDoubleWindow",
                size: 'sm',
                resolve: {
                    names: function () {
                        return vm.name = 'bottom';  
                    }
                }
                //controller: function($scope) {
                    //vm.name = 'bottom';  
                //}
            });

            $uibModal.open({
                animation: vm.animationsEnabled,
                //ariaLabelledBy: 'modal-title-top',
                //ariaDescribedBy: 'modal-body-top',
                component: "modalDoubleWindow",
                size: 'sm',
                resolve: {
                    names: function () {
                        return vm.name = 'top';
                    }
                }
                //controller: function($scope) {
                //    vm.name = 'top';  
                //}
            });
        };

        vm.toggleAnimation = function () {
            vm.animationsEnabled = !vm.animationsEnabled;
        };
    }];

    angular
        .module("modalViewModule")
        .component("modalView", {
            controller: componentController,
            controllerAs: "vm",
            templateUrl: "Modal/modal-view/modalView.template.html",
            
        });

})();