'use strict';
(function() {
    class CatalogoController {
        constructor() {}
        $onInit() {
            if (!localStorage.respuestaModal)
                $('#modalOferta').modal();
        }
        noMostrarModal() {
            localStorage.respuestaModal = true;
        }
    }
    angular.module('bootstrapApp')
        .component('catalogo', {
            templateUrl: 'app/catalogo/catalogo.html',
            controller: CatalogoController,
            controllerAs: 'vm'
        });
})();