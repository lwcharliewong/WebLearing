function styleHeaderSiblings(tag, theclass) {
  var elems = document.getElementsByTagName(tag);
  var elem;
  for(var i = 0; i < elems.length; i++){
    elem = getNextElement(elems[i].nextSibling);
    addClass(elem, theclass);
  }
}
function getNextElement(node) {
  if(node.nodeType === 1) {
	return node;
  }
  if (node.nextSibling) {
    return getNextElement(node.nextSibling);
  }
  return null;
}

function addClass(element, value){
  if(!element.className){
    element.className = value;
  }else{
    var newClassName = element.className + " " + value;
    element.className = newClassName;
  }

}
addLoadEvent(function (){
  styleHeaderSiblings("h1", "intro");
});