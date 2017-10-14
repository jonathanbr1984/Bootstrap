'use strict';

(function() {

    class ProductoController {

        constructor() {}

        $onInit() {}
    }

    angular.module('bootstrapApp')
        .component('producto', {
            templateUrl: 'app/producto/producto.html',
            controller: ProductoController
        });

})();