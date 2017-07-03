angular.module('myApp', ['ionic'])
    .run([function () {
        ionic.Platform.setPlatform('ios');
    }])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('menu', {
                url: "/menu",
                templateUrl: "templates/sideMenu.html"
            })
            .state('menu.content', {
                url: "/content",
                views: {
                    content: {
                        templateUrl: "templates/sideContent.html"
                    },
                    left: {
                        templateUrl: "templates/sideLeft.html"
                    },
                    right: {
                        templateUrl: "templates/sideRight.html"
                    }
                }
            })
            // 网易主页状态
            .state('menu.content.wyHome', {
                url: "/wyHome",
                views: {
                    wy: {
                        templateUrl: "templates/wyHome.html"
                    }
                }
            })
            // 网易详情状态
            .state('menu.content.wyDetail', {
                url: "/wyDetail",
                views: {
                    wy: {
                        templateUrl: "templates/wyDetail.html"
                    }
                }
            })
            // 音乐主页状态
            .state('menu.content.musicHome', {
                url: "/musicHome",
                views: {
                    music: {
                        templateUrl: "templates/musicHome.html"
                    }
                }
            })
            // 视频主页状态
            .state('menu.content.videoHome', {
                url: "/videoHome",
                views: {
                    video: {
                        templateUrl: "templates/videoHome.html"
                    }
                }
            });

        $urlRouterProvider.otherwise('/menu/content/wyHome');
    }]);