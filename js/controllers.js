angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngSanitize', 'ngDialog', 'angular-flexslider'])

.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, ngDialog, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("home");
    $scope.menutitle = NavigationService.makeactive("Home");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.products = false;
    $scope.pro = function (open) {
        $scope.products = open;
    }
    $scope.open = function () {
        ngDialog.open({
            template: 'views/content/quickview.html'
        });
    }

    $scope.slides = [
        'img/home-slide/slider1.png',
        'img/home-slide/slider2.png',
        'img/home-slide/slider3.png',
        'img/home-slide/slider4.png'
    ];
    $scope.products = [
        {
            img: "img/products/8.jpg",
            name: "Zara",
            price: "25000"
    },
        {
            img: "img/products/7.jpg",
            name: "Zara",
            price: "25000"
    },
        {
            img: "img/products/5.jpg",
            name: "Zara",
            price: "25000"
    },
        {
            img: "img/products/4.jpg",
            name: "Zara",
            price: "25000"
    },
//        {
//            img: "img/products/6.jpg",
//            name: "Zara",
//            price: "25000"
//    },
//        {
//            img: "img/products/3.jpg",
//            name: "Zara",
//            price: "25000"
//    },
//        {
//            img: "img/products/2.jpg",
//            name: "Zara",
//            price: "25000"
//    },
//        {
//            img: "img/products/1.jpg",
//            name: "Zara",
//            price: "25000"
//    }
                      ];
    $scope.brandlist = [
        {
            back_img: "img/brandlist/acrylamhov.png",
            img: "img/brandlist/acrylam.png",
            products: [{
                img: "img/products/8.jpg",
                name: "Zara",
                price: "25000"
        }, {
                img: "img/products/7.jpg",
                name: "Zara",
                price: "25000"
        }, {
                img: "img/products/6.jpg",
                name: "Zara",
                price: "25000"
        }, {
                img: "img/products/5.jpg",
                name: "Zara",
                price: "25000"
        }]
        },
        {
            back_img: "img/brandlist/acrylytehov.png",
            img: "img/brandlist/acrylyte.png",
            products: [
                {
                    img: "img/products/5.jpg",
                    name: "Zara",
                    price: "25000"
    },
                {
                    img: "img/products/4.jpg",
                    name: "Zara",
                    price: "25000"
    },
                {
                    img: "img/products/3.jpg",
                    name: "Zara",
                    price: "25000"
    },
                {
                    img: "img/products/2.jpg",
                    name: "Zara",
                    price: "25000"
    },
            ]
        },
        {
            back_img: "img/brandlist/corrianohov.png",
            img: "img/brandlist/corriano.png",
            products: [{
                img: "img/products/8.jpg",
                name: "Zara",
                price: "25000"
        }, {
                img: "img/products/7.jpg",
                name: "Zara",
                price: "25000"
        }, {
                img: "img/products/6.jpg",
                name: "Zara",
                price: "25000"
        }, {
                img: "img/products/5.jpg",
                name: "Zara",
                price: "25000"
        }]
        },
//        {
//            back_img: "img/brandlist/mikanohov.png",
//            img: "img/brandlist/mikano.png"
//        }
                       ];

    $scope.producthov = [
        {
            img: "img/products/8.jpg",
            name: "Zara",
            price: "25000"
        }, {
            img: "img/products/7.jpg",
            name: "Zara",
            price: "25000"
        }, {
            img: "img/products/6.jpg",
            name: "Zara",
            price: "25000"
        }, {
            img: "img/products/5.jpg",
            name: "Zara",
            price: "25000"
        }
  ];

    $scope.prosee = false;
    $scope.proclick = function (view) {
        if (view = true) {
            $scope.prosee = !$scope.prosee;
        } else {
            $scope.prosee = view;
        }
    }
})

.controller('ContactUsCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
    $scope.template = TemplateService.changecontent("contactus");
    $scope.menutitle = NavigationService.makeactive("Contact-Us");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('QuickviewCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("quickview");
        $scope.menutitle = NavigationService.makeactive("QuickView");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })
    .controller('GalleryimageCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("galleryimage");
        $scope.menutitle = NavigationService.makeactive("Galleryimage");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.slide = [
        'img/products/1.jpg',
        'img/products/2.jpg',
        'img/products/3.jpg',
        'img/products/4.jpg'
    ];
    })
    .controller('CategorymainCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("categorymain");
        $scope.menutitle = NavigationService.makeactive("Categorymain");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.catmain = [
            {
                img: 'img/brands/01.png'
                },
            {
                img: 'img/brands/02.png'
                },
            {
                img: 'img/brands/03.png'
                },
            {
                img: 'img/brands/04.png'
                },
//            {
//                img: 'img/brands/05.png'
//                },
            {
                img: 'img/brands/06.png'
                },
            {
                img: 'img/brands/07.png'
                },
            {
                img: 'img/brands/08.png'
                },
            {
                img: 'img/brands/09.png'
                },
            {
                img: 'img/brands/10.png'
                },
            {
                img: 'img/brands/011.png'
                },
            {
                img: 'img/brands/012.png'
                },
            {
                img: 'img/brands/013.png'
                },
            {
                img: 'img/brands/014.png'
                },
            {
                img: 'img/brands/015.png'
                },
            {
                img: 'img/brands/016.png'
                },
            {
                img: 'img/brands/017.png'
                },
//            {
//                img: 'img/brands/018.png'
//                }
            ];
    })
    .controller('GalleryCtrl', function ($scope, TemplateService, NavigationService, ngDialog, $timeout) {
        $scope.template = TemplateService.changecontent("gallery");
        $scope.menutitle = NavigationService.makeactive("Gallery");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.gallery = [
            {
                img: "img/newarrival.png",
                //                galleries: [
                //                'img/products/1.jpg',
                //                'img/products/2.jpg',
                //                'img/products/3.jpg',
                //                'img/products/4.jpg'
                //                ]
           },
            {
                img: "img/newarrival.png",
                //                galleries: [
                //                'img/products/5.jpg',
                //                'img/products/6.jpg',
                //                'img/products/7.jpg',
                //                'img/products/8.jpg'
                //                ]
                          },
            {
                img: "img/newarrival.png"
                          },
            {
                img: "img/newarrival.png"
                          },
            {
                img: "img/newarrival.png"
                          },
            {
                img: "img/newarrival.png"
                          }, {
                img: "img/newarrival.png"
},
            {
                img: "img/newarrival.png"
 }
                         ];
        //        $scope.show = false;
        //    $scope.galleryToShow =[];
        //        $scope.open = function (gal) {
        //            
        //            $scope.galleryToShow = gal.galleries;
        //            gal.showgal=true;
        //        }
        //        $scope.close = function () {            
        //            $scope.galleryToShow =[];
        //            gal.showgal=false;
        //        }
        $scope.slide = [
        'img/mikano/1.jpg',
        'img/mikano/2.jpg',
        'img/mikano/3.jpg',
        'img/mikano/4.jpg'
    ];
        $scope.open = function () {
            ngDialog.open({
                template: 'views/content/galleryimage.html'
            });
        }
    })
    .controller('BrandsCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("brands");
        $scope.menutitle = NavigationService.makeactive("Brands");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.brandlist = [
            {
                img: 'img/brands/18.png'

            }, {
                img: 'img/brands/1.png'
                },
            {
                img: 'img/brands/2.png'
                },
            {
                img: 'img/brands/3.png'
                },
            {
                img: 'img/brands/4.png'
                },
            {
                img: 'img/brands/5.png'
                },
            {
                img: 'img/brands/6.png'
                },
            {
                img: 'img/brands/7.png'
                },
            {
                img: 'img/brands/8.png'
                },
            {
                img: 'img/brands/9.png'
                },
            {
                img: 'img/brands/10.png'
                },
            {
                img: 'img/brands/11.png'
                },
            {
                img: 'img/brands/12.png'
                },
            {
                img: 'img/brands/13.png'
                },
            {
                img: 'img/brands/14.png'
                },
            {
                img: 'img/brands/15.png'
                },
            {
                img: 'img/brands/16.png'
                },
            {
                img: 'img/brands/17.png'
                }
            ];
    })
    .controller('CategoryCtrl', function ($scope, TemplateService, NavigationService, ngDialog, $timeout) {
        $scope.template = TemplateService.changecontent("category");
        $scope.menutitle = NavigationService.makeactive("Category");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    
        $scope.molding = [
            {
                img: "img/decolite/sample/molding/103-41.jpg",
                name: "Decolite",
                price: "25000"
    },
            {
                img: "img/decolite/sample/molding/103-43.jpg",
                name: "Decolite",
                price: "25000"
    },
            {
                img: "img/decolite/sample/molding/103C-60.jpg",
                name: "Decolite",
                price: "25000"
    },
            {
                img: "img/decolite/sample/molding/103C-966.jpg",
                name: "Decolite",
                price: "25000"
    },
            {
                img: "img/decolite/sample/molding/103C-1223.jpg",
                name: "Decolite",
                price: "25000"
    }

                      ];
    
        $scope.panel = [
            {
                img: "img/decolite/sample/panel/7101.jpg",
                name: "Decolite"
    },
            {
                img: "img/decolite/sample/panel/7102.jpg",
                name: "Decolite"
    },
            {
                img: "img/decolite/sample/panel/7103.jpg",
                name: "Decolite"
    },
            {
                img: "img/decolite/sample/panel/7105.jpg",
                name: "Decolite"
    },
            {
                img: "img/decolite/sample/panel/7108.jpg",
                name: "Decolite"
    },
            {
                img: "img/decolite/sample/panel/7109.jpg",
                name: "Decolite"
    },
            {
                img: "img/decolite/sample/panel/7110.jpg",
                name: "Decolite"
    },
            {
                img: "img/decolite/sample/panel/7111.jpg",
                name: "Decolite"
    },
            {
                img: "img/decolite/sample/panel/7112.jpg",
                name: "Decolite"
    },
            {
                img: "img/decolite/sample/panel/7113.jpg",
                name: "Decolite"
    },
            {
                img: "img/decolite/sample/panel/7114.jpg",
                name: "Decolite"
    },
            {
                img: "img/decolite/sample/panel/7115.jpg",
                name: "Decolite"
    },
            {
                img: "img/decolite/sample/panel/7116.jpg",
                name: "Decolite"
    },
            {
                img: "img/decolite/sample/panel/7118.jpg",
                name: "Decolite"
    },
            {
                img: "img/decolite/sample/panel/7121.jpg",
                name: "Decolite"
    },
            {
                img: "img/decolite/sample/panel/7122.jpg",
                name: "Decolite"
    },
        ];
        $scope.oneAtATime = true;
        $scope.open = function (image) {
            $scope.imgsrc = image;
            ngDialog.open({
                template: 'views/content/quickview.html'
            });
        };

    })
    .controller('headerctrl', function ($scope, TemplateService) {
        $scope.template = TemplateService;
        $scope.search = false;
        $scope.open = function (box) {
            $scope.search = box;
        }
    })

;
//$scope.toggle = function (flag) {
//    //            if (flag = true) {
//    //                $scope.showsearch = !$scope.showsearch;
//    //            } else {
//    $scope.showsearch = flag;
//    //            }
//}