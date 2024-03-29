/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var noop = require( '@stdlib/utils-noop' );
var Float64Array = require( '@stdlib/array-float64' );
var bifurcateBy = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof bifurcateBy, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a collection', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {},
		/.*/,
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			bifurcateBy( value, noop );
		};
	}
});

tape( 'the function throws an error if not provided a predicate function (no options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		/.*/,
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			bifurcateBy( [ 1, 2, 3 ], value );
		};
	}
});

tape( 'the function throws an error if not provided a predicate function (options)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		/.*/,
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			bifurcateBy( [ 1, 2, 3 ], {}, value );
		};
	}
});

tape( 'the function throws an error if provided an invalid options argument', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		function noop() {},
		/.*/,
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			bifurcateBy( [ 1, 2, 3 ], value, noop );
		};
	}
});

tape( 'the function throws an error if provided an invalid option', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		function noop() {},
		/.*/,
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var opts = {
				'returns': value
			};
			bifurcateBy( [ 1, 2, 3 ], opts, noop );
		};
	}
});

tape( 'the function splits collection elements into two groups according to a predicate function', function test( t ) {
	var expected;
	var out;
	var arr;

	function predicate( v ) {
		return v[ 0 ] === 'b';
	}

	arr = [ 'beep', 'boop', 'foo', 'bar' ];

	expected = [
		[ 'beep', 'boop', 'bar' ],
		[ 'foo' ]
	];
	out = bifurcateBy( arr, predicate );

	t.deepEqual( out, expected, 'returns expected groups' );
	t.end();
});

tape( 'the function splits collection elements into two groups according to a predicate function (values)', function test( t ) {
	var expected;
	var opts;
	var out;
	var arr;

	function predicate( v ) {
		return v[ 0 ] === 'b';
	}

	arr = [ 'beep', 'boop', 'foo', 'bar' ];

	opts = {
		'returns': 'values'
	};

	expected = [
		[ 'beep', 'boop', 'bar' ],
		[ 'foo' ]
	];
	out = bifurcateBy( arr, opts, predicate );

	t.deepEqual( out, expected, 'returns expected groups' );
	t.end();
});

tape( 'the function splits collection elements into two groups according to a predicate function (indices)', function test( t ) {
	var expected;
	var opts;
	var out;
	var arr;

	function predicate( v ) {
		return v[ 0 ] === 'b';
	}

	arr = [ 'beep', 'boop', 'foo', 'bar' ];

	opts = {
		'returns': 'indices'
	};

	expected = [
		[ 0, 1, 3 ],
		[ 2 ]
	];
	out = bifurcateBy( arr, opts, predicate );

	t.deepEqual( out, expected, 'returns expected groups' );
	t.end();
});

tape( 'the function splits collection elements into two groups according to a predicate function (pairs)', function test( t ) {
	var expected;
	var opts;
	var out;
	var arr;

	function predicate( v ) {
		return v[ 0 ] === 'b';
	}

	arr = [ 'beep', 'boop', 'foo', 'bar' ];

	opts = {
		'returns': '*'
	};

	expected = [
		[ [ 0, 'beep' ], [ 1, 'boop' ], [ 3, 'bar' ] ],
		[ [ 2, 'foo' ] ]
	];
	out = bifurcateBy( arr, opts, predicate );

	t.deepEqual( out, expected, 'returns expected groups' );
	t.end();
});

tape( 'the function splits collection elements into two groups according to a predicate function (typed array)', function test( t ) {
	var expected;
	var opts;
	var out;
	var arr;

	function predicate( v ) {
		return ( v === 0.0 );
	}

	arr = new Float64Array( [ 0.0, 1.0, 1.0, 0.0 ] );

	opts = {
		'returns': 'values'
	};

	expected = [
		[ 0.0, 0.0 ],
		[ 1.0, 1.0 ]
	];
	out = bifurcateBy( arr, opts, predicate );

	t.deepEqual( out, expected, 'returns expected groups' );
	t.end();
});

tape( 'the function splits collection elements into two groups according to a predicate function (array-like object)', function test( t ) {
	var expected;
	var opts;
	var out;
	var arr;

	function predicate( v ) {
		return v[ 0 ] === 'b';
	}

	arr = {
		'length': 4,
		'0': 'beep',
		'1': 'boop',
		'2': 'foo',
		'3': 'bar'
	};
	opts = {
		'returns': 'values'
	};

	expected = [
		[ 'beep', 'boop', 'bar' ],
		[ 'foo' ]
	];
	out = bifurcateBy( arr, opts, predicate );

	t.deepEqual( out, expected, 'returns expected groups' );
	t.end();
});

tape( 'the function supports providing an execution context', function test( t ) {
	var expected;
	var opts;
	var ctx;
	var out;
	var arr;

	function predicate( v ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		return ( v === 0.0 );
	}

	ctx = {
		'count': 0
	};

	arr = [ 0.0, 1.0, 1.0, 0.0 ];

	opts = {
		'thisArg': ctx
	};
	expected = [
		[ 0.0, 0.0 ],
		[ 1.0, 1.0 ]
	];
	out = bifurcateBy( arr, opts, predicate );

	t.deepEqual( out, expected, 'returns expected groups' );
	t.strictEqual( ctx.count, 4, 'updates context' );

	t.end();
});

tape( 'the function invokes the predicate function with both the collection element and the element index', function test( t ) {
	var expected;
	var out;
	var arr;

	function predicate( v, i ) {
		return ( i < 2 );
	}

	arr = [ 5, 5, 1, 1 ];

	expected = [
		[ 5, 5 ],
		[ 1, 1 ]
	];
	out = bifurcateBy( arr, predicate );

	t.deepEqual( out, expected, 'returns expected groups' );
	t.end();
});

tape( 'if provided an empty collection, the function returns an empty array', function test( t ) {
	var expected;
	var out;
	var arr;

	function predicate( v ) {
		return v[ 0 ] === 'b';
	}

	arr = [];
	expected = [];

	out = bifurcateBy( arr, predicate );

	t.deepEqual( out, expected, 'returns expected results' );
	t.end();
});

tape( 'if provided an empty collection, the function returns an empty array (values)', function test( t ) {
	var expected;
	var opts;
	var out;
	var arr;

	function predicate( v ) {
		return v[ 0 ] === 'b';
	}

	arr = [];
	expected = [];

	opts = {
		'returns': 'values'
	};

	out = bifurcateBy( arr, opts, predicate );

	t.deepEqual( out, expected, 'returns expected results' );
	t.end();
});

tape( 'if provided an empty collection, the function returns an empty array (indices)', function test( t ) {
	var expected;
	var opts;
	var out;
	var arr;

	function predicate( v ) {
		return v[ 0 ] === 'b';
	}

	arr = [];
	expected = [];

	opts = {
		'returns': 'indices'
	};

	out = bifurcateBy( arr, opts, predicate );

	t.deepEqual( out, expected, 'returns expected results' );
	t.end();
});

tape( 'if provided an empty collection, the function returns an empty array (pairs)', function test( t ) {
	var expected;
	var opts;
	var out;
	var arr;

	function predicate( v ) {
		return v[ 0 ] === 'b';
	}

	arr = [];
	expected = [];

	opts = {
		'returns': '*'
	};

	out = bifurcateBy( arr, opts, predicate );

	t.deepEqual( out, expected, 'returns expected results' );
	t.end();
});
