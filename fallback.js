/*jslint browser: true*/
(function () {
    'use strict';

    ////////////
    // jQuery //
    ////////////

    // function toggleClass() {
    //     var t = parseInt($(this).index()) + 1,
    //         p = parseInt($(this).parent('tr').index()) + 1;

    //     $([])
    //         .add('td:nth-child(' + t + ')')
    //         .add('tr:nth-child(' + p + ')')
    //         .toggleClass('highlighted');
    // }

    // $('td').hover(toggleClass, toggleClass);

    ///////////////
    // VanillaJS //
    ///////////////

    var cells = Array.prototype.slice.call(document.querySelectorAll("td, th")),
        rows  = Array.prototype.slice.call(document.querySelectorAll("tr")),
        index = function (cell) {
            var siblings = cell.parentNode.childNodes,
                num = 0,
                i;

            for (i = 0; i < siblings.length; i += 1) {
                if (siblings[i] === cell) {
                    return num;
                }
                if (siblings[i].nodeType === 1) {
                    num += 1;
                }
            }
        };

    cells.forEach(function (cell) {
        cell.addEventListener('mouseover', function () {
            var cellIndex = index(cell);

            rows.forEach(function (row) {
                var cell = row.querySelectorAll('td, th')[cellIndex];

                cell['data-background-color'] = cell.style.backgroundColor;
                cell.style.backgroundColor = 'rgba(200, 200, 0, .6)';
            });
        }, true);

        cell.addEventListener('mouseout', function () {
            var cellIndex = index(cell);

            rows.forEach(function (row) {
                var cell = row.querySelectorAll('td, th')[cellIndex];

                cell.style.backgroundColor = cell['data-background-color'];
            });
        }, true);
    });
}());