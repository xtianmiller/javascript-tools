// Original BBC Method
if ('querySelector' in document && 'localStorage' in window && 'addEventListener' in window) {
    // Cuts the mustard
}

// Mustard with additional APIs and forEach
if ('querySelector' in document && 'addEventListener' in window && 'localStorage' in window && 'classList' in document.documentElement && Array.prototype.forEach) {
    // Cuts the mustard
    document.documentElement.className += 'js';
}

// Boolean Method
var supports = !!document.querySelector && !!window.addEventListener;
if (!supports) return;

// Alternative Return Method
if (!document.querySelector && !window.addEventListener) {
    return;
} else {
    // Cuts the mustard
    document.documentElement.className = 'js';
}

// Cutting The Mustard as a function
var cutsTheMustard = function() {
    if (document.querySelector && window.addEventListener) {
        return true;
    } else {
        return false;
    }
};

if (cutsTheMustard() === true) {
    document.documentElement.className += ' cutsthemustard';
    ...
}
