!function(t){t.fn.witchDataTable=function(a){function d(){var t="<thead><tr>",d=a.thead;for(var n in d)t+='<th style="width:'+d[n]+'">'+n+"</th>";t+="</tr></thead>";var r=a.data,i=e.data("line");t+="<tbody>";for(var h in r)t+="<tr><td>"+i+"</td><td>"+h+"</td><td>"+r[h]+"</td></tr>",e.data("line",++i);t+="</tbody>",e.append(t)}var n={thead:{},data:{}},a=t.extend(n,a),e=this;e.data("line",1),d()}}(jQuery);