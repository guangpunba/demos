window.onload=function(){
  var go=document.getElementById('go'),
      box=document.getElementById('box');

  eventUtil.addHandler(box,'click',function(){
  	alert('我是整个父盒子');
  });

  eventUtil.addHandler(go,'click',function(e){
  	//e=eventUtil.getEvent(e);
  	e=e || window.event;
    console.log(e);
  	alert(eventUtil.getElement(e).nodeName);
  	eventUtil.preventDefault(e);
  	eventUtil.stopPropagation(e);
  });

}