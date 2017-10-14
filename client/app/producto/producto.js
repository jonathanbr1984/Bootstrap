'use strict';

angular.module('bootstrapApp')
    .config(function($stateProvider) {
        $stateProvider
            .state('producto', {
                url: '/producto',
                template: '<producto></producto>'
            });
    });