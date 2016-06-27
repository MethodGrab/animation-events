// Get the prefixed version of animation events
// http://stackoverflow.com/questions/2794148/css3-transition-events
// http://callmenick.com/post/cross-browser-transition-animation-events-modernizr

/*
	Example:
	```
	const animEvents = require( '@methodgrab/animation-events' );

	let transitionendEvent;
	let animationendEvent;

	// get & cache the prefixed event names
	const transitionend = (  ) => { return transitionendEvent ? transitionendEvent : animEvents.transitionEndEventName(); };
	const animationend  = (  ) => { return animationendEvent ? animationendEvent : animEvents.animationEndEventName(); };

	$( '.el' )
		.addClass( 'is-transitioning' )
		.one( transitionend(), (  ) => {
			console.log( 'Transition complete!' );
		};
	```
 */

/* eslint-env browser, amd */

'use strict';


const test = function( props ) {
	const el = document.createElement( 'span' );

	for ( const prop in props ) {
		if ( typeof el.style[prop] !== 'undefined' ) {
			return props[prop];
		}
	}

	return false;
};


const AnimationEvents = {};


// Transition end
const transEndEventNames = {
	transition       : 'transitionend',
	WebkitTransition : 'webkitTransitionEnd',
	MozTransition    : 'transitionend',
	OTransition      : 'oTransitionEnd',
	msTransition     : 'MSTransitionEnd',
};

AnimationEvents.transitionEndEventName = function() {
	return test( transEndEventNames );
};


// Animation end
const animationEndEventNames = {
	animation       : 'animationend',
	WebkitAnimation : 'webkitAnimationEnd',
	MozAnimation    : 'animationend',
	OAnimation      : 'oanimationend',
	msAnimation     : 'MSAnimationEnd',
};

AnimationEvents.animationEndEventName = function() {
	return test( animationEndEventNames );
};


// Animation iteration end
// The `animationiteration` event is fired when an iteration of an animation ends.
// This event does not occur for animations with an animation-iteration-count of one.
// https://developer.mozilla.org/en-US/docs/Web/Events/animationiteration
const animationIterationEventNames = {
	animation       : 'animationiteration',
	WebkitAnimation : 'webkitAnimationIteration',
	MozAnimation    : 'animationiteration',
	OAnimation      : 'oAnimationIteration',
	msAnimation     : 'MSAnimationIteration',
};

AnimationEvents.animationIterationEventName = function() {
	return test( animationIterationEventNames );
};


// UMD export (`returnExports.js`)
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
