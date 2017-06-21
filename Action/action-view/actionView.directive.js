(function() {
    'use strict';

    angular
        .module('app')
        .directive('actionViewDirective', ['$window', 'actionViewDirective', function ($window, actionViewDirective) {
            // Usage:
            //     <action-view-directive></action-view-directive>
            // Creates:
            // 
            function link(scope, element, attrs, controller, transcludeFn) {
                //scope: is an AngularJS scope object.
                //element: is the jqLite-wrapped element that this directive matches.
                //attrs: is a hash object with key-value pairs of normalized attribute names and their corresponding attribute values.
                //controller: is the directive's required controller instance(s) or its own controller (if any). The exact value depends on the directive's require property.
                //transcludeFn: is a transclude linking function pre-bound to the correct transclusion scope.
            }

            var directive = {
                link: link,
                restrict: 'E', //C: class, A: attribute, M: comment
                scope: {
                    //this refers to the attribute named customer, '<action-view-directive customer="vm.naomi">' and the 'Name: {{customer.name}}' located in the template below.
                    customer: '='
                },
                templateUrl: 'Action/action-view/my-action-view-iso.template.html'
            }

            return directive;
        }]);
})();