// Get element's distance from the top
var getElemDistance = function(elem) {
    var location = 0;
    if (elem.offsetParent) {
        do {
            location += elem.offsetTop;
            elem = elem.offsetParent;
        } while (elem);
    }
    return location >= 0 ? location : 0;
};

// Usage

var element = document.querySelector(selectors);
getElemDistance(element);
