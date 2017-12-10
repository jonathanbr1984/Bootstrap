'use strict';

(function() {

    class MainController {

        constructor() {}

        $onInit() {
            //function to animate slider for page landing
            function doAnimations(elems) {
                //cache the animationed event in a variable
                var animEndEv = 'webkitAnimationEnd animationed';

                elems.each(function() {
                    var $this = $(this),
                        $animationType = $this.data('animation');
                    $this.addClass($animationType).one(animEndEv, function() {
                        $this.removeClass($animationType);
                    });
                });
            }
            //variables on page load
            var $myCarousel = $('#productosCarousel'),
                $fisrtAnimatingElems = $myCarousel.find('.item:first').find(
                    "[data-animation ^= 'animated']");

            //initialize carousel
            $myCarousel.carousel();

            //animate captions in first slide on page load
            doAnimations($fisrtAnimatingElems);

            //pause carousel
            //$myCarousel('pause');

            //other slides to be animated on carousel slide event
            $myCarousel.on('slide.bs.carousel', function(e) {
                var $animatingElems = $(e.relatedTarget).find(
                    "[data-animation ^= 'animated']");
                doAnimations($animatingElems);
            })
        }
    }

    angular.module('bootstrapApp')
        .component('main', {
            templateUrl: 'app/main/main.html',
            controller: MainController
        });

})();