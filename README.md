# CSS Animation Event Names [![Build Status](https://travis-ci.org/MethodGrab/animation-events.svg?branch=master)](https://travis-ci.org/MethodGrab/animation-events)
> Find the (prefixed) JavaScript event names for CSS animations & transitions supported by the current browser.


## Install
```bash
npm install --save @methodgrab/animation-events
```


## Example:
```js
const animEvents = require( '@methodgrab/animation-events' );

// get & cache the prefixed event names
const transitionEnd      = animEvents.transitionEndEventName();
const animationEnd       = animEvents.animationEndEventName();
const animationIteration = animEvents.animationIterationEventName();

$( '.el' )
	.addClass( 'is-transitioning' )
	.one( transitionEnd, (  ) => {
		console.log( 'Transition complete!' );
		$( '.el' ).removeClass( 'is-transitioning' );
	};
```


## API

### `transitionEndEventName()`
→ `string`  
Find the (prefixed) [`transitionend`](https://developer.mozilla.org/en-US/docs/Web/Events/transitionend) event name.  
The `transitionend` event is fired when a CSS transition has completed.


### `animationEndEventName()`
→ `string`  
Find the (prefixed) [`animationend`](https://developer.mozilla.org/en-US/docs/Web/Events/animationend) event name.  
The `animationend` event is fired when a CSS animation has completed.


### `animationIterationEventName()`
→ `string`  
Find the (prefixed) [`animationiteration`](https://developer.mozilla.org/en-US/docs/Web/Events/animationiteration) event name.  
The `animationiteration` event is fired when **an iteration** of an animation ends.
