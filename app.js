var app = angular.module("searchApp", []);

app.controller("SearchController", function ($scope) {
  $scope.query = "";
  $scope.faculties = [
    "bhoir",
    "binsy",
    "dipali",
    "vaibhav",
    "archana",
    "jayen",
    "prajakta",
    "jeenal",
    "garima",
    "flynn",
  ];
});
