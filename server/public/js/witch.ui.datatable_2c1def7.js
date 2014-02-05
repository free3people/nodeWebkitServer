/**
 * datatable的实现，使用方法参考demo
 * @Version 0.2
 * @Author: 左盐(huabinglan@163.com)
 * @Date: 14-1-2 下午6:05
 */
  function witchDataTable(id,options) {

        var defaults = {
            thead: {},//默认表头
            data: {},
            search: {
                'id':'#search',
                'input':'#input',
                'url':''
            }
        }

        var options = $.extend(defaults, options);

        var _dom=$(id);
        _dom.data('line',1);

        function init() {
            var thead='<thead><tr>';
            var theadOp=options.thead;
            for(var i= 0,_l=theadOp.length; i<_l; i++) {
                thead+='<th style="width:'+theadOp[i].width+'">'+theadOp[i].name+'</th>';
            }
            thead += '<th>&nbsp;</th></tr></thead>';

            var data=options.data, line=_dom.data('line');
            thead+='<tbody>';
            for(var dk in data) {
                thead += '<tr><td>'+line+'</td><td class="uname edit">'+dk+'</td><td class="edit">'+data[dk]+'</td><td></td></tr>';
                _dom.data('line',++line);

            }
            thead+='</tbody>';
            _dom.append(thead);
            _dom.find('th').each(function(i) {//添加表单验证规则
                if(theadOp[i]) {
                     $(this).data('validate',theadOp[i].validate);
                }
            });
        }
        init();//运行初始化

        /**以下为search函数**/
        if(options.search) {//绑定search函数
            $(options.search.input).bind({
                keydown: function(){ search();},
                keyup:function(){search()}
             });
        }
        function search() {
            var val=$.trim($(options.search.input).val());
            $('.uname').each(function() {
                var o=$(this);
               if(o.text().indexOf(val) == -1) {
                   o.parent().css('display', 'none');
               }
               else {
                   o.parent().removeAttr('style');
               }
            });
        }

        /***右键菜单的方法***/
        _dom.find('tr').bind('mousedown',function(e) {
            var o=$(this);
           if( e.which === 3) {
            alert(o.html());
           }
            $('.trc').removeClass('trc');
            o.addClass('trc');
        });

    /***td的编辑方法***/
    _dom.find('.edit').bind('dblclick',function() {
        if($('.editinput').length>0) {return;}
        var o=$(this);
        editTd(o);
    });
    /***check****/
    //默认正则
    var validReg={
        mail:/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,//邮箱
        china:/^[\u0391-\uFFE5]+$/,//中文
        int:/^\d+$/,//数字
        qq:/^[1-9]*[1-9][0-9]*$/,//QQ号码
        phone:/^[1]([3]|[4]|[5]|[8])[0-9]{9}$/,//手机号码
        user:/^[a-zA-Z][a-zA-Z0-9_]{4,15}$/, //验证用户名，长度在5~16之间，只能包含字符、数字和下划线
        post:/[1-9]d{5}(?!d)/,//邮编
        url:/^http:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^\"\"])*$/,//url地址
        idcard:/^\d{15}(\d{2}[A-Za-z0-9])?$/, //身份证号
        ip:/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/g //IP
    };
    function editTd(o) {
        o.data('d', o.html());
        var input=$('<input type="text" value="'+ o.html()+'" class="editinput" style="min-width:10px;"/>');
        o.empty().append(input);
        input.focus();
        o.unbind();
        input.bind('blur',function() {
            if(checkValidate(o.index(), o.html())) {
                var oo=$(this);
                oo.parent().html(oo.val());
                o.bind('dblclick',function() {
                    editTd(o);
                });
            }
        });
    }
    ///验证数据有效性
    function checkValidate(o,val) {
        var validate= o.data('validate');
        var _isValid=true;
        if(!validate) {
            validate={must:false};
        }
        if(validate.must || (!validate.must && val!=='')) {
            //正则的判断
            if(validate.reg) {
                if(typeof(validate.reg)=='string') {
                    if(!(validReg[validate.reg].test(val))) {
                        _isValid=false;
                    }
                }
                else {
                    if(!(value.reg.test(val))) {
                        _isValid=false;
                    }
                }
            }
        }
        if(!_isValid) {
           var u= $.layer({
                shade : [1], //不显示遮罩
                area : ['auto','auto'],
                dialog : {
                    msg:'数据格式不正确，您是否放弃编辑？',
                    btns : 2,
                    type : 4,
                    btn : ['继续','放弃'],
                    yes : function(){
                        layer.close(u);
                    },
                    no : function(){
                        o.empty().html(o.data('d'));
                        o.bind('click',function() {
                            editTd(o);
                        });
                        layer.close(u);
                    }
                }
            });
        }
        return _isValid;
    }
    /** add **/


 }