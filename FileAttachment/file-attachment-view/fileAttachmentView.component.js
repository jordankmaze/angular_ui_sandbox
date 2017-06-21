(function () {
    "use strict";

    var componentController =
    ["$scope",
    function ViewController($scope) {
        var vm = this;
    }];

    angular
        .module("fileAttachmentViewModule")
        .component("fileAttachmentView", {
            controller: componentController,
            controllerAs: "vm",
            templateUrl: "FileAttachment/file-attachment-view/fileAttachmentView.template.html"
        });
})();