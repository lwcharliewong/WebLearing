function displayAbbreviations() {
    if (!document.getElementsByTagName
        || !document.createElement
        || !document.createTextNode)
        return false;
    //取得所有缩略词
    var abbreviations = document.getElementsByTagName("abbr");
    if (abbreviations.length < 1) return false;
    var defs = [];
    //遍历这些缩略词
    for (var i = 0; i < abbreviations.length; i++) {
        var current_abbr = abbreviations[i];
        if(current_abbr.childNodes.length < 1) continue;
        var definition = current_abbr.getAttribute("title");
        var key = current_abbr.firstChild.nodeValue;
        defs[key] = definition;
    }
    //创建定义列表
    var dlist = document.createElement("dl");
    //遍历定义
    for (key in defs) {
        var definition = defs[key];
        //创建定义标题
        var def_title = document.createElement("dt");
        var dt_text = document.createTextNode(key);
        def_title.appendChild(dt_text);
        //创建定义描述
        var def_desc = document.createElement("dd");
        var dd_text = document.createTextNode(definition);
        def_desc.appendChild(dd_text);
        //把它们添加到定义列表
        dlist.appendChild(def_title);
        dlist.appendChild(def_desc);
    }

    if(dlist.childNodes.length < 1) return false;

    //创建标题
    var header = document.createElement("h2");
    var header_text = document.createTextNode("Abbreviations");
    header.appendChild(header_text);

    //把标题添加到页面主体
    document.body.appendChild(header);
    //把定义列表添加到页面主体
    document.body.appendChild(dlist);
}

addLoadEvent(displayAbbreviations);