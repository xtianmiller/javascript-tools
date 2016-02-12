// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

// Alternate / Improved method
// https://github.com/rhysbrettbowen/debounce

var debounce = function(func, wait) {
    var timeout, args, context, timestamp;
    return function() {
        context = this;
        args = [].slice.call(arguments, 0);
        timestamp = new Date();
        var later = function() {
            var last = (new Date()) - timestamp;
            if (last < wait) {
                timeout = setTimeout(later, wait - last);
            } else {
                timeout = null;
                func.apply(context, args);
            }
        };
        if (!timeout) {
            timeout = setTimeout(later, wait);
        }
    }
};

// Usage
var myEfficientFn = debounce(function() {
    // All the taxing stuff you do
}, 250);

window.addEventListener('resize', myEfficientFn);
