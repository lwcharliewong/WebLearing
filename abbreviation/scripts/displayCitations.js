function displayCitations() {
    if (!document.getElementsByTagName ||
        !document.createElement ||
        !document.createTextNode)
        return false;
    //取得所有引用
    var blockquotes = document.getElementsByTagName("blockquote");
    //遍历引用
    for (var i = 0; i < blockquotes.length; i++) {
        //如果没有cite继续循环
        if (!blockquotes[i].getAttribute("cite")) continue;
        //保存site属性
        var url = blockquotes[i].getAttribute("cite");
        //创建标记
        var link = document.createElement("a");
        link.setAttribute("href", url);
        var link_text = document.createTextNode("source");
        link.appendChild(link_text);
        var link_holder = document.createElement("sup");
        link_holder.appendChild(link);
        //取得引用中所有节点
        var quote_elem = blockquotes[i].getElementsByTagName("*");
        //如果没有节点继续循环
        if (quote_elem.length < 1) continue;
        //取最后一个节点
        var last_elem = quote_elem[quote_elem.length - 1];
        //把标记添加到引用中的最后一个节点
        last_elem.appendChild(link_holder);
    }

}

addLoadEvent(displayCitations);