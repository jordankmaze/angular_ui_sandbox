(function () {
    "use strict";
    var COMPONENT_NAME = "fileAttachment";
    var componentController = [
       "$scope", "fileAttachmentService",
        function fileAttachmentController($scope, fileAttachmentService) {
            var vm = this;
            $scope.$watch("file", function (newfile, oldfile) {
                if (angular.equals(newfile, oldfile)) {
                    return;
                }

                fileAttachmentService.upload(newfile).then(function (res) {
                    // DO SOMETHING WITH THE RESULT!
                    console.log("result", res);
                });
            });
            $scope.$on("fileProgress", function (e, progress) {
                vm.progress = progress.loaded / progress.total;
            });
        }
    ];
    angular
        .module("app")
        .component(COMPONENT_NAME, {
            controller: componentController,
            bindings: {
                fileattachment: "="
            },
            controllerAs: "vm",
            templateUrl: "Shared/directives/fileAttachment/fileAttachment.template.html"

        });
})();