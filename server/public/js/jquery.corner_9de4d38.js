!function(t){function e(e,r){return parseInt(t.css(e,r),10)||0}function r(t){return t=parseInt(t,10).toString(16),t.length<2?"0"+t:t}function o(e){for(;e;){var o,s=t.css(e,"backgroundColor");if(s&&"transparent"!=s&&"rgba(0, 0, 0, 0)"!=s)return s.indexOf("rgb")>=0?(o=s.match(/\d+/g),"#"+r(o[0])+r(o[1])+r(o[2])):s;if("html"==e.nodeName.toLowerCase())break;e=e.parentNode}return"#ffffff"}function s(t,e,r){switch(t){case"round":return Math.round(r*(1-Math.cos(Math.asin(e/r))));case"cool":return Math.round(r*(1+Math.cos(Math.asin(e/r))));case"sharp":return r-e;case"bite":return Math.round(r*Math.cos(Math.asin((r-e-1)/r)));case"slide":return Math.round(r*Math.atan2(e,r/e));case"jut":return Math.round(r*Math.atan2(r,r-e-1));case"curl":return Math.round(r*Math.atan(e));case"tear":return Math.round(r*Math.cos(e));case"wicked":return Math.round(r*Math.tan(e));case"long":return Math.round(r*Math.sqrt(e));case"sculpt":return Math.round(r*Math.log(r-e-1,r));case"dogfold":case"dog":return 1&e?e+1:r;case"dog2":return 2&e?e+1:r;case"dog3":return 3&e?e+1:r;case"fray":return e%2*r;case"notch":return r;case"bevelfold":case"bevel":return e+1;case"steep":return e/2+1;case"invsteep":return(r-e)/2+1}}var i=/MSIE/.test(navigator.userAgent),n=document.createElement("div").style,a=void 0!==n.MozBorderRadius,d=void 0!==n.WebkitBorderRadius,c=void 0!==n.borderRadius||void 0!==n.BorderRadius,h=document.documentMode||0,u=i&&(!h||8>h),p=i&&function(){var t=document.createElement("div");try{t.style.setExpression("width","0+0"),t.style.removeExpression("width")}catch(e){return!1}return!0}();t.support=t.support||{},t.support.borderRadius=a||d||c,t.fn.corner=function(r){if(0===this.length){if(!t.isReady&&this.selector){var n=this.selector,h=this.context;t(function(){t(n,h).corner(r)})}return this}return this.each(function(){var n,h,l,f,b,g,m,v,x,R,M,B,L,y,w=t(this),T=[w.attr(t.fn.corner.defaults.metaAttr)||"",r||""].join(" ").toLowerCase(),k=/keep/.test(T),C=(T.match(/cc:(#[0-9a-f]+)/)||[])[1],z=(T.match(/sc:(#[0-9a-f]+)/)||[])[1],E=parseInt((T.match(/(\d+)px/)||[])[1],10)||10,I=/round|bevelfold|bevel|notch|bite|cool|sharp|slide|jut|curl|tear|fray|wicked|sculpt|long|dog3|dog2|dogfold|dog|invsteep|steep/,N=(T.match(I)||["round"])[0],j=/dogfold|bevelfold/.test(T),W={T:0,B:1},S={TL:/top|tl|left/.test(T),TR:/top|tr|right/.test(T),BL:/bottom|bl|left/.test(T),BR:/bottom|br|right/.test(T)};if(S.TL||S.TR||S.BL||S.BR||(S={TL:1,TR:1,BL:1,BR:1}),t.fn.corner.defaults.useNative&&"round"==N&&(c||a||d)&&!C&&!z)return S.TL&&w.css(c?"border-top-left-radius":a?"-moz-border-radius-topleft":"-webkit-border-top-left-radius",E+"px"),S.TR&&w.css(c?"border-top-right-radius":a?"-moz-border-radius-topright":"-webkit-border-top-right-radius",E+"px"),S.BL&&w.css(c?"border-bottom-left-radius":a?"-moz-border-radius-bottomleft":"-webkit-border-bottom-left-radius",E+"px"),S.BR&&w.css(c?"border-bottom-right-radius":a?"-moz-border-radius-bottomright":"-webkit-border-bottom-right-radius",E+"px"),void 0;n=document.createElement("div"),t(n).css({overflow:"hidden",height:"1px",minHeight:"1px",fontSize:"1px",backgroundColor:z||"transparent",borderStyle:"solid"}),h={T:parseInt(t.css(this,"paddingTop"),10)||0,R:parseInt(t.css(this,"paddingRight"),10)||0,B:parseInt(t.css(this,"paddingBottom"),10)||0,L:parseInt(t.css(this,"paddingLeft"),10)||0},void 0!==typeof this.style.zoom&&(this.style.zoom=1),k||(this.style.border="none"),n.style.borderColor=C||o(this.parentNode),l=t(this).outerHeight();for(f in W)if(b=W[f],b&&(S.BL||S.BR)||!b&&(S.TL||S.TR)){for(n.style.borderStyle="none "+(S[f+"R"]?"solid":"none")+" none "+(S[f+"L"]?"solid":"none"),g=document.createElement("div"),t(g).addClass("jquery-corner"),m=g.style,b?this.appendChild(g):this.insertBefore(g,this.firstChild),b&&"auto"!=l?("static"==t.css(this,"position")&&(this.style.position="relative"),m.position="absolute",m.bottom=m.left=m.padding=m.margin="0",p?m.setExpression("width","this.parentNode.offsetWidth"):m.width="100%"):!b&&i?("static"==t.css(this,"position")&&(this.style.position="relative"),m.position="absolute",m.top=m.left=m.right=m.padding=m.margin="0",p?(v=e(this,"borderLeftWidth")+e(this,"borderRightWidth"),m.setExpression("width","this.parentNode.offsetWidth - "+v+'+ "px"')):m.width="100%"):(m.position="relative",m.margin=b?h.B-E+"px -"+h.R+"px -"+h.B+"px -"+h.L+"px":"-"+h.T+"px -"+h.R+"px "+(h.T-E)+"px -"+h.L+"px"),x=0;E>x;x++)R=Math.max(0,s(N,x,E)),M=n.cloneNode(!1),M.style.borderWidth="0 "+(S[f+"R"]?R:0)+"px 0 "+(S[f+"L"]?R:0)+"px",b?g.appendChild(M):g.insertBefore(M,g.firstChild);if(j&&t.support.boxModel){if(b&&u)continue;for(B in S)if(S[B]&&(!b||"TL"!=B&&"TR"!=B)&&(b||"BL"!=B&&"BR"!=B)){switch(L={position:"absolute",border:"none",margin:0,padding:0,overflow:"hidden",backgroundColor:n.style.borderColor},y=t("<div/>").css(L).css({width:E+"px",height:"1px"}),B){case"TL":y.css({bottom:0,left:0});break;case"TR":y.css({bottom:0,right:0});break;case"BL":y.css({top:0,left:0});break;case"BR":y.css({top:0,right:0})}g.appendChild(y[0]);var q=t("<div/>").css(L).css({top:0,bottom:0,width:"1px",height:E+"px"});switch(B){case"TL":q.css({left:E});break;case"TR":q.css({right:E});break;case"BL":q.css({left:E});break;case"BR":q.css({right:E})}g.appendChild(q[0])}}}})},t.fn.uncorner=function(){return(c||a||d)&&this.css(c?"border-radius":a?"-moz-border-radius":"-webkit-border-radius",0),t("div.jquery-corner",this).remove(),this},t.fn.corner.defaults={useNative:!0,metaAttr:"data-corner"}}(jQuery);