(function(Dom){
    "use strict";

    var tableRows = (new Dom()).tag('tbody').tag('tr');
    var tableCols = (new Dom()).tag('thead').tag('th');

    tableRows.odd().addClass('even');
    tableRows.even().addClass('odd');
    tableCols.even().addClass('odd');

})(App.Dom);