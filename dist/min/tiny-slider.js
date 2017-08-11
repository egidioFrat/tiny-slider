var tns=function(){function e(){for(var e,t,n,i=arguments[0]||{},a=1,r=arguments.length;a<r;a++)if(null!==(e=arguments[a]))for(t in e)n=e[t],i!==n&&void 0!==n&&(i[t]=n);return i}function t(e){return["true","false","null"].indexOf(e)>=0?JSON.parse(e):e}function n(e,t){return localStorage.setItem(e,t),t}function i(){return void 0===window.tnsId?window.tnsId=1:window.tnsId++,"tns"+window.tnsId}function a(e){var t=document.createElement("style");return e&&t.setAttribute("media",e),document.querySelector("head").appendChild(t),t.sheet?t.sheet:t.styleSheet}function r(e,t,n,i){"insertRule"in e?e.insertRule(t+"{"+n+"}",i):"addRule"in e&&e.addRule(t,n,i)}function o(e,t){return Math.atan2(e,t)*(180/Math.PI)}function s(e,t){return Math.abs(90-Math.abs(e))>=90-t?"horizontal":Math.abs(90-Math.abs(e))<=t&&"vertical"}function l(e,t){return e.hasAttribute(t)}function c(e,t){return e.getAttribute(t)}function u(e){return void 0!==e.item}function d(e,t){if(e=u(e)||e instanceof Array?e:[e],"[object Object]"===Object.prototype.toString.call(t))for(var n=e.length;n--;)for(var i in t)e[n].setAttribute(i,t[i])}function f(e,t){e=u(e)||e instanceof Array?e:[e],t=t instanceof Array?t:[t];for(var n=t.length,i=e.length;i--;)for(var a=n;a--;)e[i].removeAttribute(t[a])}function h(e){var t=e.cloneNode(!0);e.parentNode.insertBefore(t,e),e.remove(),e=null}function p(e){l(e,"hidden")||d(e,{hidden:""})}function v(e){l(e,"hidden")&&f(e,"hidden")}function m(e){return"boolean"==typeof e.complete?e.complete:"number"==typeof e.naturalWidth?0!==e.naturalWidth:void 0}function y(e){for(var t=document.createElement("fakeelement"),n=(e.length,0);n<e.length;n++)if(prop=e[n],void 0!==t.style[prop])return prop;return!1}function g(e,t){var n=!1;return/^Webkit/.test(e)?n="webkit"+t+"End":/^O/.test(e)?n="o"+t+"End":e&&(n=t.toLowerCase()+"end"),n}function b(e,t){for(var n in t){var i=("touchstart"===n||"touchmove"===n)&&D;e.addEventListener(n,t[n],i)}}function x(e,t){for(var n in t){var i=("touchstart"===n||"touchmove"===n)&&D;e.removeEventListener(n,t[n],i)}}function E(){return{topics:{},on:function(e,t){this.topics[e]=this.topics[e]||[],this.topics[e].push(t)},off:function(e,t){if(this.topics[e])for(var n=0;n<this.topics[e].length;n++)if(this.topics[e][n]===t){this.topics[e].splice(n,1);break}},emit:function(e,t){this.topics[e]&&this.topics[e].forEach(function(e){e(t)})}}}function T(e,t,n,i,a,r,o){function s(){r-=l,u+=d,e.style[t]=n+u+c+i,r>0?setTimeout(s,l):o()}var l=Math.min(r,10),c=a.indexOf("%")>=0?"%":"px",a=a.replace(c,""),u=Number(e.style[t].replace(n,"").replace(i,"").replace(c,"")),d=(a-u)/r*l;setTimeout(s,l)}Object.keys||(Object.keys=function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}),function(){"use strict";"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)})}(),function(){"use strict";var e,t,n,i=window,a=document,r=Object,o="length",s="item contains add remove toggle toString toLocaleString".split(" "),l=s[2],c=s[3],u=s[4],d="prototype",f="defineProperty"in r||"__defineGetter__"in r[d]||null,h=function(e,t,n,i){r.defineProperty?r.defineProperty(e,t,{configurable:!1===f||!!i,get:n}):e.__defineGetter__(t,n)},p=function(e,t){var n=this,i=[],a={},d=0,f=0,p=function(){if(d>=f)for(;f<d;++f)!function(e){h(n,e,function(){return v(),i[e]},!1)}(f)},v=function(){var n,r,s=arguments,l=/\s+/;if(s[o])for(r=0;r<s[o];++r)if(l.test(s[r]))throw n=new SyntaxError('String "'+s[r]+'" contains an invalid character'),n.code=5,n.name="InvalidCharacterError",n;for(i=(""+e[t]).replace(/^\s+|\s+$/g,"").split(l),""===i[0]&&(i=[]),a={},r=0;r<i[o];++r)a[i[r]]=!0;d=i[o],p()};return v(),h(n,o,function(){return v(),d}),n[s[6]]=n[s[5]]=function(){return v(),i.join(" ")},n.item=function(e){return v(),i[e]},n.contains=function(e){return v(),!!a[e]},n[l]=function(){v.apply(n,r=arguments);for(var r,s,l=0,c=r[o];l<c;++l)s=r[l],a[s]||(i.push(s),a[s]=!0);d!==i[o]&&(d=i[o]>>>0,e[t]=i.join(" "),p())},n[c]=function(){v.apply(n,r=arguments);for(var r,s={},l=0,c=[];l<r[o];++l)s[r[l]]=!0,delete a[r[l]];for(l=0;l<i[o];++l)s[i[l]]||c.push(i[l]);i=c,d=c[o]>>>0,e[t]=i.join(" "),p()},n[u]=function(e,t){return v.apply(n,[e]),void 0!==t?t?(n[l](e),!0):(n[c](e),!1):a[e]?(n[c](e),!1):(n[l](e),!0)},function(e,t){if(t)for(var n=0;n<7;++n)t(e,s[n],{enumerable:!1})}(n,r.defineProperty),n},v=function(e,t,n){h(e[d],t,function(){var e,i=this,r="__defineGetter__defineProperty"+t;if(i[r])return e;if(i[r]=!0,!1===f){for(var s,l=v.mirror=v.mirror||a.createElement("div"),c=l.childNodes,u=c[o],d=0;d<u;++d)if(c[d]._R===i){s=c[d];break}s||(s=l.appendChild(a.createElement("div"))),e=p.call(s,i,n)}else e=new p(i,n);return h(i,t,function(){return e}),delete i[r],e},!0)};if(i.DOMTokenList)e=a.createElement("div").classList,d=i.DOMTokenList[d],e[l].apply(e,s),2>e[o]&&(t=d[l],n=d[c],d[l]=function(){for(var e=0,n=arguments;e<n[o];++e)t.call(this,n[e])},d[c]=function(){for(var e=0,t=arguments;e<t[o];++e)n.call(this,t[e])}),e[u]("List",!1)&&(d[u]=function(e,t){var n=this;return n[(t=void 0===t?!n.contains(e):t)?l:c](e),!!t});else{if(f)try{h({},"support")}catch(e){f=!1}p.polyfill=!0,i.DOMTokenList=p,v(i.Element,"classList","className"),v(i.HTMLLinkElement,"relList","rel"),v(i.HTMLAnchorElement,"relList","rel"),v(i.HTMLAreaElement,"relList","rel")}}();var C=!1;try{var w=Object.defineProperty({},"passive",{get:function(){C=!0}});window.addEventListener("test",null,w)}catch(e){}var D=!!C&&{passive:!0},N=navigator.userAgent,L=localStorage;L.tnsApp?L.tnsApp!==N&&(L.tnsApp=N,["tnsCalc","tnsSubpixel","tnsCSSMQ","tnsTf","tnsTsDu","tnsTsDe","tnsAnDu","tnsAnDe","tnsTsEn","tnsAnEn"].forEach(function(e){L.removeItem(e)})):L.tnsApp=N;var M=document,S=window,O={ENTER:13,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40},k=t(L.tnsCalc||n("tnsCalc",function(){var e=document,t=e.body,n=e.createElement("div"),i=!1;t.appendChild(n);try{for(var a,r=["calc(10px)","-moz-calc(10px)","-webkit-calc(10px)"],o=0;o<3;o++)if(a=r[o],n.style.width=a,10===n.offsetWidth){i=a.replace("(10px)","");break}}catch(e){}return t.removeChild(n),i}())),A=t(L.tnsSubpixel||n("tnsSubpixel",function(){var e,t=document,n=t.body,i=t.createElement("div"),a=t.createElement("div");i.style.cssText="width: 10px",a.style.cssText="float: left; width: 5.5px; height: 10px;",e=a.cloneNode(!0),i.appendChild(a),i.appendChild(e),n.appendChild(i);var r=a.offsetTop!==e.offsetTop;return n.removeChild(i),r}())),P=t(L.tnsCSSMQ||n("tnsCSSMQ",function(){var e=document,t=e.body,n=e.createElement("div");n.className="tns-mq-test",t.appendChild(n);var i=window.getComputedStyle?window.getComputedStyle(n).position:n.currentStyle.position;return t.removeChild(n),"absolute"===i}())),I=t(L.tnsTf||n("tnsTf",y(["transform","WebkitTransform","MozTransform","msTransform","OTransform"]))),W=t(L.tnsTsDu||n("tnsTsDu",y(["transitionDuration","WebkitTransitionDuration","MozTransitionDuration","OTransitionDuration"]))),R=t(L.tnsTsDe||n("tnsTsDe",y(["transitionDelay","WebkitTransitionDelay","MozTransitionDelay","OTransitionDelay"]))),H=t(L.tnsAnDu||n("tnsAnDu",y(["animationDuration","WebkitAnimationDuration","MozAnimationDuration","OAnimationDuration"]))),z=t(L.tnsAnDe||n("tnsAnDe",y(["animationDelay","WebkitAnimationDelay","MozAnimationDelay","OAnimationDelay"]))),B=t(L.tnsTsEn||n("tnsTsEn",g(W,"Transition"))),j=t(L.tnsAnEn||n("tnsAnEn",g(H,"Animation")));return P||(A=!1),function(t){function n(e){var n=t[e];return!n&&$e&&Je.indexOf(e)>=0&&$e.forEach(function(t){Qe[t][e]&&(n=!0)}),n}function u(e,n){n=n?n:Ye;var i=t[e];if("items"===e&&u("fixedWidth"))i=Math.floor(n/u("fixedWidth"));else if($e&&Je.indexOf(e)>=0)for(var a=0,r=$e.length;a<r;a++){var o=$e[a];if(!(n>=o))break;e in Qe[o]&&(i=Qe[o][e])}return"slideBy"===e&&"page"===i&&(i=rt),"items"===e&&(i=Math.max(1,Math.min(Ke,i))),"loop"===e&&u("rewind")&&i&&(i=!1),i}function y(e){return k?k+"("+100*e+"% / "+xt+")":100*e/xt+"%"}function g(e,t,n){var i="";if(e){var a=e;t&&(a+=t),i=n?"margin: 0px "+(Ye%(n+t)+t)/2+"px":_e?"margin: 0 "+e+"px 0 "+a+"px;":"padding: "+a+"px 0 "+e+"px 0;"}else if(t&&!n){var r=_e?"right":"bottom";i="margin-"+r+": -"+t+"px;"}return i}function C(e,t,n){n=Math.min(Ke,n);return e?(e+Number(t))*xt+"px":k?k+"("+100*xt+"% / "+n+")":100*xt/n+"%"}function w(e,t,n){n=Math.min(Ke,n);var i=gutterStr="";if(_e){if(i="width:",e)i+=e+Number(t)+"px";else{var a=Re?xt:Math.min(Ke,n);i+=k?k+"(100% / "+a+")":100/a+"%"}i+=jt+";"}if(t!==!1){var r=_e?"padding-":"margin-",o=_e?"right":"bottom";gutterStr=r+o+": "+t+"px;"}return i+gutterStr}function D(e){clearTimeout(it),it=setTimeout(function(){Ye!==qe.clientWidth&&(N(),"outer"===st&&Pt.emit("outerResized",ke(e)))},100)}function N(){var e=Ze,n=Nt,i=rt;if(Ye=qe.clientWidth,Ge=Fe.clientWidth,$e&&(Ze=L()),e!==Ze){var a=Ze>0?Qe[$e[Ze-1]]:t,r=dt,o=ut,s=ct,l=lt,c=Bt;if(Bt=Ke<=rt,rt=a.items||u("items"),dt=!Bt&&(a.arrowKeys||u("arrowKeys")),ot=u("slideBy"),ft=a.speed||u("speed"),vt=a.autoHeight||u("autoHeight"),pt=a.loop||u("loop"),ht=a.rewind||u("rewind"),ut=a.fixedWidth||u("fixedWidth"),ct=a.edgePadding||u("edgePadding"),lt=a.gutter||u("gutter"),Re||(He=a.animateIn||u("animateIn"),ze=a.animateOut||u("animateOut"),Be=a.animateNormal||u("animateNormal"),je=a.animateDelay||u("animateDelay")),Vt){var d=Zt,f=en;Zt=!Bt&&(a.controls||u("controls")),en=a.controlsText||u("controlsText"),Zt!==d&&(Zt?v(tn):p(tn)),en!==f&&(Jt.innerHTML=en[0],$t.innerHTML=en[1])}if(Xt){var h=an;an=!Bt&&(a.nav||u("nav")),an!==h&&(an?v(rn):p(rn))}if(Yt){var m=Nn;Nn=!Bt&&(a.touch||u("touch")),Nn!==m&&Re&&(Nn?b(Ue,Ft):x(Ue,Ft))}if(Qt){var y=Sn;Sn=!Bt&&(a.mouseDrag||u("mouseDrag")),Sn!==y&&Re&&(Sn?b(Ue,Ut):x(Ue,Ut))}if(Kt){var E=fn,T=mn,D=En,N=vn;if(Bt?fn=mn=En=!1:(fn=a.autoplay||u("autoplay"),fn?(mn=a.autoplayHoverPause||u("autoplayHoverPause"),En=a.autoplayResetOnVisibility||u("autoplayResetOnVisibility")):mn=En=!1),vn=a.autoplayText||u("autoplayText"),hn=a.autoplayTimeout||u("autoplayTimeout"),fn!==E&&(fn?v(yn):p(yn)),mn!==T&&(mn?b(Ue,Gt):x(Ue,Gt)),En!==D&&(En?b(M,_t):x(M,_t)),vn!==N){var S=gn?1:0;yn.innerHTML=xn+vn[S]}}Bt!==c&&(Bt?(gn&&fe(),Nt=Re?0:bt):u("autoplay")&&!gn&&de()),dt!==r&&(dt?b(M,qt):x(M,qt)),ct!==s&&(Mt=ct?1:0,St=Mt,Ot=xt-rt-Mt),An(),P||(ct===s&&lt===l||(Fe.style.cssText=g(ct,lt,ut)),ut===o&&lt===l&&rt===i||(Re&&_e&&(Ue.style.width=C(ut,lt,rt)),(_e||lt!==l)&&(str=w(ut,lt,rt),mt.removeRule(G(mt)-1),mt.addRule("#"+zt+" .tns-item",str,G(mt)))),ut||ie(0)),rt!==i&&(Pt.emit("itemsChanged"),F(),$(),Oe(),J(),Nt!==n&&(Pt.emit("indexChanged",ke()),ie(0)),navigator.msMaxTouchPoints&&Y())}else u("fixedWidth")&&(rt=u("items"));_e||(K(),Me(),te()),ut&&ct&&(Fe.style.cssText=g(ct,lt,ut)),U()}function L(){return Ze=0,$e.forEach(function(e,t){Ye>=e&&(Ze=t+et)}),Ze}function G(e){return e.cssRules?e.cssRules.length:e.rules.length}function _(){gn&&(fe(),bn=!0)}function q(){!gn&&bn&&(de(),bn=!1)}function F(){if(yt){var e=Nt,t=Nt+rt;for(ct&&(e-=1,t+=1);e<t;e++)[].forEach.call(Xe[e].querySelectorAll(".tns-lazy-img"),function(e){var t={};t[B]=function(e){e.stopPropagation()},b(e,t),e.classList.contains("loaded")||(e.src=c(e,"data-src"),e.classList.add("loaded"))})}}function U(){if(vt){for(var e=[],t=Nt;t<Nt+rt;t++)[].forEach.call(Xe[t].querySelectorAll("img"),function(t){e.push(t)});0===e.length?X():V(e)}}function V(e){e.forEach(function(t,n){m(t)&&e.splice(n,1)}),0===e.length?X():setTimeout(function(){V(e)},16)}function X(){for(var e,t=[],n=Nt;n<Nt+rt;n++)t.push(Xe[n].offsetHeight);e=Math.max.apply(null,t),Fe.style.height!==e&&(W&&Z(ft),Fe.style.height=e+"px")}function K(){nt=[0];for(var e,t=Xe[0].getBoundingClientRect().top,n=1;n<xt;n++)e=Xe[n].getBoundingClientRect().top,nt.push(e-t)}function Y(){qe.style.msScrollSnapPointsX="snapInterval(0%, "+100/rt+"%)"}function Q(){for(var e=xt;e--;){var t=Xe[e];e>=Nt&&e<Nt+rt?l(t,"tabindex")&&(d(t,{"aria-hidden":"false"}),f(t,["tabindex"])):l(t,"tabindex")||d(t,{"aria-hidden":"true",tabindex:"-1"})}}function J(){an&&(cn=ln!==-1?ln:!pt&&ct?(Nt-1)%Ke:Nt%Ke,ln=-1,cn!==un&&(d(nn[un],{tabindex:"-1","aria-selected":"false"}),d(nn[cn],{tabindex:"0","aria-selected":"true"}),un=cn))}function $(){if(Zt&&!pt){var e=[],t=[];Nt===St?(e.push(Jt),t.push($t),ge(Jt,$t)):ht||Nt!==Ot?t.push(Jt,$t):(e.push($t),t.push(Jt),ge($t,Jt)),e.length>0&&e.forEach(function(e){e.disabled||(e.disabled=!0)}),t.length>0&&t.forEach(function(e){e.disabled&&(e.disabled=!1)})}}function Z(e,t){e=e?e/1e3+"s":"",t=t||Ue,t.style[W]=e,Re||(t.style[H]=e),_e||(Fe.style[W]=e)}function ee(){var e;if(_e)if(ut)e=-(ut+Number(lt))*Nt+"px";else{var t=I?xt:rt;e=100*-Nt/t+"%"}else e=-nt[Nt]+"px";return e}function te(e){e||(e=ee()),Ue.style[Ct]=wt+e+Dt}function ne(e,t,n,i){for(var a=e,r=e+rt;a<r;a++){var o=Xe[a];i||(o.style.left=100*(a-Nt)/rt+"%"),W&&Z(ft,o),je&&R&&(o.style[R]=o.style[z]=je*(a-e)/1e3+"s"),o.classList.remove(t),o.classList.add(n),i&&gt.push(o)}}function ie(e,t){void 0===e&&(e=ft),W&&Z(e),Pn(e,t)}function ae(){kt=!0,Tt&&An(),Nt!==Lt&&Pt.emit("indexChanged",ke()),Pt.emit("transitionStart",ke()),ie()}function re(e){function t(e){return e.toLowerCase().replace(/-/g,"")}if(Pt.emit("transitionEnd",ke(e)),!Re&&gt.length>0)for(var n=0;n<rt;n++){var i=gt[n];i.style.left="",W&&Z(0,i),je&&R&&(i.style[R]=i.style[z]=""),i.classList.remove(ze),i.classList.add(Be)}if(!e||!Re&&e.target.parentNode===Ue||e.target===Ue&&t(e.propertyName)===t(Ct)){if(!Tt){var a=Nt;An(),Nt!==a&&(ie(0),Pt.emit("indexChanged",ke()))}Q(),(an&&!pt||an&&pt&&on.indexOf(Nt%Ke)===-1)&&Oe(),J(),$(),F(),U(),"inner"===st&&Pt.emit("innerLoaded",ke()),kt=!1,Lt=Nt}}function oe(e){if(!kt){var t,n=Nt%Ke;switch(n<0&&(n+=Ke),e){case"next":t=1;break;case"prev":t=-1;break;case"first":t=-n;break;case"last":t=Ke-1-n;break;default:if("number"==typeof e){var i=e%Ke;i<0&&(i+=Ke),!pt&&ct&&(i+=1),t=i-n}}Nt+=t,Tt&&An(),Nt%Ke!=Lt%Ke&&ae()}}function se(e){kt||(Nt+=e*ot,ae())}function le(){se(-1)}function ce(){ht&&Nt===Ot?oe(0):se(1)}function ue(e){if(!kt){for(var t,n=e.target||e.srcElement;null===c(n,"data-nav");)n=n.parentNode;t=ln=Number(c(n,"data-nav")),oe(t)}}function de(){pe(),d(yn,{"data-action":"stop"}),yn.innerHTML=xn+vn[1],gn=!0}function fe(){he(),d(yn,{"data-action":"start"}),yn.innerHTML=xn.replace("Stop","Start")+vn[0],gn=!1}function he(){gn="paused",clearInterval(dn)}function pe(){gn!==!0&&(clearInterval(dn),dn=setInterval(function(){se(pn)},hn))}function ve(){gn?fe():de()}function me(){Tn!=M.hidden&&gn!==!1&&(M.hidden?he():pe()),Tn=M.hidden}function ye(e){switch(e=e||S.event,e.keyCode){case O.LEFT:le();break;case O.RIGHT:ce()}}function ge(e,t){"object"==typeof e&&"object"==typeof t&&e===M.activeElement&&(e.blur(),t.focus())}function be(e){e=e||S.event;var t=e.keyCode;M.activeElement;switch(t){case O.LEFT:case O.UP:case O.PAGEUP:Jt.disabled||le();break;case O.RIGHT:case O.DOWN:case O.PAGEDOWN:$t.disabled||ce();break;case O.HOME:oe(0);break;case O.END:oe(Ke-1)}}function xe(e){function n(e){return t.navContainer?e:on[e]}e=e||S.event;var i=e.keyCode,a=M.activeElement,r=Number(c(a,"data-nav")),o=on.length,s=on.indexOf(r);switch(t.navContainer&&(o=Ke,s=r),i){case O.LEFT:case O.PAGEUP:s>0&&ge(a,nn[n(s-1)]);break;case O.UP:case O.HOME:s>0&&ge(a,nn[n(0)]);break;case O.RIGHT:case O.PAGEDOWN:s<o-1&&ge(a,nn[n(s+1)]);break;case O.DOWN:case O.END:s<o-1&&ge(a,nn[n(o-1)]);break;case O.ENTER:case O.SPACE:ue(e)}}function Ee(){ie(0,Ue.scrollLeft()),Lt=Nt}function Te(e){return e.target||e.srcElement}function Ce(e){return"a"===e.tagName.toLowerCase()}function we(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function De(e){e=e||S.event,Ce(Te(e))&&"touchstart"!==e.type&&we(e);var t="touchstart"===e.type?e.changedTouches[0]:e;Ln=parseInt(t.clientX),Mn=parseInt(t.clientY),Cn=Number(Ue.style[Ct].replace(wt,"").replace(Dt,"").replace(/(px|%)/g,"")),"touchstart"===e.type?Pt.emit("touchStart",ke(e)):(Pt.emit("dragStart",ke(e)),On=!0)}function Ne(e){if(e=e||S.event,On&&"mousemove"===e.type&&!kn&&(kn=!0),null!==Ln){Ce(Te(e))&&"touchmove"!==e.type&&we(e);var n="touchmove"===e.type?e.changedTouches[0]:e;if(wn=parseInt(n.clientX)-Ln,Dn=parseInt(n.clientY)-Mn,s(o(Dn,wn),15)===t.axis){at=!0,"touchmove"===e.type?Pt.emit("touchMove",ke(e)):Pt.emit("dragMove",ke(e));var i=Cn;if(_e)if(ut)i+=wn,i+="px";else{var a=I?wn*rt*100/(Ge*xt):100*wn/Ge;i+=a,i+="%"}else i+=Dn,i+="px";I&&Z(0),Ue.style[Ct]=wt+i+Dt}}}function Le(e){if(e=e||S.event,On&&(On=!1),at){at=!1;var t=0===e.type.indexOf("touch")?e.changedTouches[0]:e;if(wn=parseInt(t.clientX)-Ln,Dn=parseInt(t.clientY)-Mn,Ln=Mn=null,_e){var n=-wn*rt/Ge;n=wn>0?Math.floor(n):Math.ceil(n),Nt+=n}else{var i=-(Cn+Dn);if(i<=0)Nt=St;else if(i>=nt[nt.length-1])Nt=Ot;else{var a=0;do{a++,Nt=Dn<0?a+1:a}while(a<xt&&i>=nt[a+1])}}0===e.type.indexOf("touch")?Pt.emit("touchEnd",ke(e)):Pt.emit("dragEnd",ke(e)),ae()}if(kn){kn=!1;var r=Te(e);Ce(r)&&b(r,{click:function e(t){we(t),x(r,{click:e})}})}}function Me(){Fe.style.height=nt[Nt+rt]-nt[Nt]+"px"}function Se(){on=[];for(var e=!pt&&ct?Nt-1:Nt,t=e%Ke%rt;t<Ke;)!pt&&t+rt>Ke&&(t=Ke-rt),on.push(t),t+=rt;(pt&&on.length*rt<Ke||!pt&&on[0]>0)&&on.unshift(0)}function Oe(){an&&!t.navContainer&&(Se(),on!==sn&&(sn.length>0&&sn.forEach(function(e){d(nn[e],{hidden:""})}),on.length>0&&on.forEach(function(e){f(nn[e],"hidden")}),sn=on))}function ke(e){return{container:Ue,slideItems:Xe,navContainer:rn,navItems:nn,controlsContainer:tn,prevButton:Jt,nextButton:$t,items:rt,slideBy:ot,cloneCount:bt,slideCount:Ke,slideCountNew:xt,index:Nt,indexCached:Lt,navCurrent:cn,navCurrentCached:un,visibleNavIndexes:on,visibleNavIndexesCached:sn,event:e||{}}}if(t=e({container:M.querySelector(".slider"),mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,slideBy:1,controls:!0,controlsText:["prev","next"],controlsContainer:!1,nav:!0,navContainer:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayResetOnVisibility:!0,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,touch:!0,mouseDrag:!1,nested:!1,onInit:!1},t||{}),["container","controlsContainer","navContainer","autoplayButton"].forEach(function(e){"string"==typeof t[e]&&(t[e]=M.querySelector(t[e]))}),t.container&&t.container.nodeName&&!(t.container.children.length<2)){if(t.responsive){var Ae={},Pe=t.responsive;for(var Ie in Pe){var We=Pe[Ie];Ae[Ie]="number"==typeof We?{items:We}:We}t.responsive=Ae,Ae=null}var Re="carousel"===t.mode;if(!Re){t.axis="horizontal",t.edgePadding=!1,t.loop=!0,t.autoHeight=!0,t.slideBy="page";var He="tns-fadeIn",ze="tns-fadeOut",Be=t.animateNormal||"tns-normal",je=!1;B&&j&&(He=t.animateIn||He,ze=t.animateOut||ze,je=t.animateDelay||je)}var Ge,_e="horizontal"===t.axis,qe=M.createElement("div"),Fe=M.createElement("div"),Ue=t.container,Ve=Ue.parentNode,Xe=Ue.children,Ke=Xe.length,Ye=Ve.clientWidth,Qe=t.responsive,Je=[],$e=!1,Ze=0,et=0;if(Qe){$e=Object.keys(Qe).sort(function(e,t){return e-t}),$e.indexOf(0)<0&&(et=1),$e.forEach(function(e){Je=Je.concat(Object.keys(Qe[e]))});var tt=[];Je.forEach(function(e){tt.indexOf(e)<0&&tt.push(e)}),Je=tt,Ze=L()}var nt,it,at,rt=u("items"),ot="page"===u("slideBy")?rt:u("slideBy"),st=t.nested,lt=u("gutter"),ct=u("edgePadding"),ut=u("fixedWidth"),dt=u("arrowKeys"),ft=u("speed"),ht=u("rewind"),pt=!ht&&u("loop"),vt=u("autoHeight"),mt=a(),yt=t.lazyload,gt=[],bt=pt?2*Ke:n("edgePadding")?1:0,xt=Re?Ke+2*bt:Ke+bt,Et=!(!ut||pt||ct),Tt=!Re||!pt,Ct=_e?"left":"top",wt="",Dt="",Nt=Re?bt:0,Lt=Nt,Mt=ct?1:0,St=Mt,Ot=xt-rt-Mt,kt=!1,At=t.onInit,Pt=new E,It=Ue.id,Wt=Ue.className,Rt=Xe[0].id,Ht=Xe[0].className,zt=Ue.id||i(),Bt=Ke<=rt,jt="inner"===st?" !important":"",Gt={mouseover:_,mouseout:q},_t={visibilitychange:me},qt={keydown:ye},Ft={touchstart:De,touchmove:Ne,touchend:Le,touchcancel:Le},Ut={mousedown:De,mousemove:Ne,mouseup:Le,mouseleave:Le},Vt=n("controls"),Xt=n("nav"),Kt=n("autoplay"),Yt=n("touch"),Qt=n("mouseDrag");if(Vt)var Jt,$t,Zt=u("controls"),en=u("controlsText"),tn=t.controlsContainer;if(Xt)var nn,an=u("nav"),rn=t.navContainer,on=[],sn=on,ln=-1,cn=0,un=0;if(Kt)var dn,fn=u("autoplay"),hn=u("autoplayTimeout"),pn="forward"===t.autoplayDirection?1:-1,vn=u("autoplayText"),mn=u("autoplayHoverPause"),yn=t.autoplayButton,gn=!1,bn=!1,xn="<span class='tns-visually-hidden'>Stop Animation</span>",En=u("autoplayResetOnVisibility"),Tn=!1;if(Yt)var Cn,wn,Dn,Nn=u("touch"),Ln=null,Mn=null;if(Qt)var Sn=u("mouseDrag"),On=!1,kn=!1;Bt&&(Zt=an=Nn=Sn=dt=fn=mn=En=!1),I&&(Ct=I,wt="translate",wt+=_e?"X(":"Y(",Dt=")"),Pt.on("itemsChanged",function(){Ot=xt-rt-Mt,"page"===t.slideBy&&(ot=rt),Q()}),function(){qe.appendChild(Fe),Ve.insertBefore(qe,Ue),Fe.appendChild(Ue),Ge=Fe.clientWidth;var e="tns-outer",i="tns-inner",a=" tns-slider tns-"+t.mode;if(Re&&(_e&&(n("edgePadding")||n("gutter")&&!t.fixedWidth)?e+=" tns-ovh":i+=" tns-ovh"),qe.className=e,Fe.className=i,Fe.id=zt+"-iw",vt&&(Fe.className+=" tns-ah",Fe.style[W]=ft/1e3+"s"),""===Ue.id&&(Ue.id=zt),a+=A?" tns-subpixel":" tns-no-subpixel",a+=k?" tns-calc":" tns-no-calc",Re&&(a+=" tns-"+t.axis),Ue.className+=a,Re&&B){var o={};o[B]=re,b(Ue,o)}e=i=a=null;for(var s=0;s<Ke;s++){var l=Xe[s];l.id=zt+"-item"+s,l.classList.add("tns-item"),!Re&&Be&&l.classList.add(Be),d(l,{"aria-hidden":"true",tabindex:"-1"})}if(pt||ct){for(var c=M.createDocumentFragment(),h=M.createDocumentFragment(),v=bt;v--;){var m=v%Ke,x=Xe[m].cloneNode(!0);if(f(x,"id"),h.insertBefore(x,h.firstChild),Re){var E=Xe[Ke-1-m].cloneNode(!0);f(E,"id"),c.appendChild(E)}}Ue.insertBefore(c,Ue.firstChild),Ue.appendChild(h),Xe=Ue.children}for(var T=Nt;T<Nt+rt;T++){var l=Xe[T];d(l,{"aria-hidden":"false"}),f(l,["tabindex"]),Re||(l.style.left=100*(T-Nt)/rt+"%",l.classList.remove(Be),l.classList.add(He))}if(!A&&Re&&_e&&[].forEach.call(Xe,function(e,t){e.style.marginLeft=y(t)}),Re&&_e&&A){var L=S.getComputedStyle(Xe[0]).fontSize;L.indexOf("em")!==-1&&(L=16*Number(L.replace(/r?em/,""))+"px"),r(mt,"#"+zt,"font-size:0;",G(mt)),r(mt,"#"+zt+" .tns-item","font-size:"+L+";",G(mt))}if(P){var O=g(t.edgePadding,t.gutter,t.fixedWidth);mt.insertRule("#"+zt+"-iw{"+O+"}",mt.cssRules.length),Re&&_e&&(O="width:"+C(t.fixedWidth,t.gutter,t.items),mt.insertRule("#"+zt+"{"+O+"}",mt.cssRules.length)),(_e||t.gutter)&&(O=w(t.fixedWidth,t.gutter,t.items),mt.insertRule("#"+zt+" .tns-item{"+O+"}",mt.cssRules.length))}else if(Fe.style.cssText=g(ct,lt,ut),Re&&_e&&(Ue.style.width=C(ut,lt,rt)),_e||lt){var O=w(ut,lt,rt);mt.addRule("#"+zt+" .tns-item",O,G(mt))}if(_e||(K(),Me()),Qe&&P&&$e.forEach(function(e){var t=Qe[e],n=containerStr=slideStr="",i=u("items",e),a=u("fixedWidth",e),r=u("edgePadding",e),o=u("gutter",e);("edgePadding"in t||"gutter"in t)&&(n="#"+zt+"-iw{"+g(r,o,a)+"}"),("fixedWidth"in t||"gutter"in t||"items"in t)&&(Re&&_e&&(containerStr="#"+zt+"{width:"+C(a,o,i)+"}"),(_e||"gutter"in t)&&(slideStr="#"+zt+" .tns-item{"+w(a,o,i)+"}")),mt.insertRule("@media (min-width: "+e/16+"em) {"+n+containerStr+slideStr+"}",mt.cssRules.length)}),Re&&te(),navigator.msMaxTouchPoints&&(qe.classList.add("ms-touch"),b(qe,{scroll:Ee}),Y()),Xt){if(rn)d(rn,{"aria-label":"Carousel Pagination"}),nn=rn.children,[].forEach.call(nn,function(e,t){d(e,{"data-nav":t,tabindex:"-1","aria-selected":"false","aria-controls":zt+"-item"+t})});else{for(var I="",T=0;T<Ke;T++)I+='<button data-nav="'+T+'" tabindex="-1" aria-selected="false" aria-controls="'+zt+"-item"+T+'" hidden type="button"></button>';I='<div class="tns-nav" aria-label="Carousel Pagination">'+I+"</div>",qe.insertAdjacentHTML("afterbegin",I),[].forEach.call(qe.children,function(e){e.classList.contains("tns-nav")&&(rn=e)}),nn=rn.children,Oe()}d(nn[0],{tabindex:"0","aria-selected":"true"});for(var R=0;R<Ke;R++)b(nn[R],{click:ue,keydown:xe});an||p(rn)}Kt&&(yn?d(yn,{"data-action":"stop"}):(rn||(qe.insertAdjacentHTML("afterbegin",'<div class="tns-nav" aria-label="Carousel Pagination"></div>'),rn=qe.querySelector(".tns-nav")),rn.insertAdjacentHTML("beforeend",'<button data-action="stop" type="button">'+xn+vn[0]+"</button>"),yn=rn.querySelector("[data-action]")),b(yn,{click:ve}),fn?(mn&&b(Ue,Gt),En&&b(Ue,_t)):p(yn)),Vt&&(tn?(Jt=tn.children[0],$t=tn.children[1],d(tn,{"aria-label":"Carousel Navigation",tabindex:"0"}),d(Jt,{"data-controls":"prev"}),d($t,{"data-controls":"next"}),d(tn.children,{"aria-controls":zt,tabindex:"-1"})):(qe.insertAdjacentHTML("afterbegin",'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="'+zt+'" type="button">'+en[0]+'</button><button data-controls="next" tabindex="-1" aria-controls="'+zt+'" type="button">'+en[1]+"</button></div>"),[].forEach.call(qe.children,function(e){e.classList.contains("tns-controls")&&(tn=e)}),Jt=tn.children[0],$t=tn.children[1]),pt||(Jt.disabled=!0),b(tn,{keydown:be}),b(Jt,{click:le}),b($t,{click:ce}),Zt||p(tn)),Nn&&b(Ue,Ft),Sn&&b(Ue,Ut),dt&&b(M,qt),"inner"===st?Pt.on("outerResized",function(){N(),Pt.emit("innerLoaded",ke())}):(b(S,{resize:D}),"outer"===st&&Pt.on("innerLoaded",U)),F(),U(),"function"==typeof At&&At(ke()),"inner"===st&&Pt.emit("innerLoaded",ke())}();var An=function(){return pt?function(){var e=St,t=Ot;Re&&(e+=ot,t-=ot);var n=lt?lt:0;if(ut&&Ye%(ut+n)>n&&(t-=1),Nt>t)for(;Nt>=e+Ke;)Nt-=Ke;else if(Nt<e)for(;Nt<=t-Ke;)Nt+=Ke}:function(){Nt=Math.max(St,Math.min(Ot,Nt))}}(),Pn=function(){return Re?function(e,t){if(t||(t=ee()),Et&&Nt===Ot){var n=I?100*-((xt-rt)/xt):100*-(xt/rt-1);t=Math.max(Number(t.replace("%","")),n)+"%"}W||!e?(te(t),0===ft&&re()):T(Ue,Ct,wt,Dt,t,ft,re),_e||Me()}:function(){gt=[];var e={};e[B]=e[j]=re,x(Xe[Lt],e),b(Xe[Nt],e),ne(Lt,He,ze,!0),ne(Nt,Be,He),B&&j&&0!==ft||setTimeout(re,0)}}();return{getInfo:ke,events:Pt,goTo:oe,destroy:function(){if(mt.disabled=!0,Ve.insertBefore(Ue,qe),qe.remove(),qe=Fe=null,Ue.id=It||"",Ue.className=Wt||"",f(Ue,["style"]),pt)for(var e=bt;e--;)Xe[0].remove(),Xe[Xe.length-1].remove();for(var n=Ke;n--;)Xe[n].id=Rt||"",Xe[n].className=Ht||"";f(Xe,["style","aria-hidden","tabindex"]),zt=Ke=null,Zt&&(t.controlsContainer?(f(tn,["aria-label","tabindex"]),f(tn.children,["aria-controls","tabindex"]),h(tn)):tn=Jt=$t=null),an&&(t.navContainer?(f(rn,["aria-label"]),f(nn,["aria-selected","aria-controls","tabindex"]),h(rn)):rn=null,nn=null),fn&&(t.navContainer?h(yn):rn=null,x(M,{visibilitychange:me})),h(Ue),dt&&x(M,{keydown:ye}),x(S,{resize:D})}}}}}();
//# sourceMappingURL=../sourcemaps/tiny-slider.js.map
