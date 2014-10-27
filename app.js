"use strict";

angular.module("angular-bootstrap-gseditablevalue-test", ["ui.gseditablevalue"]).controller("index", function($scope, $timeout) {
	$scope.value = "123";

	$timeout(function() {
		$scope.value = "456";
	}, 1000);

	$scope.onChange = function() {
		console.log("change");
	};

	$scope.tableRows = [
		{ firstName: "Hans", lastName: "Meier"},
		{ firstName: "Peter", lastName: "Schulz"},
		{ firstName: "Maria", lastName: "Bla"}
	];
});