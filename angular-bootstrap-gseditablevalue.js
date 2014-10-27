"use strict";

angular.module("ui.gseditablevalue", []).directive("gseditablevalue", function($timeout) {
	return {
		scope: {},
		require: "ngModel",
		restrict: "E",
		replace : "true",
		template: "" +
			"<div>" +
				"<div ng-dblclick=\"doubleClick()\" ng-hide=\"edit\">" +
					"<span ng-bind=\"value\"></span>" +
				"</div>" +
				"<div ng-show=\"edit\" style=\"-moz-user-select: none; -webkit-user-select: none; -ms-user-select:none; user-select:none;\" >" +
					"<div class=\"input-group\">" +
						"<input ng-model=\"valueNew\" class=\"form-control\">" +
						"<span class=\"input-group-btn\">" +
							"<button class=\"btn btn-default\" type=\"button\" ng-click=\"cancel()\">" +
								"<span class=\"glyphicon glyphicon-remove\"></span>" +
							"</button>" +
							"<button class=\"btn btn-default\" type=\"button\" ng-click=\"save()\">" +
								"<span class=\"glyphicon glyphicon-ok\"></span>" +
							"</button>" +
						"</span>" +
					"</div>" +
				"</div>" +
			"</div>",
		link: function(scope, elem, attrs, modelCtrl) {
			scope.$watch(function() {
				return modelCtrl.$modelValue;
			}, function(newVal, oldVal) {
				scope.value = newVal;
			}, true);

			scope.edit = false;
			scope.doubleClick = function() {
				scope.valueNew = scope.value;
				scope.edit = true;
			};

			scope.cancel = function() {
				scope.edit = false;
			};

			scope.save = function() {
				scope.edit = false;
				modelCtrl.$setViewValue(scope.valueNew);
			};
		}
	};
});
