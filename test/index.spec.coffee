'use strict'

assert = require( 'chai' ).assert


describe 'Animation Events', ->

	it 'should be requireable', ->
		AnimEvents = require '../'
		assert.isObject AnimEvents
