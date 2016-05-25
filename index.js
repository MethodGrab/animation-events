// http://stackoverflow.com/questions/2794148/css3-transition-events
// http://callmenick.com/post/cross-browser-transition-animation-events-modernizr

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
	return test( transEndEventNames );
};


var animationEndEventNames = {
	animation       : 'animationend',
	WebkitAnimation : 'webkitAnimationEnd',
	MozAnimation    : 'animationend',
	OAnimation      : 'oanimationend',
	msAnimation     : 'MSAnimationEnd',
};

AnimationEvents.animationEndEventName = function() {
	return test( animationEndEventNames );
};


// The `animationiteration` event is fired when an iteration of an animation ends.
// This event does not occur for animations with an animation-iteration-count of one.
// https://developer.mozilla.org/en-US/docs/Web/Events/animationiteration
var animationIterationEventNames = {
	animation       : 'animationiteration',
	WebkitAnimation : 'webkitAnimationIteration',
	MozAnimation    : 'animationiteration',
	OAnimation      : 'oAnimationIteration',
	msAnimation     : 'MSAnimationIteration',
};

AnimationEvents.animationIterationEventName = function() {
	return test( animationIterationEventNames );
};


// UMD export
(function( root, factory ) {
	if ( typeof define === 'function' && define.amd ) {
		// AMD
		define( [], factory );
	} else if ( typeof module === 'object' && module.exports ) {
		// CommonJS
		module.exports = factory();
	} else {
		// Browser globals (root is window)
		root.animEvents = factory();
	}
}( this, function() {

	return AnimationEvents;

} ));
