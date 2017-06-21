(function () {
    "use strict";

    function procedureSearchViewController() {
        var vm = this;
   }

    angular
        .module("gp.ttn.loto.procedure.search")
        .component("procedureSearchView", {
            controller: procedureSearchViewController,
            controllerAs: "vm",
            templateUrl: "procedureSearch/procedure-search-view/procedureSearchView.template.html"

        });

    procedureSearchViewController.$inject = [];
})();