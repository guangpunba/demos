/**
 * Created by aa on 2015/2/9.
 */
;(function($){
    //消息提示插件
    //调用代码:
    //msgText.init(text,timer)
    //text：提示框显示文本,类型String
    //timer:提示框显示时间,不设置为永久显示 单位为毫秒ms
    msg = function(text,timer){
        var msgText={
            init:function(){
                var _cssText="position: fixed;top: 50%;margin: 0 auto; text-align:center;background: rgba(0, 0, 0, 0.63);color: #fff;padding: 2px 15px;left: 50%;margin:-16px 0 0 -85px;line-height: 2;border-radius: 5px;width: 170px;-webkit-transition:all 0.3s linear;transition:all 0.3s linear;-webkit-box-sizing:border-box;box-sizing:border-box;";
                this.oP=document.createElement("p");
                this.oP.innerHTML=text;
                this.setCss(_cssText);
                this.show();
                timer&&(this.hide(timer));
            },
            show:function(){
                document.body.appendChild(this.oP);
            },
            hide:function(timer){
                var _this=this;
                setTimeout(function(){
                    _this.oP.style.opacity="0";
                    setTimeout(function(){
                        document.body.removeChild(_this.oP);
                    },300)
                },timer)
            },
            setCss:function(_csstext){
                this.oP.style.cssText=_csstext;
            }
        }
        return msgText.init(text,timer)
    }

    tipBox = function(cfg){
        function TipBox(){
            this.config = {
                width          : 180,
                height         : 150,
                str            : '正在处理',
                windowDom      : window,
                setTime        : 0,
                hasMask        : true,
                hasMaskWhite   : false,
                clickDomCancel : false,
                callBack       : null,
                type           : 'success'
            }
            $.extend(this.config,cfg);

            //存在就retrun
            if(TipBox.prototype.boundingBox) return;

            //初始化
            this.render(this.config.type);
            return this;
        };

        //外层box
        TipBox.prototype.boundingBox = null;

        //渲染
        TipBox.prototype.render = function(tipType,container){
            this.renderUI(tipType);

            //绑定事件
            this.bindUI();

            //初始化UI
            this.syncUI();
            $(container || this.config.windowDom.document.body).append(TipBox.prototype.boundingBox);
        };

        //渲染UI
        TipBox.prototype.renderUI = function(tipType){
            TipBox.prototype.boundingBox = $("<div id='animationTipBox'></div>");
            tipType == 'load'    && this.loadRenderUI();
            tipType == 'success' && this.successRenderUI();
            tipType == 'error'   && this.errorRenderUI();
            tipType == 'tip'     && this.tipRenderUI();
            TipBox.prototype.boundingBox.appendTo(this.config.windowDom.document.body);

            //是否显示遮罩
            if(this.config.hasMask){
                this.config.hasMaskWhite ? this._mask = $("<div class='mask_white'></div>") : this._mask = $("<div class='mask'></div>");
                this._mask.appendTo(this.config.windowDom.document.body);
            }

            //定时消失
            _this = this;
            !this.config.setTime && typeof this.config.callBack === "function" && (this.config.setTime = 1);
            this.config.setTime && setTimeout( function(){ _this.close(); }, _this.config.setTime );
        };

        TipBox.prototype.bindUI = function(){
            _this = this;

            //点击空白立即取消
            this.config.clickDomCancel && this._mask && this._mask.click(function(){_this.close();});
        };
        TipBox.prototype.syncUI = function(){
            TipBox.prototype.boundingBox.css({
                width       : this.config.width+'px',
                height      : this.config.height+'px',
                marginLeft  : "-"+(this.config.width/2)+'px',
                marginTop   : "-"+(this.config.height/2)+'px'
            });
        };

        //提示效果UI
        TipBox.prototype.tipRenderUI = function(){
            var tip = "<div class='tip'>";
            tip +="		<div class='icon'>i</div>";
            tip +="		<div class='dec_txt'>"+this.config.str+"</div>";
            tip += "</div>";
            TipBox.prototype.boundingBox.append(tip);
        };

        //成功效果UI
        TipBox.prototype.successRenderUI = function(){
            var suc = "<div class='success'>";
            suc +="	<div class='icon'>";
            suc +=		"<div class='line_short'></div>";
            suc +=		"<div class='line_long'></div>	";
            suc +=  "</div>";
            suc +="	<div class='dec_txt'>"+this.config.str+"</div>";
            suc += "</div>";
            TipBox.prototype.boundingBox.append(suc);
        };

        //错误效果UI
        TipBox.prototype.errorRenderUI = function(){
            var err  = "<div class='lose'>";
            err +=	"	<div class='icon'>";
            err +=	"		<div class='icon_box'>";
            err +=	"			<div class='line_left'></div>";
            err +=	"			<div class='line_right'></div>";
            err +=	"		</div>";
            err +=	"	</div>";
            err +=	"<div class='dec_txt'>"+this.config.str+"</div>";
            err +=	"</div>";
            TipBox.prototype.boundingBox.append(err);
        };

        //加载动画load UI
        TipBox.prototype.loadRenderUI = function(){
            var load = "<div class='load'>";
            load += "<div class='icon_box'>";
            for(var i = 1; i < 4; i++ ){
                load += "<div class='cirBox"+i+"'>";
                load += 	"<div class='cir1'></div>";
                load += 	"<div class='cir2'></div>";
                load += 	"<div class='cir3'></div>";
                load += 	"<div class='cir4'></div>";
                load += "</div>";
            }
            load += "</div>";
            load += "</div>";
            load += "<div class='dec_txt'>"+this.config.str+"</div>";
            TipBox.prototype.boundingBox.append(load);
        };

        //关闭
        TipBox.prototype.close = function(){
            TipBox.prototype.destroy();
            this.destroy();
            this.config.setTime && typeof this.config.callBack === "function" && this.config.callBack();
        };

        //销毁
        TipBox.prototype.destroy = function(){
            this._mask && this._mask.remove();
            TipBox.prototype.boundingBox && TipBox.prototype.boundingBox.remove();
            TipBox.prototype.boundingBox = null;
        };

        return new TipBox();
    }
})(Zepto)