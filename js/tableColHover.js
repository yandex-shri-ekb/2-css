/*
* Плагин jQuery для выделения столбцов таблицы.
* Добавляет класс .hover всем ячейкам таблицы в столбце при наведении указателя мыши.
*
*
* Использование:
*
* $('table').tableColHover();
*
* или с указанием добавляемого класса
*
* $('table').tableColHover('myHover');
*
* */
(function(window, document, $){
    "use strict";
    $.fn.tableColHover = function(hoverClass){
        hoverClass = hoverClass || 'hover';
        $(this).find('tr').each(function(rowIndex, row){
            $(row).find('td').each(function(colIndex, col){
                var cssClass = 'col' + colIndex;
                $(col).addClass(cssClass)
                        .hover(function(event){
                            $('.' + cssClass).toggleClass(hoverClass);
                            event.stopPropagation();
                        });
            });
        });
    }
})(window, window.document, jQuery);