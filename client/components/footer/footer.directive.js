'use strict';
(function() {
    class FooterController {
        constructor() {}
        formSubmit() {
            this.el;
            this.error = Math.random() > 0.5;
            if (this.error) {
                this.validaColor = "has-success";
                this.validaColorDiv = ["form-control-feedback", "glyphicon", "glyphicon-ok"];
                this.el = "<label class='control-label' for='inputSuccess2'>Registro Exitoso</label>";
            } else {
                this.validaColor = "has-error";
                this.validaColorDiv = ["form-control-feedback", "glyphicon", "glyphicon-remove"];
                this.el = "<label class='control-label' for='inputSuccess2'>Inconvenientes con el registro</label>";
            }
        }
    }

    angular.module('bootstrapApp')
        .component('footerApp', {
            templateUrl: 'components/footer/footer.html',
            controller: FooterController,
            controllerAs: 'vm'
        });
})();