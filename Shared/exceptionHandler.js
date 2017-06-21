(function () {
    "use strict";
    var SERVICE_NAME = "$exceptionHandler";
    angular
        .module("app")
        .factory(SERVICE_NAME,
    ["$log", "ErrorService",
        function ($log, ErrorService) {
            return function (exception, cause) {

                if (console) {
                    $log.error(exception);
                    $log.error(cause);
                }

                ErrorService.send(exception, cause);
            };
        }
    ]);
})();

