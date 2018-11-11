
# Flatten-N
- [Use cases](#use-cases)
- [Using](#using-in-project)
- [Testing](#testing)



## Use cases
A function for flattening nested arrays of numbers into one array. <br />
For using in Node.JS / Web enviroments.

### Example:
```javascript
flatten([[1,2,[3]],4])
```
will result
```javascript
[1,2,3,4]
```

## Using in project
CommonsJS style:
```javascript
const flatten = require('/path/to/module/flatten')

flatten(array: Array[Number|Array])
```

ES6 style:
```javascript
import flatten from '/path/to/module/flatten'

flatten(array: Array[Number|Array])
```


## Testing
- `yarn install` - install test enviroment
- `yarn test` - run test
