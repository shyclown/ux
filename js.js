// UX Google material style
var UEX = UEX || {};

UEX.init = function(){
  // find elements by specific class name
  // attach event listeners to this elements
  UEX.controledElements = document.getElementsByClassName('uex');
  UEX.appendStyles();
}
UEX.controledElement = function(el){
  this.el = el;
}
UEX.controledElement.prototype = {

  addStyle : function(style){
    this.el.classList.add(style);
  },
  clearDiv : function(){
    var el = document.createElement('DIV');
    el.className = 'ux-clear';
    if(this.el.nextSibling){
    this.el.parentNode.insertBefore(el,this.el.nextSibling);}
    else { this.el.parentNode.appendChild(el); }
  }
}

UEX.appendStyles = function(){

  var singleElement;

  var isFirstChild = function(){
    var el = singleElement.el;
    console.log(el.parentNode.children[0] == el);
    return el.parentNode.children[0] == el;

  }
  var isFirstOfType = function(){
    var el = singleElement.el;
    if(isFirstChild()){
      console.log('fc');
      singleElement.addStyle('first-child');
      singleElement.addStyle('first-of-type');
    }
    else{
      prev = el.previousElementSibling.tagName;
      curr = el.tagName;
      if(prev == 'INPUT' && curr == prev){
        if(el.previousElementSibling.type != el.type){
          singleElement.addStyle('first-of-type');
        }
      }
      else{
        if(prev != curr){
        singleElement.addStyle('first-of-type');
        }
      }
    }
  }

  if(UEX.controledElements){
    var numberOf = UEX.controledElements.length;
    for(i=0; i < numberOf; i++){
      singleElement = new UEX.controledElement(UEX.controledElements[i]);
      var tag = singleElement.el.tagName;
      isFirstOfType();
      switch (tag) {
        case 'INPUT':

          singleElement.addStyle('ux-input');
          if(singleElement.el.type == "button"){
            singleElement.clearDiv();
          }
          //check if last
          if(singleElement.el.nextElementSibling.type != singleElement.el.type){
            singleElement.addStyle('last');
          }
          break;
        case 'FORM':
            singleElement.addStyle('ux-form');
          break;
        default:

      }
    }
  }

}
