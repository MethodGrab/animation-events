import test from 'ava';
import lib  from '..';

test( 'should export an object', t => {
	t.is( typeof lib, 'object' );

	t.pass();
});

test( 'should export 3 functions', t => {
	t.is( typeof lib.transitionEndEventName, 'function' );
	t.is( typeof lib.animationEndEventName, 'function' );
	t.is( typeof lib.animationIterationEventName, 'function' );

	t.pass();
});
