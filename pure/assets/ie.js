(function(){
    "use strict";

    (new Dom()).tag('tbody').tag('tr').even().addClass('odd');
    (new Dom()).tag('tbody').tag('tr').odd().addClass('even');
    (new Dom()).tag('thead').tag('th').even().addClass('odd');

})();

