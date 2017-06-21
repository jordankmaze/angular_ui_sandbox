(function () {
    "use strict";
    angular.module("app").config(function ($stateProvider, $urlRouterProvider, $locationProvider, $authProvider) {
        $locationProvider.hashPrefix("!");
        $urlRouterProvider.otherwise("/home");
        $stateProvider
            .state("home", {
                url: "/home",
                template: "<home-View></home-View>"
            })
            .state("action", {
                url: "/action",
                template: "<action-View></action-View>",
                controller: function($scope){
                    $scope.pageClass = "rotateandfall";
                }
            })
            .state("datepicker", {
                url: "/datepicker",
                template: "<date-picker-View></date-picker-View>"
            })
            .state("randomdate", {
                url: "/randomdate",
                template: "<random-date-View></random-date-View>"
            })
            .state("modal", {
                url: "/modal",
                template: "<modal-View></modal-View>"
            })
            .state("pager", {
                url: "/pager",
                template: "<pager-View></pager-View>"
            })
            .state("pagination", {
                url: "/pagination",
                template: "<pagination-View></pagination-View>"
            })
            .state("popover", {
                url: "/popover",
                template: "<popover-View></popover-View>"
            })
            .state("progressbar", {
                url: "/progressbar",
                template: "<progressbar-View></progressbar-View>"
            })
            .state("rating", {
                url: "/rating",
                template: "<rating-View></rating-View>"
            })
            .state("tabs", {
                url: "/tabs",
                template: "<tabs-View></tabs-View>"
            })
            .state("timepicker", {
                url: "/timepicker",
                template: "<timepicker-View></timepicker-View>"
            })
            .state("tooltip", {
                url: "/tooltip",
                template: "<tooltip-View></tooltip-View>"
            })
            .state("typeahead", {
                url: "/typeahead",
                template: "<typeahead-View></typeahead-View>"
            })
            .state("accordion", {
                url: "/accordion",
                template: "<accordion-View></accordion-View>",
                controller: function ($scope) {
                    $scope.pageClass = "slideinfromtheright";
                }
            })
            .state("alert", {
                url: "/alert",
                template: "<alert-View></alert-View>",
                controller: function ($scope) {
                    $scope.pageClass = "slideinfromthebottom";
                }
            })
            .state("button", {
                url: "/button",
                template: "<button-View></button-View>"
            })
            .state("imagehover", {
                url: "/imagehover",
                template: "<image-hover-View></image-hover-View>"
            })
            .state("collapse", {
                url: "/collapse",
                template: "<collapse-View></collapse-View>"
            })
            .state("dropdown", {
                url: "/dropdown",
                template: "<dropdown-View></dropdown-View>"
            })
            .state("lightbox", {
                url: "/lightbox",
                template: "<lightbox-View></lightbox-View>"
            })
            .state("fileattachment", {
                url: "/fileattachment",
                template: "<file-attachment-View></file-attachment-View>"
            })
            .state("shopping", {
                url: "/shopping",
                template: "<shopping-View></shopping-View>"
            })
            .state("carousel", {
                url: "/carousel",
                template: "<carousel-View></carousel-View>"
            })
            .state("sortable", {
                url: "/sortable",
                template: "<sortable-View></sortable-View>"
            })
            .state("blendmode", {
                url: "/blendmode",
                template: "<blendmode-View></blendmode-View>"
            })
            .state("instagramhome", {
                url: "/instagramhome",
                template: "<instagram-View></instagram-View>"
            })
                .state("instagramlogin", {
                    url: "/instagramlogin",
                    template: "<instagram-Login></instagram-Login>"
                })
                .state("instagramsignup", {
                    url: "/instagramsignup",
                    template: "<instagram-Signup></instagram-Signup>"
                })
                .state("instagramphoto", {
                    url: "/instagramphoto/:id",
                    template: "<instagram-Photo></instagram-Photo>"
                });

        $authProvider.loginUrl = 'http://localhost:63329/auth/login';
        $authProvider.signupUrl = 'http://localhost:63329/auth/signup';
        $authProvider.oauth2({
            name: 'instagram',
            url: 'http://localhost:63329/auth/instagram',
            redirectUri: 'http://localhost:8000',
            clientId: '69f13a63283a43bd82ebaab058eb7ee3',
            requiredUrlParams: ['scope'],
            scope: ['likes'],
            scopeDelimiter: '+',
            authorizationEndpoint: 'https://api.instagram.com/oauth/authorize'
        });
    });
})();