// angular routes is injected into your app as the SECOND parameter to angular.module() function; any additional libraries, such as angular cookies, are injected in the same way but separated by commas ['ngRoute', 'ngCookies'].
var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
// Routes to load your new and edit pages with new and edit controllers attached to them!
  $routeProvider
    .when('/new', {                                 //'localhost:8000/#/new', loads this partial.
      templateUrl: 'partials/new.html',
      controller: 'newController'
    })
    // the _id property will be passed into the $routeParams object as long as $routeParams was injected.
    .when('/edit/:id', {                           //'localhost:8000/#/edit', loads this partial.
      templateUrl: 'partials/edit.html',
      controller: 'editController'
    })
    .when('/show/:id', {
      templateUrl: 'partials/show.html',
      controller: 'showController'
    })
    // .when('/delete/:id', {
      // controller: 'newController'
    // })
    // when someone uses any other route than above, load the following partial
    .otherwise('/new');
});
