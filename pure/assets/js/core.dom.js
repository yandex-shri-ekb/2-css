(function (App, Core) {
    "use strict";

    function Dom(elements) {
        this.elements = elements instanceof Array ? elements : [elements instanceof Object ? elements : document];
    }

    Dom.prototype = Core.inherit(Object.prototype);

    /* Filter elements by filter function */
    Dom.prototype.filter = function filter(rule) {
        var elements = [],
            elementsIterator,
            elementsLength = this.elements.length;

        for (elementsIterator = 0; elementsIterator < elementsLength; elementsIterator += 1) {
            if (rule(elementsIterator)) {
                elements.push(this.elements[elementsIterator]);
            }
        }
        return new Dom(elements);
    };

    /* Filter odd elements */
    Dom.prototype.odd = function () {
        return this.filter(function (i) { return (i % 2 !== 0); });
    };

    /* Filter even elements */
    Dom.prototype.even = function () {
        return this.filter(function (i) { return (i % 2 === 0); });
    };

    /* Find dom elements by tag */
    Dom.prototype.tag = function (tag) {
        var elements = [],
            elementsIterator,
            elementsLength = this.elements.length,
            childs,
            childIterator,
            childsLength;

        for (elementsIterator = 0; elementsIterator < elementsLength; elementsIterator += 1) {

            childs = this.elements[elementsIterator].getElementsByTagName(tag);

            for (childIterator = 0, childsLength = childs.length; childIterator < childsLength; childIterator += 1) {
                elements.push(childs[childIterator]);
            }
        }
        return new Dom(elements);
    };

    /* Check for class */
    Dom.prototype.hasClass = function (className) {
        return new RegExp('(\\s|^)' + className + '(\\s|^)').test(this.elements[0].className);
    };

    /* Add class for current elements */
    Dom.prototype.addClass = function (className) {
        var element,
            elementsIterator,
            elementsLength = this.elements.length;

        if (typeof className === "string" && className) {

            for (elementsIterator = 0; elementsIterator < elementsLength; elementsIterator += 1) {
                element = this.elements[elementsIterator];
                if (!(new Dom(element)).hasClass(className)) {
                    element.className += (element.className ? ' ' : '') + className;
                }
            }
        }
    };

    App.Dom = Dom;

}(App, App.Core));