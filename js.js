// UX Google material style

var UEX = UEX || {};

UEX.init = function(){
  // find elements by specific class name
  // attach event listeners to this elements
  UEX.controledElements = document.getElementsByClassName('uex');
  console.log(UEX);
  UEX.appendStyles();
}

UEX.controledElement = function(el){
  this.el = el;
}

UEX.controledElement.prototype = {

  addStyle : function(style){
    this.el.classList.add(style);
  },
  replaceStyles : function(){
    console.log('replaceStyles');
    console.log(this.el);
  }
}

UEX.appendStyles = function(){
  if(UEX.controledElements){
    var numberOf = UEX.controledElements.length;
    for(i=0; i < numberOf; i++){
      singleElement = new UEX.controledElement(UEX.controledElements[i]);
      tag = singleElement.el.tagName;
      switch (tag) {
        case 'INPUT':
          console.log('tag :'+tag);
          singleElement.addStyle('ux-input');
          break;
        default:

      }
    }
  }
}
