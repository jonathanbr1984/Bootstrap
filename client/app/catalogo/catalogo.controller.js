'use strict';
(function() {
	class CatalogoController {
		constructor(){}
		$onInit(){
			$('#modalOferta').modal();
		}

	}
	angular.module('bootstrapApp')
	.component('catalogo', {
		templateUrl: 'app/catalogo/catalogo.html',
		controller: CatalogoController,
		controllerAs: 'vm'
	});
})();