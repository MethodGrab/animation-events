# CSS Animation Event Names
> Find the (prefixed) JavaScript event names for CSS animations & transitions supported by the current browser.


## Install
```bash
npm install --save @methodgrab/animation-events
```


## Example:
```js
const animEvents = require( '@methodgrab/animation-events' );

// get & cache the prefixed event names
const transitionEnd         = animEvents.transitionEndEventName();
const animationEnd          = animEvents.animationEndEventName();
const animationIterationEnd = animEvents.animationIterationEventName();

$( '.el' )
	.addClass( 'is-transitioning' )
	.one( transitionEnd, (  ) => {
		console.log( 'Transition complete!' );
		$( '.el' ).removeClass( 'is-transitioning' );
	};
```
