
function getClsName(cls,parentID){
    var oParent = parentID?document.getElementById(parentID) : document;
    var elements = oParent.getElementsByTagName('*');
    var eleArr = [];

    for(i=0; i<elements.length; i++){
        if(elements[i].className == cls){
            eleArr.push(this);
        }
    }
   return eleArr;
}

