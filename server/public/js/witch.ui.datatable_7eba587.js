!function(a){a.fn.witchDataTable=function(s){function i(i,t){if(""==a.trim(t.html())){var l=a('<div class="'+s.loaddingClass+'"></div>');t.append(l),a.ajax({type:"POST",url:s.ajaxUrl,data:i.attr("param"),success:function(a){l.remove(),t.html(a)}})}}var t={activeClass:"f-tab-active",contentClass:"f-tab-c",ajaxUrl:void 0,loaddingClass:"f-tab-loadding"},s=a.extend(t,s),l=this.find("ul:first").find("li"),n=l.find("a");if(n.click(function(){var t=a(this),n=t.parent(),r=n.attr("class");if(void 0==r||-1==r.indexOf(s.activeClass)){l.removeClass(s.activeClass),n.addClass(s.activeClass);var e=a(t.attr("href"));e.siblings("."+s.contentClass).css("display","none"),e.css("display","block"),s.ajaxUrl&&i(n,e)}return!1}),s.ajaxUrl){var r=this.find("ul:first").find("."+s.activeClass),e=a(r.find("a").attr("href"));i(r,e)}}}(jQuery);