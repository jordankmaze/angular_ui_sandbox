(function () {
    "use strict";

    var SERVICE_NAME = "procedureSearchCriteriaService";

    angular
        .module("gp.ttn.loto.procedure.search")
        .factory(SERVICE_NAME,
        ["$rootScope", "Lamb",
        function ($rootScope, Lamb) {
            var bus = new Lamb(SERVICE_NAME, $rootScope);

            var criteriaCache = null;

            var setProcedureSearchCriteria = function (criteria, userFacility) {
                criteriaCache = criteria;
                bus.publish("procedure.search.1", criteria); // + userFacility.facilityId, criteria);
            };

            var getProcedureSearchCriteria = function () {
                return criteriaCache;
            };

            return {
                setProcedureSearchCriteria: setProcedureSearchCriteria,
                getProcedureSearchCriteria: getProcedureSearchCriteria
            };
        }
        ]);
})();