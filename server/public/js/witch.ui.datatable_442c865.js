!function(t){t.fn.witchDataTable=function(a){function d(){var t="<thead><tr>",d=a.thead;for(key in d)t+='<th style="width:'+d[key]+'">'+key+"</th>";t+="</tr></thead>";var e=a.data,i=n.data("line");t+="<tbody>";for(key in e)t+="<tr><td>"+i+"</td><td>"+key+"</td><td>"+e[key]+"</td></tr>",n.data("line",++i);t+="</tbody>",n.append(t)}var e={thead:{},data:{}},a=t.extend(e,a),n=this;n.data("line",1),d()}}(jQuery);