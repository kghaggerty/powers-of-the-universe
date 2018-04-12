"use strict"

angular
  .module("authApp", ["ngMaterial", "ui.router", "ngRoute"])

  .config(function ($provide, $urlRouterProvider, $stateProvider, $httpProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/home");

    $stateProvider.state("home", {
      url: "/home",
      templateUrl: "components/home/home.tpl.html"
    }),
    $stateProvider.state("about", {
      url: "/about",
      templateUrl: "components/about/about.tpl.html"
    }),
    $stateProvider.state("powers", {
      url: "/powers",
      templateUrl: "components/powers/powers.tpl.html"
    }),
    $stateProvider.state("direction", {
      url: "/direction",
      templateUrl: "components/direction/direction.tpl.html"
    })

    $locationProvider.html5Mode(true);
  })
