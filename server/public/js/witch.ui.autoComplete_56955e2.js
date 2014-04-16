/**
 * autoComplete UI的实现，使用方法参考demo
 * @Version 0.2
 * @Author: 左盐(huabinglan@163.com)
 * @Date: 14-1-2 下午6:05
 */
;(function($) {

    $.fn.witchAuto = function(options) {

        var defaults = {
            class: "f-autocmp",//默认标题选中样式
            cp: 5,//默认正文区样式
            ajaxUrl: undefined,//通过ajax加载内容，此为ajax获取数据的地址，暂不支持JSONP，提交方法为POST//默认为不通过ajax,
					 cfun: undefined,
				   jsonData: undefined,
					 col: 'name'
        }

      var options = $.extend(defaults, options);
			if(options.jsonData) {
				options.jsonData = options.jsonData.data('gd');
			}
			var o = this;
			var op = this.parent();
			var oOffset = o.offset();
			var opOffset = op.offset();
			var left ='left:' + (oOffset.left - opOffset.left) + 'px;';
			var top = 'top:' + (oOffset.top - opOffset.top + o.height() + 5) + 'px;';
			if(op.is('td')) {
				left = '';
				top = '';
			}
			var ul = $('<ul class="' + options.class + '" style="width:' + o.width() + 'px;display:none;'+ left + top +'z-index:1000;" tabindex="1"></ul>');
			op.append(ul);
			/** input 绑定失去焦点事件 **/
			o.bind('blur',function() {setTimeout(function(){
				if(ul.find('li:focus').length == 0 ) {
					ul.css('display','none');
				}
			},150)});

			/** li 绑定失去焦点事件 **/
			function liBlur() {
				setTimeout(function(){
				if(ul.find('li:focus').length == 0 && !o.is(":focus")) {
					ul.css('display','none');
				}},200);
			}


			function keyDownUp(obj,e) {
				if($.trim(o.val()) =='') {
					return;
				}
				if(e.keyCode == 40) {//按下下箭头
					return;
				}
				if(!options.jsonData && options.jsonData != '') {
					$.ajax({
						type: "post",
						url: options.ajaxUrl,
						data: 'val='+ $.trim(o.val()),
						dataType:'json',
						success: function(msg) {
							if(msg != '') {
								var li='';
								for(var dk in msg) {
									li += '<li tabindex="1">' + msg[dk][options.col] + '</li>'
								}
								ul.children().remove();
								ul.append(li);
								ul.find('li').bind('blur',function() {liBlur();})
								ul.css("display","block");
								ul.children().bind('click', function() {
									o.val($(this).text());
									if(options.cfun != undefined) {
										options.cfun($.trim($(this).text()),obj);
									}
									ul.css("display", "none");
								});
							}
						}
					});
				}
				else {
					var msg =options.jsonData;
					var li='';
					var colarray = options.col.split(',');
					var collength = colarray.length;
					if(collength > 1) {
						for(var i=0; i<collength; i++) {
							li += '<li tabindex="1">'+msg[0][colarray[i]]+'</li>'
						}
					}
					else {
						for(var dk in msg) {
							li += '<li tabindex="1" id="'+msg[dk].id+'">'+msg[dk][options.col]+'</li>'
						}
					}

					ul.children().remove();
					ul.append(li);
					li.bind('blur',function() {liBlur();})
					ul.css("display","block");
					ul.children().bind('click', function() {
						o.val($(this).text());
						if(options.cfun != undefined) {
							options.cfun($.trim($(this).text()),obj);
						}
						ul.css("display", "none");
					});
				}
			}

			/* 绑定箭头事件 */
			function jianTou(e) {
				if(e.keyCode == 40) {//按下下箭头
					ul.find('li:eq(0)').focus();
					console.log(ul.find('li:eq(0)').html());

				}
			}
			if(options.jsonData != undefined && options.jsonData != '') {
				keyDownUp(op);
				ul.css("display", "block");
			}

			o.bind('keyup',function(e) {keyDownUp(op,e);});
			o.bind('keydown',function(e) {jianTou(e);});

    };

})(jQuery);