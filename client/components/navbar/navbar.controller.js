'use strict';

class NavbarController {
    ocultarCollapse() {
        $('.navbar-collapse').collapse('hide');
    }
}

angular.module('bootstrapApp')
    .controller('NavbarController', NavbarController);