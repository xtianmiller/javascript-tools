/*! foreach.js v1.1.0 | (c) 2014 @toddmotto | https://github.com/toddmotto/foreach */
var forEach = function(collection, callback, scope) {
    if (Object.prototype.toString.call(collection) === '[object Object]') {
        for (var prop in collection) {
            if (Object.prototype.hasOwnProperty.call(collection, prop)) {
                callback.call(scope, collection[prop], prop, collection);
            }
        }
    } else {
        for (var i = 0, len = collection.length; i < len; i++) {
            callback.call(scope, collection[i], i, collection);
        }
    }
};

// Usage

// Array:
forEach(['A', 'B', 'C', 'D'], function (value, index) {
    console.log(value); // A, B, C, D
    console.log(index); // 0, 1, 2, 3
});

// NodeList:
forEach(document.querySelectorAll('div'), function (value, index) {
    console.log(value); // <div>, <div>, <div>...
    console.log(index); // 0, 1, 2...
});

// Object:
forEach({ name: 'Todd', location: 'UK' }, function (value, prop, obj) {
    console.log(value); // Todd, UK
    console.log(prop); // name, location
    console.log(obj); // { name: 'Todd', location: 'UK' }, { name: 'Todd', location: 'UK' }
});
