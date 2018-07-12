# Value to Type [![Build Status](https://travis-ci.org/hermanya/value-to-type.svg?branch=master)](https://travis-ci.org/hermanya/value-to-type)

>


## Install

```shell
npm install value-to-type
```


## Usage

```js
const valueToType = require('value-to-type');

valueToType('unicorns');
//=> 'string'
```


## API

### valueToType(value)

#### input

Type: `any`

For example:

```js
[{rainbow: 'unicorns'}, {rainbow: 'cats'}]
```

Output:

```js
[{rainbow: 'string'}]
```

## License

MIT © [Herman](https://github.com/hermanya)
