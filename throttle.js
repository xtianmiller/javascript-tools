// Returns a function, that, when invoked, will only be triggered at most once
// during a given window of time.
var throttle = function(callback, limit) {
    var wait = false;
    return function() {
        if (!wait) {
            callback.call();
            wait = true;
            setTimeout(function() {
                wait = false;
            }, limit);
        }
    };
};

// Usage
var myEfficientFn = throttle(function() {
	// All the taxing stuff you do
}, 250);

window.addEventListener('scroll', myEfficientFn);
