$(function(){
	var tr = $('#cartTable > tbody > tr');
	var selectedTotal = $('#selectedTotal');
	var priceTotal = $('#priceTotal');
	var selectedViewList = $('#selectedViewList');
	var check = $('.check');
	var checkAll = $('.check-all');
	var checkOne = $('.check-one');

	function getTotal(){
		var seleted = 0;
        var price = 0;
        var HTMLstr = '';
        tr.each(function(i){
        	var checkOne = $(this).find('.check-one');
        	if(checkOne.is(':checked')){
        		$(this).addClass('on');
        		var imgSrc = $(this).find('img').attr('src');
        		seleted += parseInt($(this).find('.count-input').val());
        		price += parseFloat($(this).find('.subtotal').text());
        		HTMLstr += '<div><img src="'+imgSrc+'"><span class="del" data-id='+ i +'>取消选择</span></div>';
        	}else{
        		$(this).removeClass('on');
        	}
        })
        selectedTotal.text(seleted);
        priceTotal.text(price.toFixed(2));
        selectedViewList.html(HTMLstr);

        if(seleted == 0){
        	$('#foot').removeClass('show');
        }
	}


	checkOne.click(function(){
	    var flag=true;
        checkOne.each(function(){
			if(!this.checked){
				 flag = false;
			}
	    });

	    if( flag ){
			 checkAll.attr('checked', true );
	    }else{
			 checkAll.attr('checked', false );
	    }
		getTotal()
	})
	//全选
	checkAll.click(function(){
		if (this.checked) {
			check.attr('checked',true);
			getTotal()
		}else{
			check.attr('checked',false);
			getTotal()
		};
		
	})
	//显示选中div
	$('#selected').toggle(function(){
		if(selectedTotal.text() == 0){
			$('#foot').removeClass('show');
		}else{
			$('#foot').addClass('show');
		}
	},function(){
		$('#foot').removeClass('show');
	})

	selectedViewList.click(function(e){
		e = e || window.event;
		var del = e.srcElement;
		if (!del) {
	       del = e.target;
	    }
		if(del.className == 'del'){
			var index = del.getAttribute('data-id');
			var input = tr.eq(index).find('.check-one');
			input.attr('checked',false);
			getTotal()
		}
	})
	
	tr.each(function(){
		$(this).click(function(e){
			e = e || window.event;
			var el = e.srcElement;
			if (!el) {
		       el = e.target;
		    }
			var cls = el.className;
		    var input = $(this).find('.count-input');
		    var val = parseInt(input.val());
		    var reduce = $(this).find('.reduce');
		    var price = $(this).find('.price');
		    var subtotal = $(this).find('.subtotal');

		    switch (cls){
		    	//加一
		    	case 'add':
		    		val++;
		    		input.val(val);
		    		input.attr('value',val);
		    		reduce.html('-');
		    		var zj = val * parseFloat(price.text());
		    		subtotal.html(zj.toFixed(2));
		    	    break;
		    	//减一
		    	case 'reduce':
		    		if(val > 1){
		    			val--;
		    			input.val(val);
		    			input.attr('value',val);
		    			var zj = val * parseFloat(price.text());
		    			subtotal.html(zj.toFixed(2));
		    		}else{
		    			reduce.html('');
		    		}
		    	    break;
		    	case 'count-input':
		    		
		    		/*input.focus(function(){
		    			this.blur();   //使人无法使用文本框:
		    			

		    		})*/

		    		/*input.prop('readonly', true); //只读
		    		input.on('blur',function(){
		    			var zj = val * parseFloat(price.text());
		    			subtotal.html(zj.toFixed(2));
		    		})*/
		    	    break;
		    }
		})


	})

})

//console.log();