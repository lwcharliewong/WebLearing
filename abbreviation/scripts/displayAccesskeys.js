function displayAccesskeys() {
    if (!document.getElementById ||
        !document.createTextNode ||
        !document.createElement)
        return false;

    if (!document.getElementById("navigation")) return false;
    var navigation = document.getElementById("navigation");
    var links = navigation.getElementsByTagName("a");
    var accessArray = [];
    if (links.length < 1) return false;
    for (var i = 0; i < links.length; i++) {
        var current_link = links[i];
        if (current_link.childNodes.length < 1) continue;
        var key = current_link.getAttribute("accesskey");
        var value = current_link.lastChild.nodeValue;

        accessArray[key] = value;
    }

    var access_ul = document.createElement("ul");
    for (key in accessArray) {
        var access_li = document.createElement("li");
        var access_text = key + ": " + accessArray[key];
        var access_text_node = document.createTextNode(access_text);
        access_li.appendChild(access_text_node);
        access_ul.appendChild(access_li);
    }
    var header = document.createElement("h2");
    var header_text = document.createTextNode("Accesskey");
    header.appendChild(header_text);

    document.body.appendChild(header);
    document.getElementsByTagName("body")[0].appendChild(access_ul);
}

addLoadEvent(displayAccesskeys);