'use strict';
angular.module('bootstrapApp')
.config(function($stateProvider) {
	$stateProvider
	.state('catalogo', {
		url: '/catalogo',
		template: '<catalogo></catalogo>'
	});
});