var eventUtil={
         	// 添加句柄
         	addHandler:function(element,type,handler){
               if(element.addEventListener){
                 element.addEventListener(type,handler,false);
               }else if(element.attachEvent){
                 element.attachEvent('on'+type,handler);
               }else{
                 element['on'+type]=handler;
               }
         	},
         	// 删除句柄
         	removeHandler:function(element,type,handler){
               if(element.removeEventListener){
                 element.removeEventListener(type,handler,false);
               }else if(element.detachEvent){
                 element.detachEvent('on'+type,handler);
               }else{
                 element['on'+type]=null;
               }
         	},
          //获取DOM 对象 还是IE对象  是event还是window.event
          getEvent:function(event){
            return event?event:window.event;
          },
          //获取事件类型
          getType:function(event){
            return event.type;
          },
          //获取事件目标
          getElement:function(event){
            return event.target || event.srcElement;
          },
          //阻止默认行为 例如：a标签 中href 链接跳转 ，用这个方法不会跳转
          preventDefault:function(event){
            if(event.preventDefault){
              event.preventDefault();
            }else{
              event.returnValue=false;
            }
          },
          // 阻止冒泡行为
         stopPropagation:function(event){
           if(event.stopPropagation){
             event.stopPropagation();
           }else{
             event.cancelBubble=true;
           }
         }
  }