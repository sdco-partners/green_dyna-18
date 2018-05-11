"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function initParallax(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(e){parallax({plane:e.plane,speed:e.speed})})}var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),triggerScrollOnLoad=function(){var e=window.scrollY+2;window.scroll({top:e,behavior:"smooth"})},addEvents={toClass:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.trigger,n=e.target,a=void 0===n?null:n,i=e.type,s=void 0===i?"click":i,l=e.callback,o=document.getElementsByClassName(t);o&&o.length>0&&Array.prototype.forEach.call(o,function(e){e.addEventListener(s,function(e){e.preventDefault();var t=document.getElementById(a);l(o,t)})})},toID:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.trigger,n=e.target,a=void 0===n?null:n,i=e.type,s=void 0===i?"click":i,l=e.callback,o=document.getElementById(t);o&&o.addEventListener(s,function(e){e.preventDefault();var t=document.getElementById(a);l(o,t)})}},delay=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250;setTimeout(function(){e()},t)},SVGAnimate=function(e){e&&e.forEach(function(e){document.getElementById(e).beginElement()})},hamburger={open:function(){SVGAnimate(["hambar-open-1t","hambar-open-2t","hambar-open-3t","hambar-open-4t","hambar-open-1b","hambar-open-2b","hambar-open-3b","hambar-open-4b"])},close:function(){SVGAnimate(["hambar-close-1t","hambar-close-2t","hambar-close-3t","hambar-close-4t","hambar-close-1b","hambar-close-2b","hambar-close-3b","hambar-close-4b"])}},SlideShow=function(){function e(t){var n=t.target,a=t.timer,i=void 0===a?6e3:a,s=t.pause,l=void 0!==s&&s,o=t.currentIndx,c=void 0===o?0:o;_classCallCheck(this,e),Object.assign(this,{timer:i,pause:l,currentIndx:c}),this.$galleryWrapper=n,this.assembleDOMElements(),this.setEventListeners(),this.disableBttns()}return _createClass(e,[{key:"start",value:function(){this.countDown()}},{key:"assembleDOMElements",value:function(){var e=this,t=this.$galleryWrapper.childNodes;Array.prototype.forEach.call(t,function(t){var n=t.classList;"DIV"===t.tagName&&(n.contains("gallery")?(e.$gallery=t,e.max=e.$gallery.scrollWidth,e.slides=e.assembleSlides(),e.length=e.slides.length,e.indx=0,e.addClasses({className:"next"})):n.contains("prev")?e.$bttnPrev=t:n.contains("next")&&(e.$bttnNext=t))})}},{key:"assembleSlides",value:function(){return Array.prototype.filter.call(this.$gallery.childNodes,function(e){return"DIV"===e.tagName})}},{key:"addClasses",value:function(e){var t=e.className,n=e.$target,a=void 0===n?this.slides:n,i=e.exclude,s=void 0===i?0:i;Array.prototype.forEach.call(a,function(e,n){n!==s&&e.classList.add(t)})}},{key:"resetClasses",value:function(){var e=this;Array.prototype.forEach.call(this.slides,function(t,n,a){n===a.length-1?t.classList.add("next"):e.resetSlide(t)})}},{key:"reorderSlides",value:function(){var e=this;Array.prototype.forEach.call(this.slides,function(t,n){n===e.indx?(t.classList.remove("prev"),t.classList.remove("next")):n<e.indx?(t.classList.add("prev"),t.classList.remove("next")):n>e.indx&&(t.classList.add("next"),t.classList.remove("prev"))})}},{key:"resetSlide",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.slides[this.indx];e.classList.remove("next"),e.classList.remove("prev")}},{key:"setEventListeners",value:function(){var e=this;this.$bttnPrev.addEventListener("click",function(t){t.preventDefault(),0!==e.indx&&(e.changeSlide("left"),e.setPause())}),this.$bttnNext.addEventListener("click",function(t){t.preventDefault(),e.indx!==e.length-1&&(e.changeSlide("right"),e.setPause())})}},{key:"moveForward",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.indx;this.slides[e].classList.add("prev"),this.increment(),this.resetSlide(),this.disableBttns()}},{key:"moveBackward",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.indx;this.slides[e].classList.add("next"),this.decrement(),this.resetSlide(),this.disableBttns()}},{key:"increment",value:function(){this.indx+=1}},{key:"decrement",value:function(){this.indx-=1}},{key:"disableBttns",value:function(){0===this.indx?this.$bttnPrev.classList.add("disable"):this.$bttnPrev.classList.remove("disable"),this.indx===this.length-1?this.$bttnNext.classList.add("disable"):this.$bttnNext.classList.remove("disable")}},{key:"changeSlide",value:function(e){switch(e){case"left":this.moveBackward();break;case"right":this.moveForward();break;default:this.changeSlide()}}},{key:"setPause",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6e3;this.pause||(this.pause=!0,setTimeout(function(){e.pause=!1},t))}},{key:"resetTime",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6e3;this.timer=e}},{key:"spendTime",value:function(){this.timer-=1e3}},{key:"countDown",value:function(){var e=this;0===this.timer?(this.indx<this.length-1?this.changeSlide("right"):(this.resetClasses(),this.indx=0,this.disableBttns(),delay(function(){e.addClasses({className:"next"})},1e3)),this.resetTime()):this.pause||this.spendTime(),setTimeout(this.countDown.bind(this),1e3)}}]),e}(),Gallery={galleryObj:{},build:function(){var e=this,t=document.getElementsByClassName("gallery-wrapper"),n=document.getElementsByTagName("BODY")[0];Array.prototype.forEach.call(t,function(t,n){e.galleryObj["gal-"+n]=new SlideShow({target:t})}),n.classList.contains("home")&&this.galleryObj["gal-0"].start()},setIndx:function(e,t){this.galleryObj[e].indx=t-1,this.galleryObj[e].moveForward(t),this.galleryObj[e].reorderSlides()}},toggleEl={add:function(e){e.classList.add("pre"),delay(function(){return e.classList.add("opacity")})},remove:function(e){e.classList.remove("opacity"),delay(function(){return e.classList.remove("pre")})},status:function(e){return e.classList.contains("pre")&&e.classList.contains("opacity")}},toggleTabs=function(){var e=document.getElementsByClassName("tabs"),t=document.getElementById("comp-schedule"),n=document.getElementById("comp-available");Array.prototype.forEach.call(e,function(a){a.addEventListener("click",function(i){i.preventDefault(),Array.prototype.forEach.call(e,function(e){e.classList.remove("tabbed")}),a.classList.contains("schedule-link")?toggleEl.status(t)?toggleEl.remove(t):(toggleEl.remove(n),toggleEl.add(t),a.classList.add("tabbed")):a.classList.contains("available-link")&&(toggleEl.status(n)?toggleEl.remove(n):(toggleEl.remove(t),toggleEl.add(n),a.classList.add("tabbed")))})})},extractIndx=function(e){return parseInt(e.id.split("-")[1],10)},slidesFadeout=function(e){Array.prototype.forEach.call(e,function(e){"DIV"===e.tagName&&(e.classList.add("fadeout"),delay(function(){return e.classList.remove("fadeout")},1e3))})},gallerySlidesLogic=function(e,t){Array.prototype.forEach.call(e,function(n){"DIV"===n.tagName&&n.addEventListener("click",function(a){a.preventDefault(),Gallery.setIndx("gal-0",extractIndx(n)),t.classList.contains("on")||(t.classList.add("fadout"),delay(function(){t.classList.remove("fadout"),t.classList.add("on")},250),slidesFadeout(e))})})},closeBttnLogic=function(e,t,n,a){e.addEventListener("click",function(e){e.preventDefault(),a.classList.contains("on")&&(slidesFadeout(t),delay(function(){return a.classList.remove("on")},250))})},initLightbox=function(){var e=document.getElementsByClassName("lightbox"),t=null,n=null;Array.prototype.forEach.call(e,function(e){var a=e.childNodes;Array.prototype.forEach.call(a,function(a){if("DIV"===a.tagName){var i=a.classList;i.contains("gallery")?(t=a,n=a.childNodes,gallerySlidesLogic(n,e)):i.contains("close")&&closeBttnLogic(a,n,t,e)}})})},addFade=function(e){e.classList.add("fade")},removeFade=function(e){e.classList.remove("fade")},findChildClass=function(e,t,n){return e&&e.childNodes&&Array.prototype.forEach.call(e.childNodes,function(e,a){"DIV"===e.tagName&&e.classList.contains(t)&&n(e,a)}),null},documentFade=function(){var e=document.getElementsByTagName("BODY")[0];addFade(e)},headerFade=function(){var e=document.getElementById("head");Array.prototype.forEach.call(e.childNodes,function(e){"DIV"===e.tagName&&(e.classList.contains("left")?addFade(e):e.classList.contains("right")&&(findChildClass(e,"tele",function(e){addFade(e)}),findChildClass(e,"social",function(e){findChildClass(e,"item",function(e,t){delay(addFade.bind(null,e),150*t)})})))})},blockFade=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=document.getElementsByClassName("blocks")[0],n=0;findChildClass(t,"block",function(t){var a=t.getBoundingClientRect().top;0===n?addFade(t):a-e<0&&addFade(t),n+=1})},signupFade=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=document.getElementsByClassName("signup")[0];t.getBoundingClientRect().top-e<0&&addFade(t)},footerFade=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=document.getElementById("foot");findChildClass(t,"main",function(t){Array.prototype.filter.call(t.childNodes,function(e){return"DIV"===e.tagName}).forEach(function(t){Array.prototype.forEach.call(t.childNodes,function(t,n){"DIV"===t.tagName&&t.getBoundingClientRect().top-e<0&&delay(addFade.bind(null,t),250*(1+n))})})})},menuFade=function(e){var t=document.getElementById("menu");findChildClass(t,"menu-wrapper",function(t){findChildClass(t,"items",function(t){findChildClass(t,"link-wrapper",function(t,n){e(t,n)})})})},navEvent=function(){var e=document.getElementsByTagName("BODY")[0];addEvents.toID({trigger:"ham",target:"head",callback:function(t,n){n.classList.contains("toggle")?(hamburger.close(),n.classList.remove("toggle"),e.classList.remove("lock"),delay(function(){return n.classList.remove("pre")}),menuFade(function(e){removeFade(e)})):(n.classList.add("pre"),e.classList.add("lock"),n.classList.add("toggle"),hamburger.open(),menuFade(function(e,t){var n=100*(1+t);delay(addFade.bind(null,e),n)}))}})},stringReplace=function(e,t,n){var a=e;return e.indexOf(t)>=0&&(a=a.substring(0,e.indexOf(t)),a+=""+t+n),a},parallax=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.plane,n=e.speed,a=document.getElementsByClassName(t);Array.prototype.forEach.call(a,function(e){var t=e.getBoundingClientRect(),a=Math.floor((t.top-300)/n),i=null!==e.getAttribute("style")?e.getAttribute("style")+" ":"",s=i&&i.indexOf("transform")>=0?stringReplace(i,"translateY","("+a+"px)"):i+"transform: translateX(0) translateY("+a+"px)";e.setAttribute("style",s)})},unpinAllOptions=function(e){findChildClass(e,"option",function(e){"DIV"===e.tagName&&e.classList.remove("pin")})},pinOption=function(e,t){unpinAllOptions(t),"DIV"===e.tagName&&e.classList.add("pin")},findPins=function(e){var t={};return findChildClass(e,"option",function(e){if("DIV"===e.tagName&&e.classList.contains("pin")){var n=Array.prototype.filter.call(e.childNodes,function(e){return"SPAN"===e.tagName});t.bedrooms=n[0].innerText}}),t},selectBedOptions=function(e,t){findChildClass(e,"bedrooms",function(e){findChildClass(e,"option",function(n){t(n,e)})})},selectColOptions=function(e,t,n,a){findChildClass(e,t,function(e){findChildClass(e,n,function(e){Array.prototype.forEach.call(e.childNodes,function(e){"SPAN"===e.tagName&&a(e)})})})},selectDropdownOptions=function(e,t){findChildClass(e,"advanced",function(e){findChildClass(e,"expandable",function(e){selectColOptions(e,"left","rent-range",function(e){t(e)}),selectColOptions(e,"right","square-footage-range",function(e){t(e)})})})},fetchSelectData=function(e){var t={};return Array.prototype.forEach.call(e.childNodes,function(n){"SELECT"===n.tagName&&(t[e.className]=n[n.selectedIndex].text)}),t},resetSelectData=function(e){Array.prototype.forEach.call(e.childNodes,function(e){if("SELECT"===e.tagName){e.selectedIndex=0}})},processSearch=function(e){var t=[];return selectDropdownOptions(e,function(e){t.push(fetchSelectData(e))}),findChildClass(e,"bedrooms",function(e){t.push(findPins(e))}),t},expandOptions=function(){addEvents.toID({trigger:"advancedoptions",target:"expandable",callback:function(e,t){t.classList.toggle("expand")}})},resetOptions=function(e){addEvents.toClass({trigger:"reset",callback:function(){findChildClass(e,"bedrooms",function(e){unpinAllOptions(e)}),selectDropdownOptions(e,function(e){resetSelectData(e)})}})},initSearchComp=function(){document.getElementById("opt-view-all").classList.add("pin");var e=document.getElementById("search");selectBedOptions(e,function(e,t){e.addEventListener("click",function(n){n.preventDefault(),pinOption(e,t)})}),resetOptions(e),expandOptions(),document.getElementById("submit").addEventListener("click",function(t){t.preventDefault(),console.log(processSearch(e))})};document.onreadystatechange=function(){"complete"===document.readyState&&(triggerScrollOnLoad(),documentFade(),headerFade(),Gallery.build(),initLightbox(),navEvent(),toggleTabs(),initSearchComp(),window.onscroll=function(){var e=window.innerHeight?window.innerHeight:document.documentElement.clientHeight,t=e/2;blockFade(t),signupFade(t),footerFade(e),initParallax({plane:"overlay",speed:50})})};