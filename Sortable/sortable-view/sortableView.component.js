(function () {
    "use strict";

    var componentController =
    [ //injections go here
    function ViewController() {
        var vm = this;
        var expr1 = true;
        var expr2 = false;
        vm.reverse = false;
        vm.items = [
  {
      "_id": "590cf247bfbb057a62d6851b",
      "index": 0,
      "guid": "b6ce9b8c-69bc-4d7e-8187-89b9fc4bc5d2",
      "isActive": false,
      "balance": "$2,104.97",
      "picture": "http://placehold.it/32x32",
      "age": 34,
      "eyeColor": "green",
      "name": "Alberta Mejia",
      "gender": "female",
      "company": "ULTRIMAX",
      "email": "albertamejia@ultrimax.com",
      "phone": "+1 (818) 436-2171",
      "address": "724 Covert Street, Esmont, Colorado, 3858",
      "about": "Ipsum do qui excepteur irure duis anim magna nulla cillum sit Lorem id. Dolor sint incididunt consectetur est irure velit adipisicing ad dolor eiusmod proident consequat veniam anim. In occaecat velit tempor dolor officia velit excepteur in in adipisicing qui sunt anim. Proident ullamco excepteur laborum duis ad aliqua Lorem. Labore Lorem consequat laboris dolor commodo velit. Id minim mollit do irure irure cillum culpa nisi elit.\r\n",
      "registered": "2014-08-18T03:42:23 +07:00",
      "latitude": -49.36002,
      "longitude": -44.650017,
      "tags": [
        "ea",
        "amet",
        "esse",
        "veniam",
        "occaecat",
        "nulla",
        "incididunt"
      ],
      "friends": [
        {
            "id": 0,
            "name": "Noel Sharpe"
        },
        {
            "id": 1,
            "name": "Terri Hines"
        },
        {
            "id": 2,
            "name": "Morse Vazquez"
        }
      ],
      "greeting": "Hello, Alberta Mejia! You have 6 unread messages.",
      "favoriteFruit": "banana"
  },
  {
      "_id": "590cf2470cc3a5707695801c",
      "index": 1,
      "guid": "298528a4-d5fa-46a2-8b14-0d52364264c8",
      "isActive": false,
      "balance": "$3,789.52",
      "picture": "http://placehold.it/32x32",
      "age": 32,
      "eyeColor": "blue",
      "name": "Hillary Barry",
      "gender": "female",
      "company": "SPORTAN",
      "email": "hillarybarry@sportan.com",
      "phone": "+1 (935) 488-3974",
      "address": "228 Stryker Street, Efland, Utah, 2552",
      "about": "Culpa elit nulla occaecat eu laborum ex aliqua. Lorem minim et elit veniam adipisicing cillum et minim. Aute et officia consequat non sunt incididunt excepteur non deserunt. Ullamco ipsum commodo ad id dolore. Ad mollit ea commodo ad. Nostrud reprehenderit irure in minim veniam fugiat adipisicing Lorem velit dolor excepteur.\r\n",
      "registered": "2015-08-26T08:38:04 +07:00",
      "latitude": 0.07996,
      "longitude": -98.688609,
      "tags": [
        "esse",
        "eu",
        "veniam",
        "nisi",
        "dolore",
        "pariatur",
        "labore"
      ],
      "friends": [
        {
            "id": 0,
            "name": "Olive Dunn"
        },
        {
            "id": 1,
            "name": "Nash Mcclure"
        },
        {
            "id": 2,
            "name": "Mcclure Parrish"
        }
      ],
      "greeting": "Hello, Hillary Barry! You have 4 unread messages.",
      "favoriteFruit": "strawberry"
  },
  {
      "_id": "590cf2472fd067f428cbd41a",
      "index": 2,
      "guid": "27634f14-be42-455c-984b-ccb838ad35bc",
      "isActive": true,
      "balance": "$2,469.69",
      "picture": "http://placehold.it/32x32",
      "age": 23,
      "eyeColor": "blue",
      "name": "Chandra Cochran",
      "gender": "female",
      "company": "TROLLERY",
      "email": "chandracochran@trollery.com",
      "phone": "+1 (842) 446-3122",
      "address": "424 Oriental Boulevard, Finderne, Mississippi, 3751",
      "about": "Et deserunt minim exercitation aute anim enim aute in amet. Ea do ullamco consequat fugiat dolore. Qui reprehenderit minim anim laboris excepteur ex dolor aliquip commodo culpa deserunt non. Ex mollit pariatur consectetur laborum ea duis labore adipisicing aliquip in ad minim. Tempor nulla minim esse dolor quis exercitation fugiat ex reprehenderit fugiat tempor id.\r\n",
      "registered": "2016-11-06T03:13:52 +08:00",
      "latitude": 89.150912,
      "longitude": 70.731416,
      "tags": [
        "ex",
        "voluptate",
        "exercitation",
        "id",
        "dolore",
        "aliqua",
        "do"
      ],
      "friends": [
        {
            "id": 0,
            "name": "Dotson Wade"
        },
        {
            "id": 1,
            "name": "Moreno Rasmussen"
        },
        {
            "id": 2,
            "name": "Riggs Chang"
        }
      ],
      "greeting": "Hello, Chandra Cochran! You have 10 unread messages.",
      "favoriteFruit": "apple"
  },
  {
      "_id": "590cf247c88cc081b16c1e21",
      "index": 3,
      "guid": "68baf5e8-9ebc-48ee-a4cd-7635df1992f2",
      "isActive": false,
      "balance": "$2,776.18",
      "picture": "http://placehold.it/32x32",
      "age": 30,
      "eyeColor": "green",
      "name": "Terra Grant",
      "gender": "female",
      "company": "AEORA",
      "email": "terragrant@aeora.com",
      "phone": "+1 (808) 427-2783",
      "address": "535 Dahl Court, Verdi, North Carolina, 9904",
      "about": "Voluptate proident est veniam dolor consequat reprehenderit aliquip nostrud duis voluptate. Do ut voluptate eiusmod ut culpa minim qui do qui do ullamco proident. Labore proident cupidatat cupidatat ut quis labore voluptate aliqua veniam ipsum laborum laboris aute amet. Laborum occaecat in reprehenderit voluptate fugiat officia incididunt ipsum aliquip amet non. Do ea non ullamco qui aliqua tempor laborum do occaecat cillum labore. Ipsum enim dolore ipsum reprehenderit sit fugiat aliqua pariatur officia.\r\n",
      "registered": "2016-12-12T03:30:42 +08:00",
      "latitude": -16.415631,
      "longitude": 160.369933,
      "tags": [
        "eu",
        "non",
        "exercitation",
        "ad",
        "culpa",
        "tempor",
        "consectetur"
      ],
      "friends": [
        {
            "id": 0,
            "name": "Kirk Talley"
        },
        {
            "id": 1,
            "name": "Shelly Valentine"
        },
        {
            "id": 2,
            "name": "Henry Hayden"
        }
      ],
      "greeting": "Hello, Terra Grant! You have 4 unread messages.",
      "favoriteFruit": "apple"
  },
  {
      "_id": "590cf247154fa9041dba0805",
      "index": 4,
      "guid": "0d94c198-d483-48af-87ae-ac42ff55e411",
      "isActive": false,
      "balance": "$3,791.57",
      "picture": "http://placehold.it/32x32",
      "age": 31,
      "eyeColor": "blue",
      "name": "Galloway Mcgowan",
      "gender": "male",
      "company": "GENESYNK",
      "email": "gallowaymcgowan@genesynk.com",
      "phone": "+1 (908) 513-3152",
      "address": "102 Aviation Road, Springhill, Texas, 1294",
      "about": "Magna velit tempor incididunt officia magna pariatur irure eiusmod ad proident commodo. Incididunt occaecat incididunt fugiat ea consectetur. Amet excepteur id incididunt voluptate ad exercitation anim eiusmod in ea nostrud do exercitation cillum.\r\n",
      "registered": "2017-02-25T02:08:10 +08:00",
      "latitude": 9.972909,
      "longitude": -178.015441,
      "tags": [
        "nulla",
        "tempor",
        "laborum",
        "deserunt",
        "esse",
        "sint",
        "do"
      ],
      "friends": [
        {
            "id": 0,
            "name": "Dorothy Gillespie"
        },
        {
            "id": 1,
            "name": "Pittman Little"
        },
        {
            "id": 2,
            "name": "Hood Mccray"
        }
      ],
      "greeting": "Hello, Galloway Mcgowan! You have 6 unread messages.",
      "favoriteFruit": "apple"
  },
  {
      "_id": "590cf247c6eaf97027f56c6c",
      "index": 5,
      "guid": "95b7b209-40c4-4ca9-bc08-79620266b5b3",
      "isActive": true,
      "balance": "$3,596.21",
      "picture": "http://placehold.it/32x32",
      "age": 29,
      "eyeColor": "blue",
      "name": "Marissa Sexton",
      "gender": "female",
      "company": "FUTURIZE",
      "email": "marissasexton@futurize.com",
      "phone": "+1 (985) 496-3112",
      "address": "445 Lloyd Street, Remington, Florida, 4938",
      "about": "Incididunt ut esse adipisicing non mollit labore ex. Voluptate velit culpa eiusmod commodo aliquip in. Consequat deserunt excepteur mollit consectetur duis elit laborum esse eu in irure nisi. Magna fugiat esse deserunt dolor quis labore laboris aute quis non excepteur sint. Occaecat excepteur mollit qui non deserunt quis labore reprehenderit minim aute. Laborum nisi aliquip nisi ad do nisi duis laboris do aute excepteur. Irure laboris eiusmod do sit ipsum consectetur pariatur adipisicing irure.\r\n",
      "registered": "2016-12-24T09:30:35 +08:00",
      "latitude": 29.693952,
      "longitude": -32.629068,
      "tags": [
        "in",
        "adipisicing",
        "ipsum",
        "aliquip",
        "ea",
        "laborum",
        "minim"
      ],
      "friends": [
        {
            "id": 0,
            "name": "Aurora Baldwin"
        },
        {
            "id": 1,
            "name": "Ashlee Travis"
        },
        {
            "id": 2,
            "name": "Perez Hickman"
        }
      ],
      "greeting": "Hello, Marissa Sexton! You have 7 unread messages.",
      "favoriteFruit": "strawberry"
  },
  {
      "_id": "590cf2472b5951ed5b26adbf",
      "index": 6,
      "guid": "ac743af8-87b1-45c1-bbb1-88d5dbdd52d5",
      "isActive": false,
      "balance": "$2,231.15",
      "picture": "http://placehold.it/32x32",
      "age": 22,
      "eyeColor": "blue",
      "name": "Copeland Larson",
      "gender": "male",
      "company": "XSPORTS",
      "email": "copelandlarson@xsports.com",
      "phone": "+1 (867) 426-2689",
      "address": "995 Georgia Avenue, Sutton, District Of Columbia, 4186",
      "about": "Quis eu elit cillum aute incididunt anim exercitation nulla deserunt aliquip tempor sunt. Adipisicing anim voluptate elit elit aliquip velit irure non cupidatat. Commodo incididunt aliqua reprehenderit minim magna ea veniam consectetur sit. Est veniam ullamco in adipisicing sunt sit aute eiusmod. Voluptate duis aute est laborum labore velit ut duis occaecat ea et. Voluptate ex sint commodo aute magna ex nulla. Consequat amet eiusmod do aute proident et mollit in exercitation tempor exercitation qui fugiat.\r\n",
      "registered": "2017-03-12T08:27:48 +07:00",
      "latitude": 14.448368,
      "longitude": -57.711434,
      "tags": [
        "enim",
        "magna",
        "officia",
        "minim",
        "non",
        "aliqua",
        "ipsum"
      ],
      "friends": [
        {
            "id": 0,
            "name": "Nelda Donovan"
        },
        {
            "id": 1,
            "name": "Holly Harrison"
        },
        {
            "id": 2,
            "name": "Josefa Fitzpatrick"
        }
      ],
      "greeting": "Hello, Copeland Larson! You have 5 unread messages.",
      "favoriteFruit": "apple"
  }
        ];

        vm.changeOrder = function (expr) {
            vm.order = expr;
        }
    }];

    angular
        .module("sortableViewModule")
        .component("sortableView", {
            controller: componentController,
            controllerAs: "vm",
            templateUrl: "Sortable/sortable-view/sortableView.template.html",
            
        });

})();