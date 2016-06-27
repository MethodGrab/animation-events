(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.animEvents = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Get the prefixed version of CSS animation events
// http://stackoverflow.com/questions/2794148/css3-transition-events
// http://callmenick.com/post/cross-browser-transition-animation-events-modernizr

'use strict';

// :: ( props: object ) → string|bool
// Check to see if a given prefix is supported by the browser

var test = function test(props) {
	var el = document.createElement('span');

	for (var prop in props) {
		if (typeof el.style[prop] !== 'undefined') {
			return props[prop];
		}
	}

	return false;
};

var AnimationEvents = module.exports = {};

// Transition end
var transEndEventNames = {
	transition: 'transitionend',
	WebkitTransition: 'webkitTransitionEnd',
	MozTransition: 'transitionend',
	OTransition: 'oTransitionEnd',
	msTransition: 'MSTransitionEnd'
};

AnimationEvents.transitionEndEventName = function () {
	return test(transEndEventNames);
};

// Animation end
var animationEndEventNames = {
	animation: 'animationend',
	WebkitAnimation: 'webkitAnimationEnd',
	MozAnimation: 'animationend',
	OAnimation: 'oanimationend',
	msAnimation: 'MSAnimationEnd'
};

AnimationEvents.animationEndEventName = function () {
	return test(animationEndEventNames);
};

// Animation iteration
// The `animationiteration` event is fired when an iteration of an animation ends.
// This event does not occur for animations with an animation-iteration-count of one.
// https://developer.mozilla.org/en-US/docs/Web/Events/animationiteration
var animationIterationEventNames = {
	animation: 'animationiteration',
	WebkitAnimation: 'webkitAnimationIteration',
	MozAnimation: 'animationiteration',
	OAnimation: 'oAnimationIteration',
	msAnimation: 'MSAnimationIteration'
};

AnimationEvents.animationIterationEventName = function () {
	return test(animationIterationEventNames);
};

},{}]},{},[1])(1)
});