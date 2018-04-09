"use strict"

angular
  .module("authApp", ["ngMaterial", "ui.router", "ngRoute"])

  .config(function ($provide, $urlRouterProvider, $stateProvider, $httpProvider) {
    $urlRouterProvider.otherwise("/home");

    $stateProvider.state("home", {
      url: "/home",
      templateUrl: "components/home/home.tpl.html"
    }),
    $stateProvider.state("about", {
      url: "/about",
      templateUrl: "components/about/about.tpl.html"
    })
  })
