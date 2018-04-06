"use strict"

angular
  .module("authApp", ["ngMaterial", "ui.router", "ngRoute"])

  .config(function ($provide, $urlRouterProvider, $stateProvider, $httpProvider) {
    $urlRouterProvider.otherwise("/home");

    $stateProvider.state("home", {
      url: "/home",
      templateUrl: "components/home/home.tpl.html"
    })
  })
