!function(){"use strict";var t=function(t){var n=Object.prototype.hasOwnProperty;function r(t,e){return Array.isArray(t)?function(t,n){for(var e,i="",a="",c=Array.isArray(n),s=0;s<t.length;s++)(e=r(t[s]))&&(c&&n[s]&&(e=o(e)),i=i+a+e,a=" ");return i}(t,e):t&&"object"==typeof t?function(t){var r="",e="";for(var i in t)i&&t[i]&&n.call(t,i)&&(r=r+e+i,e=" ");return r}(t):t||""}function e(t){if(!t)return"";if("object"==typeof t){var r="";for(var e in t)n.call(t,e)&&(r=r+e+":"+t[e]+";");return r}return t+""}function i(t,n,r,e){if(!1===n||null==n||!n&&("class"===t||"style"===t))return"";if(!0===n)return" "+(e?t:t+'="'+t+'"');var i=typeof n;return"object"!==i&&"function"!==i||"function"!=typeof n.toJSON||(n=n.toJSON()),"string"==typeof n||(n=JSON.stringify(n),r||-1===n.indexOf('"'))?(r&&(n=o(n))," "+t+'="'+n+'"'):" "+t+"='"+n.replace(/'/g,"&#39;")+"'"}t.merge=function t(n,r){if(1===arguments.length){for(var i=n[0],a=1;a<n.length;a++)i=t(i,n[a]);return i}for(var o in r)if("class"===o){var c=n[o]||[];n[o]=(Array.isArray(c)?c:[c]).concat(r[o]||[])}else if("style"===o){c=(c=e(n[o]))&&";"!==c[c.length-1]?c+";":c;var s=e(r[o]);s=s&&";"!==s[s.length-1]?s+";":s,n[o]=c+s}else n[o]=r[o];return n},t.classes=r,t.style=e,t.attr=i,t.attrs=function(t,a){var o="";for(var c in t)if(n.call(t,c)){var s=t[c];if("class"===c){s=r(s),o=i(c,s,!1,a)+o;continue}"style"===c&&(s=e(s)),o+=i(c,s,!1,a)}return o};var a=/["&<>]/;function o(t){var n=""+t,r=a.exec(n);if(!r)return t;var e,i,o,c="";for(e=r.index,i=0;e<n.length;e++){switch(n.charCodeAt(e)){case 34:o="&quot;";break;case 38:o="&amp;";break;case 60:o="&lt;";break;case 62:o="&gt;";break;default:continue}i!==e&&(c+=n.substring(i,e)),i=e+1,c+=o}return i!==e?c+n.substring(i,e):c}return t.escape=o,t.rethrow=function t(n,r,e,i){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&r||i))throw n.message+=" on line "+e,n;try{i=i||require("fs").readFileSync(r,"utf8")}catch(r){t(n,null,e)}var a=3,o=i.split("\n"),c=Math.max(e-a,0),s=Math.min(o.length,e+a);a=o.slice(c,s).map((function(t,n){var r=n+c+1;return(r==e?"  > ":"    ")+r+"| "+t})).join("\n");throw n.path=r,n.message=(r||"Pug")+":"+e+"\n"+a+"\n\n"+n.message,n},t}({});function n(t){return Math.min(function(t){return t*Math.max(document.documentElement.clientHeight,window.innerHeight||0)/100}(t),function(t){return t*Math.max(document.documentElement.clientWidth,window.innerWidth||0)/100}(t))}function r(){const r=document.getElementById("main"),e=function(){const t=n(64)/2-32;return t>=200?200:t<=60?60:t}();r.innerHTML=function(n){var r="",e={};try{var i={};e.flower=function(){this&&this.block,this&&this.attributes;r+='<div id="flower">';let t=20;for(;t--;)r+='<div class="square"></div>';r+="</div>"},e.circleText=function(n,e,i){this&&this.block,this&&this.attributes;r=(r+='<div id="circle">')+'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"'+t.attr("viewBox",`0 0 ${2*e} ${2*i}`,!0,!0)+' x="0px" y="0px"'+t.attr("width",2*e+"px",!0,!0)+t.attr("height",2*i+"px",!0,!0)+">",r=(r+="<defs>")+'<path id="circlePath"'+t.attr("d",`\n          M ${e}, ${i}\n          m -${n}, 0\n          a ${n},${n} 0 0,1 ${2*n},0\n          a ${n},${n} 0 0,1 -${2*n},0\n        `,!0,!0)+"></path></defs>",r+="<g>",r+="<text>",r+='<textPath xlink:href="#circlePath">',r+="Happy Mother's Day !!",r+="\n",r+="2022",r+="\n",r+="Happy Mother's Day !!",r+="\n",r+="2022",r+="\n",r+="Happy Mother's Day !!",r+="\n",r+="2022",r+="\n",r+="Happy Mother's Day !!",r+="\n",r+="2022",r+="\n",r+="Happy Mother's Day !!",r+="\n",r+="2022</textPath></text></g></svg></div>"};const a=n.r,o=n.cx,c=n.cy;r+='<div id="container">',e.flower(),e.circleText(a,o,c),r+="</div>"}catch(n){t.rethrow(n,void 0,void 0,i[void 0])}return r}({r:e,cx:2*e,cy:2*e})}document&&document.body&&r(),window.addEventListener("resize",t=>{r()})}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9ub2RlX21vZHVsZXMvcm9sbHVwLXBsdWdpbi1wdWcvZGlzdC9ydW50aW1lLmVzLmpzIiwiLi4vc3JjL2luZGV4LmpzIiwiLi4vc3JjL3ZpZXdzL2luZGV4LnB1ZyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24oZXhwb3J0cykge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIHB1Z19oYXNfb3duX3Byb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuICAvKipcbiAgICogTWVyZ2UgdHdvIGF0dHJpYnV0ZSBvYmplY3RzIGdpdmluZyBwcmVjZWRlbmNlXG4gICAqIHRvIHZhbHVlcyBpbiBvYmplY3QgYGJgLiBDbGFzc2VzIGFyZSBzcGVjaWFsLWNhc2VkXG4gICAqIGFsbG93aW5nIGZvciBhcnJheXMgYW5kIG1lcmdpbmcvam9pbmluZyBhcHByb3ByaWF0ZWx5XG4gICAqIHJlc3VsdGluZyBpbiBhIHN0cmluZy5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGFcbiAgICogQHBhcmFtIHtPYmplY3R9IGJcbiAgICogQHJldHVybiB7T2JqZWN0fSBhXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cblxuICBleHBvcnRzLm1lcmdlID0gcHVnX21lcmdlO1xuICBmdW5jdGlvbiBwdWdfbWVyZ2UoYSwgYikge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICB2YXIgYXR0cnMgPSBhWzBdO1xuICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGF0dHJzID0gcHVnX21lcmdlKGF0dHJzLCBhW2ldKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhdHRycztcbiAgICB9XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gYikge1xuICAgICAgaWYgKGtleSA9PT0gJ2NsYXNzJykge1xuICAgICAgICB2YXIgdmFsQSA9IGFba2V5XSB8fCBbXTtcbiAgICAgICAgYVtrZXldID0gKEFycmF5LmlzQXJyYXkodmFsQSkgPyB2YWxBIDogW3ZhbEFdKS5jb25jYXQoYltrZXldIHx8IFtdKTtcbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnc3R5bGUnKSB7XG4gICAgICAgIHZhciB2YWxBID0gcHVnX3N0eWxlKGFba2V5XSk7XG4gICAgICAgIHZhbEEgPSB2YWxBICYmIHZhbEFbdmFsQS5sZW5ndGggLSAxXSAhPT0gJzsnID8gdmFsQSArICc7JyA6IHZhbEE7XG4gICAgICAgIHZhciB2YWxCID0gcHVnX3N0eWxlKGJba2V5XSk7XG4gICAgICAgIHZhbEIgPSB2YWxCICYmIHZhbEJbdmFsQi5sZW5ndGggLSAxXSAhPT0gJzsnID8gdmFsQiArICc7JyA6IHZhbEI7XG4gICAgICAgIGFba2V5XSA9IHZhbEEgKyB2YWxCO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYVtrZXldID0gYltrZXldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQcm9jZXNzIGFycmF5LCBvYmplY3QsIG9yIHN0cmluZyBhcyBhIHN0cmluZyBvZiBjbGFzc2VzIGRlbGltaXRlZCBieSBhIHNwYWNlLlxuICAgKlxuICAgKiBJZiBgdmFsYCBpcyBhbiBhcnJheSwgYWxsIG1lbWJlcnMgb2YgaXQgYW5kIGl0cyBzdWJhcnJheXMgYXJlIGNvdW50ZWQgYXNcbiAgICogY2xhc3Nlcy4gSWYgYGVzY2FwaW5nYCBpcyBhbiBhcnJheSwgdGhlbiB3aGV0aGVyIG9yIG5vdCB0aGUgaXRlbSBpbiBgdmFsYCBpc1xuICAgKiBlc2NhcGVkIGRlcGVuZHMgb24gdGhlIGNvcnJlc3BvbmRpbmcgaXRlbSBpbiBgZXNjYXBpbmdgLiBJZiBgZXNjYXBpbmdgIGlzXG4gICAqIG5vdCBhbiBhcnJheSwgbm8gZXNjYXBpbmcgaXMgZG9uZS5cbiAgICpcbiAgICogSWYgYHZhbGAgaXMgYW4gb2JqZWN0LCBhbGwgdGhlIGtleXMgd2hvc2UgdmFsdWUgaXMgdHJ1dGh5IGFyZSBjb3VudGVkIGFzXG4gICAqIGNsYXNzZXMuIE5vIGVzY2FwaW5nIGlzIGRvbmUuXG4gICAqXG4gICAqIElmIGB2YWxgIGlzIGEgc3RyaW5nLCBpdCBpcyBjb3VudGVkIGFzIGEgY2xhc3MuIE5vIGVzY2FwaW5nIGlzIGRvbmUuXG4gICAqXG4gICAqIEBwYXJhbSB7KEFycmF5LjxzdHJpbmc+fE9iamVjdC48c3RyaW5nLCBib29sZWFuPnxzdHJpbmcpfSB2YWxcbiAgICogQHBhcmFtIHs/QXJyYXkuPHN0cmluZz59IGVzY2FwaW5nXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG4gIGV4cG9ydHMuY2xhc3NlcyA9IHB1Z19jbGFzc2VzO1xuICBmdW5jdGlvbiBwdWdfY2xhc3Nlc19hcnJheSh2YWwsIGVzY2FwaW5nKSB7XG4gICAgdmFyIGNsYXNzU3RyaW5nID0gJycsIGNsYXNzTmFtZSwgcGFkZGluZyA9ICcnLCBlc2NhcGVFbmFibGVkID0gQXJyYXkuaXNBcnJheShlc2NhcGluZyk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWwubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNsYXNzTmFtZSA9IHB1Z19jbGFzc2VzKHZhbFtpXSk7XG4gICAgICBpZiAoIWNsYXNzTmFtZSkgY29udGludWU7XG4gICAgICBlc2NhcGVFbmFibGVkICYmIGVzY2FwaW5nW2ldICYmIChjbGFzc05hbWUgPSBwdWdfZXNjYXBlKGNsYXNzTmFtZSkpO1xuICAgICAgY2xhc3NTdHJpbmcgPSBjbGFzc1N0cmluZyArIHBhZGRpbmcgKyBjbGFzc05hbWU7XG4gICAgICBwYWRkaW5nID0gJyAnO1xuICAgIH1cbiAgICByZXR1cm4gY2xhc3NTdHJpbmc7XG4gIH1cbiAgZnVuY3Rpb24gcHVnX2NsYXNzZXNfb2JqZWN0KHZhbCkge1xuICAgIHZhciBjbGFzc1N0cmluZyA9ICcnLCBwYWRkaW5nID0gJyc7XG4gICAgZm9yICh2YXIga2V5IGluIHZhbCkge1xuICAgICAgaWYgKGtleSAmJiB2YWxba2V5XSAmJiBwdWdfaGFzX293bl9wcm9wZXJ0eS5jYWxsKHZhbCwga2V5KSkge1xuICAgICAgICBjbGFzc1N0cmluZyA9IGNsYXNzU3RyaW5nICsgcGFkZGluZyArIGtleTtcbiAgICAgICAgcGFkZGluZyA9ICcgJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNsYXNzU3RyaW5nO1xuICB9XG4gIGZ1bmN0aW9uIHB1Z19jbGFzc2VzKHZhbCwgZXNjYXBpbmcpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgICByZXR1cm4gcHVnX2NsYXNzZXNfYXJyYXkodmFsLCBlc2NhcGluZyk7XG4gICAgfSBlbHNlIGlmICh2YWwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBwdWdfY2xhc3Nlc19vYmplY3QodmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZhbCB8fCAnJztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCBvYmplY3Qgb3Igc3RyaW5nIHRvIGEgc3RyaW5nIG9mIENTUyBzdHlsZXMgZGVsaW1pdGVkIGJ5IGEgc2VtaWNvbG9uLlxuICAgKlxuICAgKiBAcGFyYW0geyhPYmplY3QuPHN0cmluZywgc3RyaW5nPnxzdHJpbmcpfSB2YWxcbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKi9cblxuICBleHBvcnRzLnN0eWxlID0gcHVnX3N0eWxlO1xuICBmdW5jdGlvbiBwdWdfc3R5bGUodmFsKSB7XG4gICAgaWYgKCF2YWwpIHJldHVybiAnJztcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhciBvdXQgPSAnJztcbiAgICAgIGZvciAodmFyIHN0eWxlIGluIHZhbCkge1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgICBpZiAocHVnX2hhc19vd25fcHJvcGVydHkuY2FsbCh2YWwsIHN0eWxlKSkge1xuICAgICAgICAgIG91dCA9IG91dCArIHN0eWxlICsgJzonICsgdmFsW3N0eWxlXSArICc7JztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG91dDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZhbCArICcnO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUmVuZGVyIHRoZSBnaXZlbiBhdHRyaWJ1dGUuXG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAgICogQHBhcmFtIHtTdHJpbmd9IHZhbFxuICAgKiBAcGFyYW0ge0Jvb2xlYW59IGVzY2FwZWRcbiAgICogQHBhcmFtIHtCb29sZWFufSB0ZXJzZVxuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqL1xuICBleHBvcnRzLmF0dHIgPSBwdWdfYXR0cjtcbiAgZnVuY3Rpb24gcHVnX2F0dHIoa2V5LCB2YWwsIGVzY2FwZWQsIHRlcnNlKSB7XG4gICAgaWYgKHZhbCA9PT0gZmFsc2UgfHwgdmFsID09IG51bGwgfHwgIXZhbCAmJiAoa2V5ID09PSAnY2xhc3MnIHx8IGtleSA9PT0gJ3N0eWxlJykpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgaWYgKHZhbCA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuICcgJyArICh0ZXJzZSA/IGtleSA6IGtleSArICc9XCInICsga2V5ICsgJ1wiJyk7XG4gICAgfVxuICAgIHZhciB0eXBlID0gdHlwZW9mIHZhbDtcbiAgICBpZiAoKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpICYmIHR5cGVvZiB2YWwudG9KU09OID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YWwgPSB2YWwudG9KU09OKCk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdmFsICE9PSAnc3RyaW5nJykge1xuICAgICAgdmFsID0gSlNPTi5zdHJpbmdpZnkodmFsKTtcbiAgICAgIGlmICghZXNjYXBlZCAmJiB2YWwuaW5kZXhPZignXCInKSAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuICcgJyArIGtleSArICc9XFwnJyArIHZhbC5yZXBsYWNlKC8nL2csICcmIzM5OycpICsgJ1xcJyc7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlc2NhcGVkKSB2YWwgPSBwdWdfZXNjYXBlKHZhbCk7XG4gICAgcmV0dXJuICcgJyArIGtleSArICc9XCInICsgdmFsICsgJ1wiJztcbiAgfTtcblxuICAvKipcbiAgICogUmVuZGVyIHRoZSBnaXZlbiBhdHRyaWJ1dGVzIG9iamVjdC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9ialxuICAgKiBAcGFyYW0ge09iamVjdH0gdGVyc2Ugd2hldGhlciB0byB1c2UgSFRNTDUgdGVyc2UgYm9vbGVhbiBhdHRyaWJ1dGVzXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG4gIGV4cG9ydHMuYXR0cnMgPSBwdWdfYXR0cnM7XG4gIGZ1bmN0aW9uIHB1Z19hdHRycyhvYmosIHRlcnNlKXtcbiAgICB2YXIgYXR0cnMgPSAnJztcblxuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChwdWdfaGFzX293bl9wcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICB2YXIgdmFsID0gb2JqW2tleV07XG5cbiAgICAgICAgaWYgKCdjbGFzcycgPT09IGtleSkge1xuICAgICAgICAgIHZhbCA9IHB1Z19jbGFzc2VzKHZhbCk7XG4gICAgICAgICAgYXR0cnMgPSBwdWdfYXR0cihrZXksIHZhbCwgZmFsc2UsIHRlcnNlKSArIGF0dHJzO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICgnc3R5bGUnID09PSBrZXkpIHtcbiAgICAgICAgICB2YWwgPSBwdWdfc3R5bGUodmFsKTtcbiAgICAgICAgfVxuICAgICAgICBhdHRycyArPSBwdWdfYXR0cihrZXksIHZhbCwgZmFsc2UsIHRlcnNlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYXR0cnM7XG4gIH07XG5cbiAgLyoqXG4gICAqIEVzY2FwZSB0aGUgZ2l2ZW4gc3RyaW5nIG9mIGBodG1sYC5cbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGh0bWxcbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG5cbiAgdmFyIHB1Z19tYXRjaF9odG1sID0gL1tcIiY8Pl0vO1xuICBleHBvcnRzLmVzY2FwZSA9IHB1Z19lc2NhcGU7XG4gIGZ1bmN0aW9uIHB1Z19lc2NhcGUoX2h0bWwpe1xuICAgIHZhciBodG1sID0gJycgKyBfaHRtbDtcbiAgICB2YXIgcmVnZXhSZXN1bHQgPSBwdWdfbWF0Y2hfaHRtbC5leGVjKGh0bWwpO1xuICAgIGlmICghcmVnZXhSZXN1bHQpIHJldHVybiBfaHRtbDtcblxuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICB2YXIgaSwgbGFzdEluZGV4LCBlc2NhcGU7XG4gICAgZm9yIChpID0gcmVnZXhSZXN1bHQuaW5kZXgsIGxhc3RJbmRleCA9IDA7IGkgPCBodG1sLmxlbmd0aDsgaSsrKSB7XG4gICAgICBzd2l0Y2ggKGh0bWwuY2hhckNvZGVBdChpKSkge1xuICAgICAgICBjYXNlIDM0OiBlc2NhcGUgPSAnJnF1b3Q7JzsgYnJlYWs7XG4gICAgICAgIGNhc2UgMzg6IGVzY2FwZSA9ICcmYW1wOyc7IGJyZWFrO1xuICAgICAgICBjYXNlIDYwOiBlc2NhcGUgPSAnJmx0Oyc7IGJyZWFrO1xuICAgICAgICBjYXNlIDYyOiBlc2NhcGUgPSAnJmd0Oyc7IGJyZWFrO1xuICAgICAgICBkZWZhdWx0OiBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmIChsYXN0SW5kZXggIT09IGkpIHJlc3VsdCArPSBodG1sLnN1YnN0cmluZyhsYXN0SW5kZXgsIGkpO1xuICAgICAgbGFzdEluZGV4ID0gaSArIDE7XG4gICAgICByZXN1bHQgKz0gZXNjYXBlO1xuICAgIH1cbiAgICBpZiAobGFzdEluZGV4ICE9PSBpKSByZXR1cm4gcmVzdWx0ICsgaHRtbC5zdWJzdHJpbmcobGFzdEluZGV4LCBpKTtcbiAgICBlbHNlIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLyoqXG4gICAqIFJlLXRocm93IHRoZSBnaXZlbiBgZXJyYCBpbiBjb250ZXh0IHRvIHRoZVxuICAgKiB0aGUgcHVnIGluIGBmaWxlbmFtZWAgYXQgdGhlIGdpdmVuIGBsaW5lbm9gLlxuICAgKlxuICAgKiBAcGFyYW0ge0Vycm9yfSBlcnJcbiAgICogQHBhcmFtIHtTdHJpbmd9IGZpbGVuYW1lXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBsaW5lbm9cbiAgICogQHBhcmFtIHtTdHJpbmd9IHN0ciBvcmlnaW5hbCBzb3VyY2VcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuXG4gIGV4cG9ydHMucmV0aHJvdyA9IHB1Z19yZXRocm93O1xuICBmdW5jdGlvbiBwdWdfcmV0aHJvdyhlcnIsIGZpbGVuYW1lLCBsaW5lbm8sIHN0cil7XG4gICAgaWYgKCEoZXJyIGluc3RhbmNlb2YgRXJyb3IpKSB0aHJvdyBlcnI7XG4gICAgaWYgKCh0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnIHx8ICFmaWxlbmFtZSkgJiYgIXN0cikge1xuICAgICAgZXJyLm1lc3NhZ2UgKz0gJyBvbiBsaW5lICcgKyBsaW5lbm87XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBzdHIgPSBzdHIgfHwgcmVxdWlyZSgnZnMnKS5yZWFkRmlsZVN5bmMoZmlsZW5hbWUsICd1dGY4JylcbiAgICB9IGNhdGNoIChleCkge1xuICAgICAgcHVnX3JldGhyb3coZXJyLCBudWxsLCBsaW5lbm8pXG4gICAgfVxuICAgIHZhciBjb250ZXh0ID0gM1xuICAgICAgLCBsaW5lcyA9IHN0ci5zcGxpdCgnXFxuJylcbiAgICAgICwgc3RhcnQgPSBNYXRoLm1heChsaW5lbm8gLSBjb250ZXh0LCAwKVxuICAgICAgLCBlbmQgPSBNYXRoLm1pbihsaW5lcy5sZW5ndGgsIGxpbmVubyArIGNvbnRleHQpO1xuXG4gICAgLy8gRXJyb3IgY29udGV4dFxuICAgIHZhciBjb250ZXh0ID0gbGluZXMuc2xpY2Uoc3RhcnQsIGVuZCkubWFwKGZ1bmN0aW9uKGxpbmUsIGkpe1xuICAgICAgdmFyIGN1cnIgPSBpICsgc3RhcnQgKyAxO1xuICAgICAgcmV0dXJuIChjdXJyID09IGxpbmVubyA/ICcgID4gJyA6ICcgICAgJylcbiAgICAgICAgKyBjdXJyXG4gICAgICAgICsgJ3wgJ1xuICAgICAgICArIGxpbmU7XG4gICAgfSkuam9pbignXFxuJyk7XG5cbiAgICAvLyBBbHRlciBleGNlcHRpb24gbWVzc2FnZVxuICAgIGVyci5wYXRoID0gZmlsZW5hbWU7XG4gICAgZXJyLm1lc3NhZ2UgPSAoZmlsZW5hbWUgfHwgJ1B1ZycpICsgJzonICsgbGluZW5vXG4gICAgICArICdcXG4nICsgY29udGV4dCArICdcXG5cXG4nICsgZXJyLm1lc3NhZ2U7XG4gICAgdGhyb3cgZXJyO1xuICB9O1xuXG4gIHJldHVybiBleHBvcnRzXG59KSh7fSk7XG4iLCJpbXBvcnQgJy4vc3R5bGVzL2luZGV4LnNjc3MnO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vdmlld3MvaW5kZXgucHVnJztcblxuY29uc3QgUEFERElORyA9IDMyO1xuY29uc3QgUkFESVVTX01BWCA9IDIwMDtcbmNvbnN0IFJBRElVU19NSU4gPSA2MDtcblxuZnVuY3Rpb24gdmgodikge1xuICB2YXIgaCA9IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsIHdpbmRvdy5pbm5lckhlaWdodCB8fCAwKTtcbiAgcmV0dXJuICh2ICogaCkgLyAxMDA7XG59XG5cbmZ1bmN0aW9uIHZ3KHYpIHtcbiAgdmFyIHcgPSBNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsIHdpbmRvdy5pbm5lcldpZHRoIHx8IDApO1xuICByZXR1cm4gKHYgKiB3KSAvIDEwMDtcbn1cblxuZnVuY3Rpb24gdm1pbih2KSB7XG4gIHJldHVybiBNYXRoLm1pbih2aCh2KSwgdncodikpO1xufVxuXG5mdW5jdGlvbiB2bWF4KHYpIHtcbiAgcmV0dXJuIE1hdGgubWF4KHZoKHYpLCB2dyh2KSk7XG59XG5cbmZ1bmN0aW9uIGdldFJhZGl1cygpIHtcbiAgY29uc3QgY29udGVudFdpZHRoID0gdm1pbig2NCk7XG4gIGNvbnN0IHJhZGl1cyA9IGNvbnRlbnRXaWR0aCAvIDIgLSBQQURESU5HO1xuICBpZiAocmFkaXVzID49IFJBRElVU19NQVgpIHtcbiAgICByZXR1cm4gUkFESVVTX01BWDtcbiAgfSBlbHNlIGlmIChyYWRpdXMgPD0gUkFESVVTX01JTikge1xuICAgIHJldHVybiBSQURJVVNfTUlOO1xuICB9XG4gIHJldHVybiByYWRpdXM7XG59XG5cbmZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG4gIGNvbnN0IHIgPSBnZXRSYWRpdXMoKTtcbiAgbWFpbi5pbm5lckhUTUwgPSB0ZW1wbGF0ZSh7XG4gICAgcixcbiAgICBjeDogciAqIDIsXG4gICAgY3k6IHIgKiAyLFxuICB9KTtcbn1cblxuaWYgKGRvY3VtZW50ICYmIGRvY3VtZW50LmJvZHkpIHtcbiAgcmVuZGVyKCk7XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBldmVudCA9PiB7XG4gIC8vIGNvbnN0IHsgaW5uZXJXaWR0aCwgaW5uZXJIZWlnaHQgfSA9IGV2ZW50LnRhcmdldDtcbiAgcmVuZGVyKCk7XG59KTtcbiIsImluY2x1ZGUgZmxvd2VyLnB1Z1xuaW5jbHVkZSBjaXJjbGVUZXh0LnB1Z1xuXG4tIGNvbnN0IHIgPSBsb2NhbHMuclxuLSBjb25zdCBjeCA9IGxvY2Fscy5jeFxuLSBjb25zdCBjeSA9IGxvY2Fscy5jeVxuXG4jY29udGFpbmVyXG4gICtmbG93ZXIoKVxuICArY2lyY2xlVGV4dChyLCBjeCwgY3kpXG4gIFxuICAgICAgICAgICAgXG4iXSwibmFtZXMiOlsiZXhwb3J0cyIsInB1Z19oYXNfb3duX3Byb3BlcnR5IiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwdWdfY2xhc3NlcyIsInZhbCIsImVzY2FwaW5nIiwiQXJyYXkiLCJpc0FycmF5IiwiY2xhc3NOYW1lIiwiY2xhc3NTdHJpbmciLCJwYWRkaW5nIiwiZXNjYXBlRW5hYmxlZCIsImkiLCJsZW5ndGgiLCJwdWdfZXNjYXBlIiwicHVnX2NsYXNzZXNfYXJyYXkiLCJrZXkiLCJjYWxsIiwicHVnX2NsYXNzZXNfb2JqZWN0IiwicHVnX3N0eWxlIiwib3V0Iiwic3R5bGUiLCJwdWdfYXR0ciIsImVzY2FwZWQiLCJ0ZXJzZSIsInR5cGUiLCJ0b0pTT04iLCJKU09OIiwic3RyaW5naWZ5IiwiaW5kZXhPZiIsInJlcGxhY2UiLCJtZXJnZSIsInB1Z19tZXJnZSIsImEiLCJiIiwiYXJndW1lbnRzIiwiYXR0cnMiLCJ2YWxBIiwiY29uY2F0IiwidmFsQiIsImNsYXNzZXMiLCJhdHRyIiwib2JqIiwicHVnX21hdGNoX2h0bWwiLCJfaHRtbCIsImh0bWwiLCJyZWdleFJlc3VsdCIsImV4ZWMiLCJsYXN0SW5kZXgiLCJlc2NhcGUiLCJyZXN1bHQiLCJpbmRleCIsImNoYXJDb2RlQXQiLCJzdWJzdHJpbmciLCJyZXRocm93IiwicHVnX3JldGhyb3ciLCJlcnIiLCJmaWxlbmFtZSIsImxpbmVubyIsInN0ciIsIkVycm9yIiwid2luZG93IiwibWVzc2FnZSIsInJlcXVpcmUiLCJyZWFkRmlsZVN5bmMiLCJleCIsImNvbnRleHQiLCJsaW5lcyIsInNwbGl0Iiwic3RhcnQiLCJNYXRoIiwibWF4IiwiZW5kIiwibWluIiwic2xpY2UiLCJtYXAiLCJsaW5lIiwiY3VyciIsImpvaW4iLCJwYXRoIiwidm1pbiIsInYiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudEhlaWdodCIsImlubmVySGVpZ2h0IiwidmgiLCJjbGllbnRXaWR0aCIsImlubmVyV2lkdGgiLCJ2dyIsInJlbmRlciIsIm1haW4iLCJnZXRFbGVtZW50QnlJZCIsInIiLCJyYWRpdXMiLCJnZXRSYWRpdXMiLCJpbm5lckhUTUwiLCJwdWdfbWl4aW5zIiwicHVnX2h0bWwiLCJ0ZW1wbGF0ZSIsImN4IiwiY3kiLCJib2R5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Il0sIm1hcHBpbmdzIjoiK0JBQWUsU0FBVUEsR0FHdkIsSUFBSUMsRUFBdUJDLE9BQU9DLFVBQVVDLGVBaUY1QyxTQUFTQyxFQUFZQyxFQUFLQyxHQUN4QixPQUFJQyxNQUFNQyxRQUFRSCxHQXRCcEIsU0FBMkJBLEVBQUtDLEdBRTlCLElBREEsSUFBc0JHLEVBQWxCQyxFQUFjLEdBQWVDLEVBQVUsR0FBSUMsRUFBZ0JMLE1BQU1DLFFBQVFGLEdBQ3BFTyxFQUFJLEVBQUdBLEVBQUlSLEVBQUlTLE9BQVFELEtBQzlCSixFQUFZTCxFQUFZQyxFQUFJUSxPQUU1QkQsR0FBaUJOLEVBQVNPLEtBQU9KLEVBQVlNLEVBQVdOLElBQ3hEQyxFQUFjQSxFQUFjQyxFQUFVRixFQUN0Q0UsRUFBVSxLQUVaLE9BQU9ELEVBY0VNLENBQWtCWCxFQUFLQyxHQUNyQkQsR0FBc0IsaUJBQVJBLEVBYjNCLFNBQTRCQSxHQUMxQixJQUFJSyxFQUFjLEdBQUlDLEVBQVUsR0FDaEMsSUFBSyxJQUFJTSxLQUFPWixFQUNWWSxHQUFPWixFQUFJWSxJQUFRakIsRUFBcUJrQixLQUFLYixFQUFLWSxLQUNwRFAsRUFBY0EsRUFBY0MsRUFBVU0sRUFDdENOLEVBQVUsS0FHZCxPQUFPRCxFQU1FUyxDQUFtQmQsR0FFbkJBLEdBQU8sR0FZbEIsU0FBU2UsRUFBVWYsR0FDakIsSUFBS0EsRUFBSyxNQUFPLEdBQ2pCLEdBQW1CLGlCQUFSQSxFQUFrQixDQUMzQixJQUFJZ0IsRUFBTSxHQUNWLElBQUssSUFBSUMsS0FBU2pCLEVBRVpMLEVBQXFCa0IsS0FBS2IsRUFBS2lCLEtBQ2pDRCxFQUFNQSxFQUFNQyxFQUFRLElBQU1qQixFQUFJaUIsR0FBUyxLQUczQyxPQUFPRCxFQUVQLE9BQU9oQixFQUFNLEdBY2pCLFNBQVNrQixFQUFTTixFQUFLWixFQUFLbUIs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