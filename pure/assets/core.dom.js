(function (App, Core) {
    "use strict";

    function Dom(elements) {
        this.elements = elements instanceof Array ? elements : [document];
    }

    Dom.prototype = Core.inherit(Object.prototype);

    /* Filter odd elements */
    Dom.prototype.odd = function () {
        var i,
            elements = [];

        for (i = 0; i < this.elements.length; i += 1) {
            if (i % 2 !== 0) {
                elements.push(this.elements[i]);
            }
        }
        return new Dom(elements);
    };

    /* Filter even elements */
    Dom.prototype.even = function () {
        var i,
            elements = [];

        for (i = 0; i < this.elements.length; i += 1) {
            if (i % 2 === 0) {
                elements.push(this.elements[i]);
            }
        }
        return new Dom(elements);
    };

    /* Find dom elements by tag */
    Dom.prototype.tag = function (tag) {
        var i,
            j,
            elements = [];

        for (i = 0; i < this.elements.length; i += 1) {

            var childs = this.elements[i].getElementsByTagName(tag);

            for (j = 0; j < childs.length; j += 1) {
                elements.push(childs[j]);
            }
        }
        return new Dom(elements);
    };

    /* Add class for current elements */
    Dom.prototype.addClass = function (value) {

        var i;

        if (typeof value === "string" && value) {
            for (i = 0; i < this.elements.length; i += 1) {
                var element = this.elements[i];
                var classNames = element.className.split(' ');
                classNames.push(value);
                element.className = classNames.join(' ');
            }
        }
    };

    App.Dom = Dom;

}(App, App.Core));