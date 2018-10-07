function setTableColor() {
    if (!document.getElementsByTagName) return false;
    //获取所有表格
    var tables = document.getElementsByTagName("table");
    var rows, odd;
    for (var i = 0; i < tables.length; i++) {
        odd = false;
        rows = tables[i].getElementsByTagName("tr");
        for (var j = 0; j < rows.length; j++) {
            if (odd === true) {
                addClass(rows[j], "odd");
                odd = false;
            } else {
                odd = !odd;
            }
        }
    }
}

function addClass(element, value) {
    if (!element.className) {
        element.className = value;
    } else {
        var newClassName = element.className + " " + value;
        element.className = newClassName;
    }
}

addLoadEvent(setTableColor);