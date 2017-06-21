(function() {
    "use strict";
    var SERVICE_NAME = "fileAttachmentService";
    angular
        .module("app")
        .factory(SERVICE_NAME,["$http", "$q",
            function($http, $q) {

                function handleSuccess(response) {
                    return (response);
                }

                function handleError(response, data) {
                    if (!angular.isObject(response.data) || !response.data.message) {
                        return ($q.reject("An unknown error occurred."));
                    }

                    return ($q.reject(response.data.message));
                }

                function upload(file) {
                    var upl = $http({
                        method: "POST",
                        url: "api/...", // /api/upload
                        headers: {
                            'Content-Type': "" // 'text/plain' // 'image/bitmap'    //'multipart/form-data'    //'application/json; charset=utf-8'
                        },
                        data: {
                            upload: file,
                            objectID: 250,
                            caption: "This is a caption"
                        },
                        transformRequest: function(data, headersGetter) {
                            var formData = new FormData();
                            angular.forEach(data, function(value, key) {
                                formData.append(key, value);
                            });

                            var headers = headersGetter();
                            delete headers["Content-Type"];

                            return formData;
                        }
                    });
                    return upl.then(handleSuccess, handleError);

                }

                var service = {
                    upload: upload
                };

                return service;
            }
        ]);
})();