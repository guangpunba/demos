;(function($){
    $.fn.drag = function(options){
        var obj = options;
        this.mousedown(function(e){

            var oPanel = eval("$('#" + obj.panel + "')"); //获取面板对象

            var posX = e.clientX - oPanel.offset().left, //获取鼠标距离面板左侧距离
                posY = e.clientY - oPanel.offset().top;  //获取鼠标距离面板顶部距离
            $(document).mousemove(function(e){   //鼠标移动执行moveFn();
                moveFn(e,oPanel,posX,posY);
            });
            $(document).mouseup(function(){
                $(this).unbind('mousemove');  //卸载鼠标移动事件
                $(this).unbind('mouseup');    //卸载鼠标抬起事件
            })
        })
        function moveFn(e,oPanel,posX,posY){ //鼠标移动函数
            var l = e.clientX - posX,   //获取面板距离左侧距离
                t = e.clientY - posY,   //获取面板距离顶部距离
                maxW = $(window).width() - oPanel.width(), // 可拖拽最大宽度 = 浏览器宽度 - 面板宽度
                maxH = $(window).height() - oPanel.height(); // 可拖拽最大高度 = 浏览器高度 - 面板高度
            if(l < 0){   //如果面板距离左侧距离小于0，强制 l=0;
                l = 0;
            }else if(l > maxW){ //如果面板距离左侧距离大于最大宽度，强制 l = 最大宽度;
                l = maxW;
            }
            if(t < 0){  //如果面板距离顶部距离小于0，强制 t=0;
                t = 0;
            }else if(t > maxH){ //如果面板距离顶部距离大于最大高度，强制 h = 最大高度;
                t = maxH;
            }
            oPanel.css({'left':l ,'top':t })  //设置面板css 中 left和top值；
        }
    }
    modal = function(msg){
        var mark = '<div class="my-mark"></div>';
        var modalBox = '<div class="my-modal"><div class="my-modal-title">提示框<a href="javascript: void(0)" class="fa fa-close"></a></div><div class="my-modal-content">'+msg+'</div></div>';
        var o = {
            modalShow : function() {
                $(mark).appendTo('body').show();
                $(modalBox).appendTo('body').show();
                $('html').css({overflow:'hidden'})
            },
            modalHide : function(){
                $('.my-mark').remove();
                $('.my-modal').remove();
            }
        }
        if(mark && modalBox){
            o.modalShow();
            setTimeout(o.modalHide,5000);
        }else{
            jQuery.error = console.error;
        }
        $('.my-modal .fa-close,.my-mark').bind('click',function(){
            o.modalHide();
        })


    }


})(jQuery)