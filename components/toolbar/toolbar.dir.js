(function() {
  "use strict";
  angular.module("authApp").directive("toolbar", toolbar);

  function toolbar() {
    return {
      templateUrl: "components/toolbar/toolbar.tpl.html"
    };
  }
  function toolbarController($scope, $http, $location) {
    // $scope.checkInButton = function () {
    //     $location.path('/profile')
  }
})();
