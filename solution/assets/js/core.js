var App = {};

(function (App) {
    "use strict";

    /* IE8- doesn`t support Object.create -> create function with same behavior */
    var inherit = Object.create || function (proto) {
        function Constructor() {}
        Constructor.prototype = proto;
        return new Constructor();
    };

    App.Core = {
        'inherit' : inherit
    };

}(App));