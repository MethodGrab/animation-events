// Get the prefixed version of CSS animation events
// http://stackoverflow.com/questions/2794148/css3-transition-events
// http://callmenick.com/post/cross-browser-transition-animation-events-modernizr

'use strict';

// :: ( props: object ) → string|bool
// Check to see if a given prefix is supported by the browser
const test = ( props ) => {
	const el = document.createElement( 'span' );

	for ( const prop in props ) {
		if ( typeof el.style[prop] !== 'undefined' ) {
			return props[prop];
		}
	}

	return false;
};


// Transition end
const transitionEndEventNames = {
	transition       : 'transitionend',
	WebkitTransition : 'webkitTransitionEnd',
	MozTransition    : 'transitionend',
	OTransition      : 'oTransitionEnd',
	msTransition     : 'MSTransitionEnd',
};

export const transitionEndEventName = () => test( transitionEndEventNames );


// Animation end
const animationEndEventNames = {
	animation       : 'animationend',
	WebkitAnimation : 'webkitAnimationEnd',
	MozAnimation    : 'animationend',
	OAnimation      : 'oanimationend',
	msAnimation     : 'MSAnimationEnd',
};

export const animationEndEventName = () => test( animationEndEventNames );


// Animation iteration
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

export const animationIterationEventName = () => test( animationIterationEventNames );
