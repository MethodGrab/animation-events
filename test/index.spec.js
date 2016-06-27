import test from 'ava';
import * as lib from '..';
import { transitionEndEventName, animationEndEventName, animationIterationEventName } from '..';


test( 'should export an object with 3 functions', t => {
	t.is( typeof lib, 'object' );
	t.is( typeof lib.transitionEndEventName, 'function' );
	t.is( typeof lib.animationEndEventName, 'function' );
	t.is( typeof lib.animationIterationEventName, 'function' );

	t.pass();
});


test( 'should support ES2015 exports', t => {
	t.is( typeof transitionEndEventName, 'function' );
	t.is( typeof animationEndEventName, 'function' );
	t.is( typeof animationIterationEventName, 'function' );

	t.pass();
});
