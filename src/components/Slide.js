import React from 'react';
import $ from 'jquery'
import '../plugins/bootstrap/bootstrap.min.css'
import '../plugins/slick/slick.css'
import '../plugins/themify-icons/themify-icons.css'
import '../plugins/animate/animate.css'
import '../plugins/aos/aos.css'
import '../plugins/venobox/venobox.css'
import '../css/style.css'
import preloader from '../images/preloader.gif'
import bg from '../images/banner/banner-1.jpg';

const Slide = (props) => {

  $.fn.slickAnimation = function () {
    var currentSlickSlider = $(this);

    var slickItems = currentSlickSlider.find('.slick-list .slick-track > div');
    var firstSlickItem = currentSlickSlider.find('[dataSlickIndex="0"]');

    var animatedClass = 'animated';
    var visible = {opacity: '1'};
    var hidden = {opacity: '0'};

    /**
     * function for setting animationIn and animationOut class
     * @param obj
     * @param type
     * @param animationIn
     * @param animatedClass
     * @param visibility
     */

    function slickSetAnimationDefault(obj, type, animationIn, animatedClass, visibility) {
        visibility = typeof visibility !== 'undefined' ? visibility : false;

        slickRemoveAnimation(obj, 'delay');
        slickRemoveAnimation(obj, 'duration');

        if (type['opacity'] === 1) {
            obj.addClass(animationIn);
            obj.addClass(animatedClass);
        } else {
            obj.removeClass(animationIn);
            obj.removeClass(animatedClass);
        }

        if (visibility) obj.css(type);
    }

    /**
     * get timeout when delay, duration, delay and duration is set
     * @param delayIn
     * @param durationIn
     * @returns {number}
     */

    function getTimeout(delayIn, durationIn) {
        if (delayIn) {
            return delayIn * 1000 + 1000;

        } else if (durationIn) {
            return durationIn * 1000;

        } else if ((delayIn) || (durationIn)) {
            return (delayIn * 1000) + (durationIn * 1000);
        }
        return 1000;
    }

    /**
     * add css animations for delay and duration
     * @param obj
     * @param animation
     * @param value
     */
    function slickAddAnimation(obj, animation, value) {
        var delayInAttr = [
            'animation-' + animation,
            '-webkit-animation-' + animation,
            '-moz-animation-' + animation,
            '-o-animation-' + animation,
            '-ms-animation-' + animation
        ];
        var delayInAttributes = {};
        delayInAttr.forEach(function (entry) {

            delayInAttributes[entry] = value + 's';
        });
        obj.css(delayInAttributes);
    }

    /**
     * remove css animations for delay and duration
     * @param obj
     * @param animation
     */
    function slickRemoveAnimation(obj, animation) {
        var delayInAttr = [
            'animation-' + animation,
            '-webkit-animation-' + animation,
            '-moz-animation-' + animation,
            '-o-animation-' + animation,
            '-ms-animation-' + animation
        ];
        var delayInAttributes = {};
        delayInAttr.forEach(function (entry) {

            delayInAttributes[entry] = '';
        });
        obj.css(delayInAttributes);
    }

    slickItems.each(function () {
        var slickItem = $(this);

        slickItem.find('[dataAnimationIn]').each(function () {
            var self = $(this);

            self.css(hidden);

            var animationIn = self.attr('dataAnimationIn');
            var animationOut = self.attr('dataAnimationOut');
            var delayIn = self.attr('dataDelayIn');
            var durationIn = self.attr('dataDurationIn');
            var delayOut = self.attr('dataDelayOut');
            var durationOut = self.attr('dataDurationOut');

            if (animationOut) {
                if (firstSlickItem.length > 0) {
                    if (slickItem.hasClass('slick-current')) {

                        slickSetAnimationDefault(self, visible, animationIn, animatedClass, true);

                        if (delayIn) {
                            slickAddAnimation(self, 'delay', delayIn);
                        }
                        if (durationIn) {
                            slickAddAnimation(self, 'duration', durationIn);
                        }

                        setTimeout(function () {
                            slickSetAnimationDefault(self, hidden, animationIn, animatedClass);
                            slickSetAnimationDefault(self, visible, animationOut, animatedClass);
                            if (delayOut) {
                                slickAddAnimation(self, 'delay', delayOut);
                            }
                            if (durationOut) {
                                slickAddAnimation(self, 'duration', durationOut);
                            }
                            setTimeout(function() {
                                slickRemoveAnimation(self, 'delay');
                                slickRemoveAnimation(self, 'duration');
                            }, getTimeout(delayOut, durationOut));

                        }, getTimeout(delayIn, durationIn));
                    }
                }

                currentSlickSlider.on('afterChange', function (event, slick, currentSlider) {
                    if (slickItem.hasClass('slick-current')) {

                        slickSetAnimationDefault(self, visible, animationIn, animatedClass, true);

                        if (delayIn) {
                            slickAddAnimation(self, 'delay', delayIn);
                        }
                        if (durationIn) {
                            slickAddAnimation(self, 'duration', durationIn);
                        }

                        setTimeout(function () {
                            slickSetAnimationDefault(self, hidden, animationIn, animatedClass);
                            slickSetAnimationDefault(self, visible, animationOut, animatedClass);

                            if (delayOut) {
                                slickAddAnimation(self, 'delay', delayOut);
                            }
                            if (durationOut) {
                                slickAddAnimation(self, 'duration', durationOut);
                            }
                            setTimeout(function() {
                                slickRemoveAnimation(self, 'delay');
                                slickRemoveAnimation(self, 'duration');
                            }, getTimeout(delayOut, durationOut));

                        }, getTimeout(delayIn, durationIn));
                    }
                });

                currentSlickSlider.on('beforeChange', function (event, slick, currentSlider) {
                    slickSetAnimationDefault(self, hidden, animationOut, animatedClass, true);

                });
            } else {

                if (firstSlickItem.length > 0) {
                    if (slickItem.hasClass('slickCurrent')) {
                        slickSetAnimationDefault(self, visible, animationIn, animatedClass, true);

                        if (delayIn) {
                            slickAddAnimation(self, 'delay', delayIn);
                        }
                        if (durationIn) {
                            slickAddAnimation(self, 'duration', durationIn);

                        }
                    }
                }

                currentSlickSlider.on('afterChange', function (event, slick, currentSlider) {
                    if (slickItem.hasClass('slickCurrent')) {
                        slickSetAnimationDefault(self, visible, animationIn, animatedClass, true);

                        if (delayIn) {
                            slickAddAnimation(self, 'delay', delayIn);
                        }
                        if (durationIn) {
                            slickAddAnimation(self, 'duration', durationIn);
                        }
                    }
                });


                currentSlickSlider.on('beforeChange', function (event, slick, currentSlider) {
                    slickSetAnimationDefault(self, hidden, animationIn, animatedClass, true);
                });
            }

        });
    });
    return(this);
}


    return(
        <React.Fragment>
        <div className="hero-slider-item">
        <div className="row">
          <div className="col-md-8">
           <h1 className="text-white" dataAnimationOut="fadeOutDown" dataDelayOut="5" dataDurationIn=".3" dataAnimation-in="fadeInUp" dataDelayIn=".1">{props.heading}</h1>
            <p className="text-muted mb-4" dataAnimationOut="fadeOutDown" dataDelayOut="5" dataDurationIn=".3" dataAnimationIn="fadeInUp" dataDelayIn=".4">{props.body}</p>
            <a href="contact.html" className="btn btn-primary" dataAnimationOut="fadeOutDown" dataDelayOut="5" dataDurationIn=".3" dataAnimationIn="zoomIn" dataDelayIn=".7">Apply now</a>
          </div>
        </div>
      </div>
        </React.Fragment>
    )
}

export default Slide;