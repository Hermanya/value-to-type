'use strict';

const valueToType = value => {
	if (Array.isArray(value)) {
		return [valueToType(value[0])];
	}
	if (typeof value === 'object') {
		return Object.keys(value).reduce(
			(newObject, key) => {
				newObject[key] = valueToType(value[key]);
				return newObject;
			},
			{},
		);
	}
	return typeof value;
};

module.exports = valueToType;
