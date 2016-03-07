// http://stackoverflow.com/questions/2794148/css3-transition-events
// http://callmenick.com/post/cross-browser-transition-animation-events-modernizr

/* global Modernizr */
/* eslint-env browser, amd */

'use strict';


var test = function( props ) {

	var el = document.createElement( 'span' );

	for ( var prop in props ) {
		if ( typeof el.style[prop] !== 'undefined' ) {
			return props[prop];
		}
	}

	return false;

};


var AnimationEvents = {};


var transEndEventNames = {
	transition       : 'transitionend',
	WebkitTransition : 'webkitTransitionEnd',
	MozTransition    : 'transitionend',
	OTransition      : 'oTransitionEnd',
	msTransition     : 'MSTransitionEnd',
};

AnimationEvents.transitionEndEventName = function() {

	// return transEndEventNames[Modernizr.prefixed( 'transition' )];
	return test( transEndEventNames );

};


var animIterationEventNames = {
	animation       : 'animationiteration',
	WebkitAnimation : 'webkitAnimationIteration',
	MozAnimation    : 'animationiteration',
	OAnimation      : 'oAnimationIteration',
	msAnimation     : 'MSAnimationIteration',
};

AnimationEvents.animIterationEventName = function() {

	// return animIterationEventNames[Modernizr.prefixed( 'animation' )];
	return test( animIterationEventNames );

};


// UMD export
(function( root, factory ) {
	if ( typeof define === 'function' && define.amd ) {
		// AMD
		define( [], factory );
	} else if ( typeof module === 'object' && module.exports ) {
		// Node
		module.exports = factory();
	} else {
		// Browser globals (root is window)
		root.animEvents = factory();
	}
}( this, function() {

	return AnimationEvents;

} ));
