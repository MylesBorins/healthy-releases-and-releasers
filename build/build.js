!function a(i,r,s){function o(t,e){if(!r[t]){if(!i[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(l)return l(t,!0);throw(n=new Error("Cannot find module '"+t+"'")).code="MODULE_NOT_FOUND",n}n=r[t]={exports:{}},i[t][0].call(n.exports,function(e){return o(i[t][1][e]||e)},n,n.exports,a,i,r,s)}return r[t].exports}for(var l="function"==typeof require&&require,e=0;e<s.length;e++)o(s[e]);return o}({1:[function(e,t,n){t.exports=function(){return function(a){var i;function e(e){var t,n;e&&(t=i.indexOf(e),n=a.slide(),r(e,"active"),r(e,"inactive"),r(e,"before"),r(e,"after"),t!==n?(s(e,"inactive"),s(e,t<n?"before":"after")):s(e,"active"))}function r(e,t){e.classList.remove("bespoke-backdrop-"+t)}function s(e,t){e.classList.add("bespoke-backdrop-"+t)}i=a.slides.map(function(e){var t=e.getAttribute("data-bespoke-backdrop");if(t){e=document.createElement("div");return e.className=t,e.classList.add("bespoke-backdrop"),a.parent.appendChild(e),e}}),a.on("activate",function(){i.forEach(e)})}}},{}],2:[function(e,t,n){t.exports=function(s){return function(e){var t,n,r=e.slides.map(function(e){return[].slice.call(e.querySelectorAll("string"==typeof s?s:"[data-bespoke-bullet]"),0)}),a=function(a,i){t=a,n=i,r.forEach(function(e,n){e.forEach(function(e,t){e.classList.add("bespoke-bullet"),n<a||n===a&&t<=i?(e.classList.add("bespoke-bullet-active"),e.classList.remove("bespoke-bullet-inactive")):(e.classList.add("bespoke-bullet-inactive"),e.classList.remove("bespoke-bullet-active")),n===a&&t===i?e.classList.add("bespoke-bullet-current"):e.classList.remove("bespoke-bullet-current")})})},i=function(e){return void 0!==r[t][n+e]};e.on("next",function(){var e=t+1;if(i(1))return a(t,n+1),!1;r[e]&&a(e,0)}),e.on("prev",function(){var e=t-1;if(i(-1))return a(t,n-1),!1;r[e]&&a(e,r[e].length-1)}),e.on("slide",function(e){a(e.index,0)}),a(0,0)}}},{}],3:[function(e,t,n){t.exports=function(){return function(e){e.slides.forEach(function(e){e.addEventListener("keydown",function(e){!/INPUT|TEXTAREA|SELECT/.test(e.target.nodeName)&&"true"!==e.target.contentEditable||e.stopPropagation()})})}}},{}],4:[function(e,t,n){t.exports=function(){return function(t){function a(e){(e=-1<e&&e<t.slides.length?e:0)!==t.slide()&&t.slide(e)}function e(){var n=window.location.hash.slice(1),e=parseInt(n,10);n&&(e?a(e-1):t.slides.forEach(function(e,t){e.getAttribute("data-bespoke-hash")!==n&&e.id!==n||a(t)}))}setTimeout(function(){e(),t.on("activate",function(e){var t=e.slide.getAttribute("data-bespoke-hash")||e.slide.id;window.location.hash=t||e.index+1}),window.addEventListener("hashchange",e)},0)}}},{}],5:[function(e,t,n){t.exports=function(e){return function(t){var n="vertical"!==e;document.addEventListener("keydown",function(e){(34==e.which||32==e.which&&!e.shiftKey||n&&39==e.which||!n&&40==e.which)&&t.next(),(33==e.which||32==e.which&&e.shiftKey||n&&37==e.which||!n&&38==e.which)&&t.prev()})}}},{}],6:[function(e,t,n){t.exports=function(i){return function(t){var e=document.createElement("div"),n=document.createElement("div"),a="vertical"===i?"height":"width";e.className="bespoke-progress-parent",n.className="bespoke-progress-bar",e.appendChild(n),t.parent.appendChild(e),t.on("activate",function(e){n.style[a]=100*e.index/(t.slides.length-1)+"%"})}}},{}],7:[function(e,t,n){t.exports=function(u){return function(e){var n,a=e.parent,t=e.slides[0],i=t.offsetHeight,r=t.offsetWidth,t="zoom"===u||"zoom"in a.style&&"transform"!==u,s=t?e.slides:e.slides.map(function(e){var t=document.createElement("div");return t.className="bespoke-scale-parent",e.parentNode.insertBefore(t,e),t.appendChild(e),t}),o=(n="Transform","Moz Webkit O ms".split(" ").reduce(function(e,t){return t+n in a.style?t+n:e},n.toLowerCase())),l=t?function(e,t){t.style.zoom=e}:function(e,t){t.style[o]="scale("+e+")"},t=function(){var e=a.offsetWidth/r,t=a.offsetHeight/i;s.forEach(l.bind(null,Math.min(e,t)))};window.addEventListener("resize",t),t()}}},{}],8:[function(u,a,i){(function(n){(function(){var e,t;e=function(){return function a(i,r,s){function o(n,e){if(!r[n]){if(!i[n]){var t="function"==typeof u&&u;if(!e&&t)return t(n,!0);if(l)return l(n,!0);throw new Error("Cannot find module '"+n+"'")}t=r[n]={exports:{}};i[n][0].call(t.exports,function(e){var t=i[n][1][e];return o(t||e)},t,t.exports,a,i,r,s)}return r[n].exports}for(var l="function"==typeof u&&u,e=0;e<s.length;e++)o(s[e]);return o}({1:[function(e,t,n){var a=e("bespoke-classes"),i=e("insert-css");t.exports=function(){return i('/*! normalize.css v3.0.0 | MIT License | git.io/normalize */html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background:0 0}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b{font-weight:700}dfn{font-style:italic}h1{font-size:2em}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{box-sizing:content-box}pre{overflow:auto}code,kbd,pre,samp{font-size:1em}kbd,pre,samp{font-family:monospace,monospace}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type="button"],input[type="reset"],input[type="submit"]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type="checkbox"],input[type="radio"]{box-sizing:border-box;padding:0}input[type="number"]::-webkit-inner-spin-button,input[type="number"]::-webkit-outer-spin-button{height:auto}input[type="search"]{-webkit-appearance:textfield;box-sizing:content-box}input[type="search"]::-webkit-search-cancel-button,input[type="search"]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th,*{padding:0}*{margin:0}html{-webkit-text-size-adjust:auto;-ms-text-size-adjust:auto;text-size-adjust:auto}.bespoke-parent{font-size:1.5em;background:#111;color:#ddd;font-family:futura,helvetica,arial,arial,sans-serif;overflow:hidden;text-align:center;-webkit-transition:background 1s ease;transition:background 1s ease;background-position:50% 50%}.bespoke-parent,.bespoke-scale-parent{position:absolute;top:0;left:0;right:0;bottom:0}.bespoke-scale-parent{pointer-events:none;z-index:1}.bespoke-scale-parent .bespoke-active{pointer-events:auto}.bespoke-slide{-webkit-transition:opacity .5s ease;transition:opacity .5s ease;width:940px;height:480px;position:absolute;top:50%;left:50%;margin-left:-470px;margin-top:-240px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;z-index:1}.bespoke-active{-webkit-transition-delay:.5s;transition-delay:.5s}.bespoke-active[data-bespoke-backdrop]{-webkit-transition-delay:.75s;transition-delay:.75s}.bespoke-inactive{opacity:0;pointer-events:none}.bespoke-backdrop{-webkit-transition:opacity 1s ease;position:absolute;top:0;left:0;right:0;bottom:0}.bespoke-progress-parent{position:absolute;top:0;left:0;right:0;height:.3vw;z-index:1}.bespoke-progress-bar{background:#ddd;position:absolute;top:0;left:0;height:100%;-webkit-transition:width 1s ease;transition:width 1s ease}.bespoke-bullet{-webkit-transition:opacity .3s ease;transition:opacity .3s ease}.bespoke-bullet-inactive{opacity:0}strong{font-weight:400}hr{width:50%;margin:1rem auto;height:1px;border:0;background:#ddd}h3,p,li{padding-left:20px;padding-right:20px}h3,h4,p,li,pre{font-weight:200}h1{line-height:1.4em;padding:1em;border:1px solid #ddd;border-left-width:0;border-right-width:0;min-width:8em}h1,h2{letter-spacing:.3em;text-transform:uppercase;font-weight:400;margin:.17em 0;position:relative}h2{line-height:1.1em;padding:0 0 0 .3em}h3{font-family:didot,times new roman,serif;font-style:italic;font-size:1.2em;line-height:1.6em;margin:.5em 0}h4{text-transform:uppercase;font-size:.8em;line-height:1.8em;letter-spacing:.3em;margin:1em 0}ul,ol{padding:0;margin:0;text-align:left}li{list-style:none;margin:.2em;font-style:normal;-webkit-transform:translateX(-6px);-ms-transform:translateX(-6px);transform:translateX(-6px)}li:before{content:\'\\2014\';margin-right:4px}pre{background:none!important}code{font-family:prestige elite std,consolas,courier new,monospace!important;font-style:normal;font-weight:200!important;text-align:left}a{padding-left:.3em;color:currentColor;text-decoration:none;border-bottom:1px solid currentColor}.emphatic{background:#f30}.single-words{word-spacing:9999px;line-height:2.9em;overflow:hidden}.bespoke-backdrop{opacity:0;-webkit-transition:opacity 1s ease,-webkit-transform 6s ease;transition:opacity 1s ease,transform 6s ease;background-size:cover;background-position:50% 50%;-webkit-transform:translateZ(0)scale(1.3);transform:translateZ(0)scale(1.3)}.bespoke-backdrop-active,.bespoke-backdrop-before{-webkit-transform:translateZ(0);transform:translateZ(0)}.bespoke-backdrop-before{-webkit-transition-delay:.2s;transition-delay:.2s}.bespoke-backdrop-active{opacity:.5}',{prepend:!0}),function(e){a()(e)}}},{"bespoke-classes":2,"insert-css":3}],2:[function(e,t,n){t.exports=function(){return function(i){function r(e,t){e.classList.add("bespoke-"+t)}function s(e,t){e.className=e.className.replace(new RegExp("bespoke-"+t+"(\\s|$)","g")," ").trim()}function t(e,t){var n=i.slides[i.slide()],a=t-i.slide(),t=0<a?"after":"before";["before(-\\d+)?","after(-\\d+)?","active","inactive"].map(s.bind(null,e)),e!==n&&["inactive",t,t+"-"+Math.abs(a)].map(r.bind(null,e))}r(i.parent,"parent"),i.slides.map(function(e){r(e,"slide")}),i.on("activate",function(e){i.slides.map(t),r(e.slide,"active"),s(e.slide,"inactive")})}}},{}],3:[function(e,t,n){var a={};t.exports=function(e,t){var n;a[e]||(a[e]=!0,(n=document.createElement("style")).setAttribute("type","text/css"),"textContent"in n?n.textContent=e:n.styleSheet.cssText=e,e=document.getElementsByTagName("head")[0],t&&t.prepend?e.insertBefore(n,e.childNodes[0]):e.appendChild(n))}},{}]},{},[1])(1)},"object"==typeof i?a.exports=e():"function"==typeof define&&define.amd?define(e):("undefined"!=typeof window?t=window:void 0!==n?t=n:"undefined"!=typeof self&&(t=self),(t=(t=(t=t).bespoke||(t.bespoke={})).themes||(t.themes={})).nebula=e())}).call(this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],9:[function(e,t,n){t.exports=function(i){return function(e){var t,n,a="vertical"==i?"Y":"X";e.parent.addEventListener("touchstart",function(e){1==e.touches.length&&(t=e.touches[0]["page"+a],n=0)}),e.parent.addEventListener("touchmove",function(e){1==e.touches.length&&(e.preventDefault(),n=e.touches[0]["page"+a]-t)}),e.parent.addEventListener("touchend",function(){50<Math.abs(n)&&e[0<n?"prev":"next"]()})}}},{}],10:[function(e,t,n){t.exports={from:function(e,t){function a(e,t){i[e]&&(l("deactivate",u(r,t)),r=i[e],l("activate",u(r,t)))}var n=1===(e.parent||e).nodeType?e.parent||e:document.querySelector(e.parent||e),i=[].filter.call("string"==typeof e.slides?n.querySelectorAll(e.slides):e.slides||n.children,function(e){return"SCRIPT"!==e.nodeName}),r=i[0],s={},e=function(e,t){var n=i.indexOf(r)+e;l(0<e?"next":"prev",u(r,t))&&a(n,t)},o=function(e,t){s[e]=(s[e]||[]).filter(function(e){return e!==t})},l=function(e,n){return(s[e]||[]).reduce(function(e,t){return e&&!1!==t(n)},!0)},u=function(e,t){return(t=t||{}).index=i.indexOf(e),t.slide=e,t},c={on:function(e,t){return(s[e]||(s[e]=[])).push(t),o.bind(null,e,t)},off:o,fire:l,slide:function(e,t){if(!arguments.length)return i.indexOf(r);l("slide",u(i[e],t))&&a(e,t)},next:e.bind(null,1),prev:e.bind(null,-1),parent:n,slides:i};return(t||[]).forEach(function(e){e(c)}),a(0),c}}},{}],11:[function(e,n,t){(function(t){(function(){var s,o,l,u,c,a,e,i=function(l){var u=/\blang(?:uage)?-([\w-]+)\b/i,t=0,L={manual:l.Prism&&l.Prism.manual,disableWorkerMessageHandler:l.Prism&&l.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof j?new j(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function n(e,a){var i,t;switch(a=a||{},L.util.type(e)){case"Object":if(t=L.util.objId(e),a[t])return a[t];for(var r in i={},a[t]=i,e)e.hasOwnProperty(r)&&(i[r]=n(e[r],a));return i;case"Array":return(t=L.util.objId(e),a[t])?a[t]:(i=[],a[t]=i,e.forEach(function(e,t){i[t]=n(e,a)}),i);default:return e}},getLanguage:function(e){for(;e&&!u.test(e.className);)e=e.parentElement;return e?(e.className.match(u)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(e){var t=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(e.stack)||[])[1];if(t){var n,a=document.getElementsByTagName("script");for(n in a)if(a[n].src==t)return a[n]}return null}},isActive:function(e,t,n){for(var a="no-"+t;e;){var i=e.classList;if(i.contains(t))return!0;if(i.contains(a))return!1;e=e.parentElement}return!!n}},languages:{extend:function(e,t){var n,a=L.util.clone(L.languages[e]);for(n in t)a[n]=t[n];return a},insertBefore:function(n,e,t,a){var i,r=(a=a||L.languages)[n],s={};for(i in r)if(r.hasOwnProperty(i)){if(i==e)for(var o in t)t.hasOwnProperty(o)&&(s[o]=t[o]);t.hasOwnProperty(i)||(s[i]=r[i])}var l=a[n];return a[n]=s,L.languages.DFS(L.languages,function(e,t){t===l&&e!=n&&(this[e]=s)}),s},DFS:function e(t,n,a,i){i=i||{};var r,s,o,l=L.util.objId;for(r in t){t.hasOwnProperty(r)&&(n.call(t,r,t[r],a||r),s=t[r],"Object"!==(o=L.util.type(s))||i[l(s)]?"Array"!==o||i[l(s)]||(i[l(s)]=!0,e(s,n,r,i)):(i[l(s)]=!0,e(s,n,null,i)))}}},plugins:{},highlightAll:function(e,t){L.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var a={callback:n,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};L.hooks.run("before-highlightall",a),a.elements=Array.prototype.slice.apply(a.container.querySelectorAll(a.selector)),L.hooks.run("before-all-elements-highlight",a);for(var i,r=0;i=a.elements[r++];)L.highlightElement(i,!0===t,a.callback)},highlightElement:function(e,t,n){var a=L.util.getLanguage(e),i=L.languages[a];e.className=e.className.replace(u,"").replace(/\s+/g," ")+" language-"+a;var r=e.parentElement;r&&"pre"===r.nodeName.toLowerCase()&&(r.className=r.className.replace(u,"").replace(/\s+/g," ")+" language-"+a);var s={element:e,language:a,grammar:i,code:e.textContent};function o(e){s.highlightedCode=e,L.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,L.hooks.run("after-highlight",s),L.hooks.run("complete",s),n&&n.call(s.element)}if(L.hooks.run("before-sanity-check",s),!s.code)return L.hooks.run("complete",s),void(n&&n.call(s.element));L.hooks.run("before-highlight",s),s.grammar?t&&l.Worker?((t=new Worker(L.filename)).onmessage=function(e){o(e.data)},t.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))):o(L.highlight(s.code,s.grammar,s.language)):o(L.util.encode(s.code))},highlight:function(e,t,n){n={code:e,grammar:t,language:n};return L.hooks.run("before-tokenize",n),n.tokens=L.tokenize(n.code,n.grammar),L.hooks.run("after-tokenize",n),j.stringify(L.util.encode(n.tokens),n.language)},tokenize:function(e,t){var n=t.rest;if(n){for(var a in n)t[a]=n[a];delete t.rest}var i=new r;return N(i,i.head,e),function e(t,n,a,i,r,s){for(var o in a)if(a.hasOwnProperty(o)&&a[o]){var l=a[o];l=Array.isArray(l)?l:[l];for(var u=0;u<l.length;++u){if(s&&s.cause==o+","+u)return;var c,d=l[u],p=d.inside,f=!!d.lookbehind,g=!!d.greedy,h=d.alias;g&&!d.pattern.global&&(c=d.pattern.toString().match(/[imsuy]*$/)[0],d.pattern=RegExp(d.pattern.source,c+"g"));for(var b=d.pattern||d,m=i.next,k=r;m!==n.tail&&!(s&&k>=s.reach);k+=m.value.length,m=m.next){var v=m.value;if(n.length>t.length)return;if(!(v instanceof j)){var y,x=1;if(g){if(!(y=_(b,k,t,f)))break;var w=y.index,F=y.index+y[0].length,A=k;for(A+=m.value.length;A<=w;)m=m.next,A+=m.value.length;if(A-=m.value.length,k=A,m.value instanceof j)continue;for(var E=m;E!==n.tail&&(A<F||"string"==typeof E.value);E=E.next)x++,A+=E.value.length;x--,v=t.slice(k,A),y.index-=k}else if(!(y=_(b,0,v,f)))continue;var w=y.index,z=y[0],$=v.slice(0,w),S=v.slice(w+z.length),C=k+v.length;s&&C>s.reach&&(s.reach=C);var v=m.prev;$&&(v=N(n,v,$),k+=$.length),T(n,v,x);var z=new j(o,p?L.tokenize(z,p):z,h,z);m=N(n,v,z),S&&N(n,m,S),1<x&&e(t,n,a,m.prev,k,{cause:o+","+u,reach:C})}}}}}(e,i,t,i.head,0),function(e){var t=[],n=e.head.next;for(;n!==e.tail;)t.push(n.value),n=n.next;return t}(i)},hooks:{all:{},add:function(e,t){var n=L.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=L.hooks.all[e];if(n&&n.length)for(var a,i=0;a=n[i++];)a(t)}},Token:j};function j(e,t,n,a){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length}function _(e,t,n,a){e.lastIndex=t;n=e.exec(n);return n&&a&&n[1]&&(a=n[1].length,n.index+=a,n[0]=n[0].slice(a)),n}function r(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function N(e,t,n){var a=t.next,n={value:n,prev:t,next:a};return t.next=n,a.prev=n,e.length++,n}function T(e,t,n){for(var a=t.next,i=0;i<n&&a!==e.tail;i++)a=a.next;(t.next=a).prev=t,e.length-=i}if(l.Prism=L,j.stringify=function t(e,n){if("string"==typeof e)return e;if(Array.isArray(e)){var a="";return e.forEach(function(e){a+=t(e,n)}),a}var i={type:e.type,content:t(e.content,n),tag:"span",classes:["token",e.type],attributes:{},language:n},e=e.alias;e&&(Array.isArray(e)?Array.prototype.push.apply(i.classes,e):i.classes.push(e)),L.hooks.run("wrap",i);var r,s="";for(r in i.attributes)s+=" "+r+'="'+(i.attributes[r]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+s+">"+i.content+"</"+i.tag+">"},!l.document)return l.addEventListener&&(L.disableWorkerMessageHandler||l.addEventListener("message",function(e){var t=JSON.parse(e.data),n=t.language,e=t.code,t=t.immediateClose;l.postMessage(L.highlight(e,L.languages[n],n)),t&&l.close()},!1)),L;var e,n=L.util.currentScript();function a(){L.manual||L.highlightAll()}return n&&(L.filename=n.src,n.hasAttribute("data-manual")&&(L.manual=!0)),L.manual||("loading"===(e=document.readyState)||"interactive"===e&&n&&n.defer?document.addEventListener("DOMContentLoaded",a):window.requestAnimationFrame?window.requestAnimationFrame(a):window.setTimeout(a,16)),L}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});function d(e,t){var n=(n=e.className).replace(a," ")+" language-"+t;e.className=n.replace(/\s+/g," ").trim()}void 0!==n&&n.exports&&(n.exports=i),void 0!==t&&(t.Prism=i),i.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/,name:/[^\s<>'"]+/}},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},i.languages.markup.tag.inside["attr-value"].inside.entity=i.languages.markup.entity,i.languages.markup.doctype.inside["internal-subset"].inside=i.languages.markup,i.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Object.defineProperty(i.languages.markup.tag,"addInlined",{value:function(e,t){var n={};n["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:i.languages[t]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;n={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};n["language-"+t]={pattern:/[\s\S]+/,inside:i.languages[t]};t={};t[e]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return e}),"i"),lookbehind:!0,greedy:!0,inside:n},i.languages.insertBefore("markup","cdata",t)}}),i.languages.html=i.languages.markup,i.languages.mathml=i.languages.markup,i.languages.svg=i.languages.markup,i.languages.xml=i.languages.extend("markup",{}),i.languages.ssml=i.languages.xml,i.languages.atom=i.languages.xml,i.languages.rss=i.languages.xml,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:RegExp("[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+t.source+")*(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;t=e.languages.markup;t&&(t.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/(^|["'\s])style\s*=\s*(?:"[^"]*"|'[^']*')/i,lookbehind:!0,inside:{"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{style:{pattern:/(["'])[\s\S]+(?=["']$)/,lookbehind:!0,alias:"language-css",inside:e.languages.css},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},"attr-name":/^style/i}}},t.tag))}(i),i.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},i.languages.javascript=i.languages.extend("clike",{"class-name":[i.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),i.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,i.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:i.languages.regex},"regex-flags":/[a-z]+$/,"regex-delimiter":/^\/|\/$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:i.languages.javascript},{pattern:/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,inside:i.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:i.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:i.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),i.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:i.languages.javascript}},string:/[\s\S]+/}}}),i.languages.markup&&i.languages.markup.tag.addInlined("script","javascript"),i.languages.js=i.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&(Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),s=window.Prism,o={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},c="pre[data-src]:not(["+(l="data-src-status")+'="loaded"]):not(['+l+'="'+(u="loading")+'"])',a=/\blang(?:uage)?-([\w-]+)\b/i,s.hooks.add("before-highlightall",function(e){e.selector+=", "+c}),s.hooks.add("before-sanity-check",function(e){var t,n,a,i,r=e.element;r.matches(c)&&(e.code="",r.setAttribute(l,u),(t=r.appendChild(document.createElement("CODE"))).textContent="Loading…",n=r.getAttribute("data-src"),"none"===(e=e.language)&&(a=(/\.(\w+)$/.exec(n)||[,"none"])[1],e=o[a]||a),d(t,e),d(r,e),(a=s.plugins.autoloader)&&a.loadLanguages(e),(i=new XMLHttpRequest).open("GET",n,!0),i.onreadystatechange=function(){4==i.readyState&&(i.status<400&&i.responseText?(r.setAttribute(l,"loaded"),t.textContent=i.responseText,s.highlightElement(t)):(r.setAttribute(l,"failed"),400<=i.status?t.textContent="✖ Error "+i.status+" while fetching file: "+i.statusText:t.textContent="✖ Error: File does not exist or is empty"))},i.send(null))}),e=!(s.plugins.fileHighlight={highlight:function(e){for(var t,n=(e||document).querySelectorAll(c),a=0;t=n[a++];)s.highlightElement(t)}}),s.fileHighlight=function(){e||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),e=!0),s.plugins.fileHighlight.highlight.apply(this,arguments)})}).call(this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],12:[function(e,t,n){var a=e("bespoke"),i=e("bespoke-theme-nebula"),r=e("bespoke-keys"),s=e("bespoke-touch"),o=e("bespoke-bullets"),l=e("bespoke-backdrop"),u=e("bespoke-scale"),c=e("bespoke-hash"),d=e("bespoke-progress"),p=e("bespoke-forms");a.from("article",[i(),r(),s(),o("li, .bullet"),l(),u(),c(),d(),p()]),e("prismjs")},{bespoke:10,"bespoke-backdrop":1,"bespoke-bullets":2,"bespoke-forms":3,"bespoke-hash":4,"bespoke-keys":5,"bespoke-progress":6,"bespoke-scale":7,"bespoke-theme-nebula":8,"bespoke-touch":9,prismjs:11}]},{},[12]);