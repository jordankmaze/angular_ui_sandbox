(function() {
    "use strict";

    function fileattachment () {
        function link(scope, element, attrs) {
            element.bind("change", function (changeEvent) {
                scope.fileattachment = changeEvent.target.files[0];
                var reader = new FileReader();
                reader.onload = function (loadEvent) {
                    scope.$apply(function () {
                        scope.filepreview = loadEvent.target.result;
                    });
                }

                reader.readAsDataURL(scope.fileattachment);
            });
        }

        var directive = {
            scope: {
                fileattachment: "=",
                filepreview: "="
            },
            link: link
           
        };

        return directive;
    }

    angular
        .module("app")
        .directive("fileattachment", fileattachment);
})();