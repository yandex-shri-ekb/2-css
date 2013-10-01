window.onload = function () {
    var classZebra = 'zebra',
        tables = document.getElementsByTagName('table');

    for (var i = 0; i < tables.length; i++) {
        if (tables[i].className !== classZebra)
            continue;

        for (var r = 0; r < tables[i].rows.length; r++) {
            for (var c = 0; c < tables[i].rows[r].cells.length; c++) {
                var cell = tables[i].rows[r].cells[c];

                // не успел подсветку сделать на нативном JS, доделаю чуть позже )
            }
        }
    }
}