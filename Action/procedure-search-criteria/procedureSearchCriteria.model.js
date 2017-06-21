(function () {
    "use strict";

    var MODEL_NAME = "ProcedureSearchCriteriaModel";

    angular
        .module("gp.ttn.loto.procedure.search")
        .factory(MODEL_NAME,
        [
        function () {

            function ProcedureSearchCriteria(obj) {
                this.procedureId = null;
                this.procedureTypeId = null;
                this.workTypeId = null;
                this.department = null;
                this.costCenter = null;
                this.step = null;
                this.equipment = null;
                this.task = null;
                this.isolationPoint = null;
                this.subEquipmentProcedures = false;
                this.approvedProcedures = true;
                this.unapprovedProcedures = false;
                this.approvedOver1Year = false;
                this.inspectedOver1Year = false;
                this.approvalRequested = false;

                angular.extend(this, obj);
            }

            ProcedureSearchCriteria.prototype = {
                toString: function () { }
            }

            Object.defineProperty(ProcedureSearchCriteria.prototype, "departmentCapped", {
                get: function () { return this.department.toUpperCase();},
                set: function (value) { this.department = value; }
            });

            ProcedureSearchCriteria.fromJson = function (json) {
                return new ProcedureSearchCriteria(json);
            }

            return ProcedureSearchCriteria;
        }
        ]);
})();