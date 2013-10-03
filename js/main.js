var classZebraTbl = 'zebra',
    classFillTd = 'b-board-row-hover';

window.onload = function () {
    var tables = document.getElementsByTagName('table'),
        cell;

    for (var i = 0; i < tables.length; i++) {
        if (tables[i].className !== classZebraTbl)
            continue;

        for (var r = 0; r < tables[i].rows.length; r++) {
            for (var c = 0; c < tables[i].rows[r].cells.length; c++) {
                cell = tables[i].rows[r].cells[c];

                if (cell.colSpan > 1)
                    continue;

                // add class
                cell.addClass('js-tbl-' + i + '-col-' + c);
                cell.setAttribute('data-tbl', i);
                cell.setAttribute('data-col', c);

                // hover
                cell.onmouseover = createMouseoverHandler(c, i);

                // less hover
                cell.onmouseout = createMouseoutHandler(c, i);
            }
        }
    }
}

function createMouseoverHandler(colIndex, tableIndex) {
    return function () {
        onmouseoverHandler(colIndex, tableIndex);
    }
}

function onmouseoverHandler(colIndex, tableIndex) {
    var cellsInCol = document.getElementsByClassName('js-tbl-' + tableIndex + '-col-' + colIndex);

    if (cellsInCol) {
        for (var q = 0; q < cellsInCol.length; q++) {
            cellsInCol[q].addClass(classFillTd);
        }
    }
}

function createMouseoutHandler(colIndex, tableIndex) {
    return function (event) {
        onmouseoutHandler(colIndex, tableIndex, event);
    }
}

function onmouseoutHandler(colIndex, tableIndex, event) {
    event.target = event.target || event.srcElement;
    event.relatedTarget = event.relatedTarget || event.toElement;

    var cellsInCol = document.getElementsByClassName('js-tbl-' + tableIndex + '-col-' + colIndex),
        targetColIndex = parseInt(event.target.getAttribute('data-col')),
        targetTblIndex = parseInt(event.target.getAttribute('data-tbl')),
        relatedTargetColIndex,
        relatedTargetTblIndex;

    if (event.relatedTarget) {
        relatedTargetColIndex = parseInt(event.relatedTarget.getAttribute('data-col'));
        relatedTargetTblIndex = parseInt(event.relatedTarget.getAttribute('data-tbl'));
    }

    if (targetColIndex === relatedTargetColIndex && targetTblIndex == relatedTargetTblIndex)
        return;

    if (cellsInCol) {
        for (var q = 0; q < cellsInCol.length; q++) {
            cellsInCol[q].removeClass(classFillTd);
        }
    }
}

// add own methods for class handle
HTMLElement.prototype.addClass = function (add) {
    this.className = ((this.className) ? [this.className, add].join(' ') : add);
}

HTMLElement.prototype.removeClass = function (remove) {
    var newClassNames = new Array(),
        classes = this.className.split(' ');

    for (var i = 0; i < classes.length; i++) {
        if (classes[i] !== remove) {
            newClassNames.push(classes[i]);
        }
    }

    this.className = newClassNames.join(' ');
}