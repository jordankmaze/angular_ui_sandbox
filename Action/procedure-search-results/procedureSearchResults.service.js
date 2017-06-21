(function () {
    "use strict";

    var SERVICE_NAME = "procedureSearchResultsService";

    angular
        .module("gp.ttn.loto.procedure.search")
        .factory(SERVICE_NAME,
        ["$http", "$q", "$rootScope", "$window", 
        function ($http, $q, $rootScope, $window) {

            var getProceduresBySearchParametersQuery = function (searchParams) {
                return $q(function (accept, reject) {
                    $http.post("api/VirtualProcedureSearch/GetBySearchParametersQueryAsync", searchParams).then(function (response) {
                        if (response.status === $window.httpStatusCode.OK) {
                            accept(response.data.result);
                        } else
                            reject(response.status);
                    });
                });
            };

            return {
                getProceduresBySearchParametersQuery: getProceduresBySearchParametersQuery
            };
        }
        ]);
})();