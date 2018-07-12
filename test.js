import test from 'ava';
import valueToType from '.';

test('value to type', t => {
	t.is(valueToType('unicorns'), 'string');
	t.is(valueToType(1), 'number');
	t.is(valueToType(() => {}), 'function');
	t.is(valueToType(), 'undefined');
	t.deepEqual(valueToType(['unicorns']), ['string']);
	t.deepEqual(valueToType([
		{rainbow: 'unicorns'},
		{rainbow: 'cats'}
	]), [{rainbow: 'string'}]);
});
