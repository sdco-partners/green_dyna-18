"use strict";function initParallax(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(e){parallax({plane:e.plane,speed:e.speed})})}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var triggerScrollOnLoad=function(){var e=window.scrollY+2;window.scroll({top:e,behavior:"smooth"})},addEvents={toClass:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.trigger,n=e.target,a=void 0===n?null:n,s=e.type,i=void 0===s?"click":s,o=e.callback,r=document.getElementsByClassName(t);r&&r.length>0&&Array.prototype.forEach.call(r,function(e){e.addEventListener(i,function(e){e.preventDefault();var t=document.getElementById(a);o(r,t)})})},toID:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.trigger,n=e.target,a=void 0===n?null:n,s=e.type,i=void 0===s?"click":s,o=e.callback,r=document.getElementById(t);r&&r.addEventListener(i,function(e){e.preventDefault();var t=document.getElementById(a);o(r,t)})}},delay=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250;setTimeout(function(){e()},t)},findChildClass=function(e,t,n){return e&&e.childNodes&&Array.prototype.forEach.call(e.childNodes,function(e,a){"DIV"===e.tagName&&e.classList.contains(t)&&n(e,a)}),null},stringReplace=function(e,t,n){var a=e;return e.indexOf(t)>=0&&(a=a.substring(0,e.indexOf(t)),a+=""+t+n),a},addFade=function(e){e.classList.add("fade")},removeFade=function(e){e.classList.remove("fade")},documentFade=function(){var e=document.getElementsByTagName("BODY")[0];addFade(e)},headerFade=function(){var e=document.getElementById("head");Array.prototype.forEach.call(e.childNodes,function(e){"DIV"===e.tagName&&(e.classList.contains("left")?addFade(e):e.classList.contains("right")&&(findChildClass(e,"tele",function(e){addFade(e)}),findChildClass(e,"social",function(e){findChildClass(e,"item",function(e,t){delay(addFade.bind(null,e),150*t)})})))})},blockFade=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=document.getElementsByClassName("blocks")[0],n=0;findChildClass(t,"block",function(t){var a=t.getBoundingClientRect().top;0===n?addFade(t):a-e<0&&addFade(t),n+=1})},signupFade=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=document.getElementsByClassName("signup")[0];t.getBoundingClientRect().top-e<0&&addFade(t)},footerFade=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=document.getElementById("foot");findChildClass(t,"main",function(t){Array.prototype.filter.call(t.childNodes,function(e){return"DIV"===e.tagName}).forEach(function(t){Array.prototype.forEach.call(t.childNodes,function(t,n){"DIV"===t.tagName&&t.getBoundingClientRect().top-e<0&&delay(addFade.bind(null,t),250*(1+n))})})})},menuFade=function(e){var t=document.getElementById("menu");findChildClass(t,"menu-wrapper",function(t){findChildClass(t,"items",function(t){findChildClass(t,"link-wrapper",function(t,n){e(t,n)})})})},navEvent=function(){var e=document.getElementsByTagName("BODY")[0];addEvents.toID({trigger:"ham",target:"head",callback:function(t,n){n.classList.contains("toggle")?(hamburger.close(),n.classList.remove("toggle"),e.classList.remove("lock"),delay(function(){return n.classList.remove("pre")}),menuFade(function(e){removeFade(e)})):(n.classList.add("pre"),e.classList.add("lock"),n.classList.add("toggle"),hamburger.open(),menuFade(function(e,t){var n=100*(1+t);delay(addFade.bind(null,e),n)}))}})},SVGAnimate=function(e){e&&e.forEach(function(e){document.getElementById(e).beginElement()})},hamburger={open:function(){SVGAnimate(["hambar-open-1t","hambar-open-2t","hambar-open-3t","hambar-open-4t","hambar-open-1b","hambar-open-2b","hambar-open-3b","hambar-open-4b"])},close:function(){SVGAnimate(["hambar-close-1t","hambar-close-2t","hambar-close-3t","hambar-close-4t","hambar-close-1b","hambar-close-2b","hambar-close-3b","hambar-close-4b"])}},parallax=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.plane,n=e.speed,a=document.getElementsByClassName(t);Array.prototype.forEach.call(a,function(e){var t=e.getBoundingClientRect(),a=Math.floor((t.top-300)/n),s=null!==e.getAttribute("style")?e.getAttribute("style")+" ":"",i=s&&s.indexOf("transform")>=0?stringReplace(s,"translateY","("+a+"px)"):s+"transform: translateX(0) translateY("+a+"px)";e.setAttribute("style",i)})},_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),DataRanges=function(){function e(){_classCallCheck(this,e),this.count=0}return _createClass(e,[{key:"add",value:function(e,t){arguments.length>2&&void 0!==arguments[2]&&arguments[2];(function(){var t=!1;return"ID"!==e&&"UnitID"!==e&&"UnitNumber"!==e&&"DummyUnitNumber"!==e&&(t=!0),t})()&&(this.addNewKey(e,t),this.checkMin(e,t),this.checkMax(e,t))}},{key:"addNewFloorName",value:function(e){this.name=e}},{key:"addNewKey",value:function(e,t){this[e]||(this[e]={},this[e].min=t,this[e].max=t)}},{key:"checkMin",value:function(e,t){this[e]&&this[e].min>t&&(this[e].min=t)}},{key:"checkMax",value:function(e,t){this[e]&&this[e].max<t&&(this[e].max=t)}},{key:"increment",value:function(){this.count+=1}},{key:"reset",value:function(){var e=this;Object.keys(this).forEach(function(t){e[t].min&&delete e[t]})}}]),e}(),processFilters=function(e,t){var n=!0;return e.forEach(function(e){Object.keys(e).forEach(function(a){"Bedrooms"===a&&("VIEW ALL"===e[a]||t[a]!==e[a]&&(n=!1)),t.BaseRentAmount&&("maxPrice"===a&&e[a]&&t.BaseRentAmount>e[a]&&(n=!1),"minPrice"===a&&e[a]&&t.BaseRentAmount<e[a]&&(n=!1)),t.SquareFootage&&("maxSQFT"===a&&e[a]&&(console.log("pass max"),t.SquareFootage>e[a]&&(n=!1)),"minSQFT"===a&&e[a]&&t.SquareFootage<e[a]&&(n=!1))})}),n},filterData=function(e,t){var n=!0;return e?(Array.isArray(t)?t.forEach(function(t){n=processFilters(e,t)}):Object.keys(t).forEach(function(a){Object.keys(t[a]).forEach(function(s){n=processFilters(e,t[a])})}),n):n},buildDataRanges=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.AvailableUnits,a=new DataRanges;return Object.keys(n).forEach(function(s){a.name||a.addNewFloorName(n[s].Name),filterData(t,e.AvailableUnits)&&Object.keys(n[s]).forEach(function(e){a.increment(),"number"==typeof n[s][e]&&a.add(e,n[s][e])})}),a},dataAssembly={bed:function(e){if(e.Bedrooms){var t=e.Bedrooms.min>0?e.Bedrooms.min+" bed":"Studio";return e.Bedrooms.min===e.Bedrooms.max?t:e.Bedrooms.min+" - "+e.Bedrooms.max+" bed"}return""},bath:function(e){return e.Bathrooms?e.Bathrooms.min===e.Bathrooms.max?e.Bathrooms.min+" bath":e.Bathrooms.min+" - "+e.Bathrooms.max+" bath":""},sqft:function(e){return e.SquareFootage?e.SquareFootage.min===e.SquareFootage.max?e.SquareFootage.min+" sqft":e.SquareFootage.min+" - "+e.SquareFootage.max+" sqft":""},price:function(e){return e.BaseRentAmount?e.BaseRentAmount.min===e.BaseRentAmount.max?"$ "+e.BaseRentAmount.min:"From $ "+e.BaseRentAmount.min+" - $ "+e.BaseRentAmount.max:"Currently Not Available"}},createNewItem=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.data,n=e.$grid,a=e.classes,s=void 0!==a&&a,i=e.link,o=void 0!==i&&i,r=document.createElement("div");if(r.classList.add("item"),s&&r.classList.add(s),o){var l=document.createElement("a");l.textContent=t,l.href=o,l.target="_blank",r.append(l)}else r.textContent=t;n.append(r)},buildGridTable=function(e,t){createNewItem({data:e.UnitNumber,$grid:t,classes:"first"}),createNewItem({data:e.FloorNumber,$grid:t}),createNewItem({data:"$"+e.BaseRentAmount,$grid:t}),createNewItem({data:"$"+e.DepositAmount,$grid:t}),createNewItem({data:e.AvailableDate,$grid:t}),createNewItem({data:"Lease Now",$grid:t,classes:"last",link:"https://1849373v2.onlineleasing.realpage.com/"})},toggleAvailability=function(e,t){t.BaseRentAmount?e.classList.add("available"):e.classList.remove("available")},assembleFields=function(e,t){var n=e;e.classList.contains("bed")?n.textContent=dataAssembly.bed(t):e.classList.contains("bath")?n.textContent=dataAssembly.bath(t):e.classList.contains("sqft")?n.textContent=dataAssembly.sqft(t):e.classList.contains("price")&&(n.textContent=dataAssembly.price(t))},populateFloorPlanGrid=function(e,t){findChildClass(t,"data",function(n){findChildClass(n,"attributes",function(n){findChildClass(n,"rest",function(n){Array.prototype.forEach.call(n.childNodes,function(n){"SPAN"===n.tagName&&(assembleFields(n,e),toggleAvailability(t,e))})})})})},populatePrimaryComp=function(e){var t=document.getElementsByClassName("attributes")[0];findChildClass(t,"rest",function(t){Array.prototype.forEach.call(t.childNodes,function(t){"SPAN"===t.tagName&&assembleFields(t,e)})})},populateUnitsComp=function(e){var t=document.getElementById("comp-available");findChildClass(t,"wrapper",function(t){findChildClass(t,"grid",function(t){Array.isArray(e)?e.forEach(function(e){buildGridTable(e,t)}):Object.keys(e).forEach(function(n){buildGridTable(e[n],t)})})})},searchOptions={create:function(e){e.BaseRentAmount&&(this.checkMax(e.BaseRentAmount,"maxPrice"),this.checkMin(e.BaseRentAmount,"minPrice")),e.SquareFootage&&(this.checkMax(e.SquareFootage,"maxSQFT"),this.checkMin(e.SquareFootage,"minSQFT"))},checkMax:function(e,t){this[t]?this[t]<e.max&&(this[t]=e.max):this[t]=e.max},checkMin:function(e,t){this[t]?this[t]>e.min&&(this[t]=e.min):this[t]=e.min}},setRange=function(e,t){for(var n=[],a=100*Math.floor(searchOptions["min"+t]/100),s=100*Math.ceil(searchOptions["max"+t]/100);a<=s;)n.push(a),a+=100;n.forEach(function(t){var n=document.createElement("option");n.textContent=t,e.append(n)})},findRange=function(e,t,n,a){findChildClass(e,t,function(e){Array.prototype.forEach.call(e.childNodes,function(e){"SPAN"===e.tagName&&(e.classList.contains("min-range")?Array.prototype.forEach.call(e.childNodes,function(e){"SELECT"===e.tagName&&a(e,n)}):e.classList.contains("max-range")&&Array.prototype.forEach.call(e.childNodes,function(e){"SELECT"===e.tagName&&a(e,n)}))})})},configSearchOptions=function e(){if(searchOptions.maxPrice&&searchOptions.minPrice){var t=document.getElementById("expandable");Array.prototype.forEach.call(t.childNodes,function(e){"DIV"===e.tagName&&(e.classList.contains("left")?findRange(e,"rent-range","Price",function(e,t){setRange(e,t)}):e.classList.contains("right")&&findRange(e,"square-footage-range","SQFT",function(e,t){setRange(e,t)}))})}else delay(function(){return e()},1e3)},singleFloorplanPopulator=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=buildDataRanges(e,t);if(n.name){var a=document.getElementById(n.name),s=document.getElementsByClassName("primary"),i=document.getElementById("comp-available");s.length&&populatePrimaryComp(n),a&&populateFloorPlanGrid(n,a),i&&populateUnitsComp(e.AvailableUnits),searchOptions.create(n)}},assembleRESTPath=function(e){var t=""+window.location.host;window.location.host.indexOf("localhost")>=0&&(t+="/green_dyna-18");return t+="/rest/?",t+="apiKey=SMASH&user=HULK&token=true",t+=e?"&request=unitsby&type=name&filter="+e:"&request=units"},responseHandling=function(e,t){e.status>=200&&e.status<300?t():e.status>=400&&e.status},ajaxRequester=function(e,t){var n=assembleRESTPath(e),a=new XMLHttpRequest;return a.onreadystatechange=function(){a.readyState===XMLHttpRequest.DONE&&responseHandling(a,function(){t(a.response)})},a.open("GET",n,!0),a.setRequestHeader("Content-Type","application/json"),a.send(),!0},getPrimaryID=function(){return document.getElementsByClassName("primary")[0].getAttribute("id")},getFloorPlanIDs=function(e){var t=document.getElementsByClassName("floorplan");Array.prototype.forEach.call(t,function(t){e(t.getAttribute("id"))})},fetchData=function(){var e=document.getElementsByTagName("BODY")[0];e.classList.contains("single-floorplan")?ajaxRequester(getPrimaryID(),function(e){return singleFloorplanPopulator(JSON.parse(e))}):e.classList.contains("post-type-archive-floorplan")&&(configSearchOptions(),getFloorPlanIDs(function(e){ajaxRequester(e,function(e){var t=JSON.parse(e);singleFloorplanPopulator(t)})}))},unpinAllOptions=function(e){findChildClass(e,"option",function(e){"DIV"===e.tagName&&e.classList.remove("pin")})},pinOption=function(e,t){unpinAllOptions(t),"DIV"===e.tagName&&e.classList.add("pin")},selectBedOptions=function(e,t){findChildClass(e,"bedrooms",function(e){findChildClass(e,"option",function(n){t(n,e)})})},scrubBedOptions=function(e,t){findChildClass(e,"pin",function(e){t(e)})},scrubColOptions=function(e,t){findChildClass(e,"expandable",function(e){findChildClass(e,"col",function(e){findChildClass(e,"option",function(e){var n=e.classList[1];Array.prototype.forEach.call(e.childNodes,function(e){if("SPAN"===e.tagName&&(e.classList.contains("min-range")||e.classList.contains("max-range"))){var a=e.classList.contains("min-range")?n+"-min":n+"-max";Array.prototype.forEach.call(e.childNodes,function(e){"SELECT"===e.tagName&&t(e.options[e.selectedIndex],a)})}})})})})},processBedFilters=function(e){var t={};switch(e.getAttribute("id")){case"opt-studio":t.Bedrooms=0;break;case"opt-one-bedroom":t.Bedrooms=1;break;case"opt-two-bedroom":t.Bedrooms=2;break;case"opt-three-bedroom":t.Bedrooms=3;break;default:t.Bedrooms="VIEW ALL"}return t},processRangeFilters=function(e,t){var n={};switch(t){case"rent-range-max":n.maxPrice=parseInt(e,10);break;case"rent-range-min":n.minPrice=parseInt(e,10);break;case"square-footage-range-max":n.maxSQFT=parseInt(e,10);break;case"square-footage-range-min":n.minSQFT=parseInt(e,10);break;default:n.unknown="Unknown Filter Type!"}return n},processSearch=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=[];t?Array.prototype.forEach.call(e.childNodes,function(e){"DIV"===e.tagName&&(e.classList.contains("bedrooms")?scrubBedOptions(e,function(e){return n.push(processBedFilters(e))}):e.classList.contains("advanced")&&scrubColOptions(e,function(e,t){return n.push(processRangeFilters(e.textContent,t))}))}):n.push(processBedFilters(e)),console.log("params",n),getFloorPlanIDs(function(e){ajaxRequester(e,function(e){var t=JSON.parse(e);singleFloorplanPopulator(t,n)})})},triggerBedroomEvents=function(e){selectBedOptions(e,function(e,t){e.addEventListener("click",function(n){n.preventDefault();var a=document.getElementById("expandable");pinOption(e,t),a.classList.contains("expand")||processSearch(e)})})},selectColOptions=function(e,t,n,a){findChildClass(e,t,function(e){findChildClass(e,n,function(e){Array.prototype.forEach.call(e.childNodes,function(e){"SPAN"===e.tagName&&a(e)})})})},selectDropdownOptions=function(e,t){findChildClass(e,"advanced",function(e){findChildClass(e,"expandable",function(e){selectColOptions(e,"left","rent-range",function(e){t(e)}),selectColOptions(e,"right","square-footage-range",function(e){t(e)})})})},fetchSelectData=function(e){var t={};return Array.prototype.forEach.call(e.childNodes,function(n){"SELECT"===n.tagName&&(t[e.className]=n[n.selectedIndex].text)}),t},resetSelectData=function(e){Array.prototype.forEach.call(e.childNodes,function(e){if("SELECT"===e.tagName){e.selectedIndex=0}})},expandOptions=function(){addEvents.toID({trigger:"advancedoptions",target:"expandable",callback:function(e,t){t.classList.toggle("expand")}})},resetOptions=function(e){addEvents.toClass({trigger:"reset",callback:function(){findChildClass(e,"bedrooms",function(e){unpinAllOptions(e)}),selectDropdownOptions(e,function(e){resetSelectData(e)})}})},initSearchComp=function(){var e=document.getElementById("search");if(e){document.getElementById("opt-view-all").classList.add("pin"),triggerBedroomEvents(e),resetOptions(e),expandOptions();document.getElementById("submit").addEventListener("click",function(t){t.preventDefault(),processSearch(e,!0)})}},_createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),SlideShow=function(){function e(t){var n=t.target,a=t.timer,s=void 0===a?6e3:a,i=t.pause,o=void 0!==i&&i,r=t.currentIndx,l=void 0===r?0:r;_classCallCheck(this,e),Object.assign(this,{timer:s,pause:o,currentIndx:l}),this.$galleryWrapper=n,this.assembleDOMElements(),this.setEventListeners(),this.disableBttns()}return _createClass(e,[{key:"start",value:function(){this.countDown()}},{key:"assembleDOMElements",value:function(){var e=this,t=this.$galleryWrapper.childNodes;Array.prototype.forEach.call(t,function(t){var n=t.classList;"DIV"===t.tagName&&(n.contains("gallery")?(e.$gallery=t,e.max=e.$gallery.scrollWidth,e.slides=e.assembleSlides(),e.length=e.slides.length,e.indx=0,e.addClasses({className:"next"})):n.contains("prev")?e.$bttnPrev=t:n.contains("next")&&(e.$bttnNext=t))})}},{key:"assembleSlides",value:function(){return Array.prototype.filter.call(this.$gallery.childNodes,function(e){return"DIV"===e.tagName})}},{key:"addClasses",value:function(e){var t=e.className,n=e.$target,a=void 0===n?this.slides:n,s=e.exclude,i=void 0===s?0:s;Array.prototype.forEach.call(a,function(e,n){n!==i&&e.classList.add(t)})}},{key:"resetClasses",value:function(){var e=this;Array.prototype.forEach.call(this.slides,function(t,n,a){n===a.length-1?t.classList.add("next"):e.resetSlide(t)})}},{key:"reorderSlides",value:function(){var e=this;Array.prototype.forEach.call(this.slides,function(t,n){n===e.indx?(t.classList.remove("prev"),t.classList.remove("next")):n<e.indx?(t.classList.add("prev"),t.classList.remove("next")):n>e.indx&&(t.classList.add("next"),t.classList.remove("prev"))})}},{key:"resetSlide",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.slides[this.indx];e.classList.remove("next"),e.classList.remove("prev")}},{key:"setEventListeners",value:function(){var e=this;this.$bttnPrev.addEventListener("click",function(t){t.preventDefault(),0!==e.indx&&(e.changeSlide("left"),e.setPause())}),this.$bttnNext.addEventListener("click",function(t){t.preventDefault(),e.indx!==e.length-1&&(e.changeSlide("right"),e.setPause())})}},{key:"moveForward",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.indx;this.slides[e].classList.add("prev"),this.increment(),this.resetSlide(),this.disableBttns()}},{key:"moveBackward",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.indx;this.slides[e].classList.add("next"),this.decrement(),this.resetSlide(),this.disableBttns()}},{key:"increment",value:function(){this.indx+=1}},{key:"decrement",value:function(){this.indx-=1}},{key:"disableBttns",value:function(){0===this.indx?this.$bttnPrev.classList.add("disable"):this.$bttnPrev.classList.remove("disable"),this.indx===this.length-1?this.$bttnNext.classList.add("disable"):this.$bttnNext.classList.remove("disable")}},{key:"changeSlide",value:function(e){switch(e){case"left":this.moveBackward();break;case"right":this.moveForward();break;default:this.changeSlide()}}},{key:"setPause",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6e3;this.pause||(this.pause=!0,setTimeout(function(){e.pause=!1},t))}},{key:"resetTime",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6e3;this.timer=e}},{key:"spendTime",value:function(){this.timer-=1e3}},{key:"countDown",value:function(){var e=this;0===this.timer?(this.indx<this.length-1?this.changeSlide("right"):(this.resetClasses(),this.indx=0,this.disableBttns(),delay(function(){e.addClasses({className:"next"})},1e3)),this.resetTime()):this.pause||this.spendTime(),setTimeout(this.countDown.bind(this),1e3)}}]),e}(),Gallery={galleryObj:{},build:function(){var e=this,t=document.getElementsByClassName("gallery-wrapper"),n=document.getElementsByTagName("BODY")[0];Array.prototype.forEach.call(t,function(t,n){e.galleryObj["gal-"+n]=new SlideShow({target:t})}),n.classList.contains("home")&&this.galleryObj["gal-0"].start()},setIndx:function(e,t){this.galleryObj[e].indx=t-1,this.galleryObj[e].moveForward(t),this.galleryObj[e].reorderSlides()}},extractIndx=function(e){return parseInt(e.id.split("-")[1],10)},slidesFadeout=function(e){Array.prototype.forEach.call(e,function(e){"DIV"===e.tagName&&(e.classList.add("fadeout"),delay(function(){return e.classList.remove("fadeout")},1e3))})},gallerySlidesLogic=function(e,t){Array.prototype.forEach.call(e,function(n){"DIV"===n.tagName&&n.addEventListener("click",function(a){a.preventDefault(),Gallery.setIndx("gal-0",extractIndx(n)),t.classList.contains("on")||(t.classList.add("fadout"),delay(function(){t.classList.remove("fadout"),t.classList.add("on")},250),slidesFadeout(e))})})},closeBttnLogic=function(e,t,n,a){e.addEventListener("click",function(e){e.preventDefault(),a.classList.contains("on")&&(slidesFadeout(t),delay(function(){return a.classList.remove("on")},250))})},initLightbox=function(){var e=document.getElementsByClassName("lightbox"),t=null,n=null;Array.prototype.forEach.call(e,function(e){var a=e.childNodes;Array.prototype.forEach.call(a,function(a){if("DIV"===a.tagName){var s=a.classList;s.contains("gallery")?(t=a,n=a.childNodes,gallerySlidesLogic(n,e)):s.contains("close")&&closeBttnLogic(a,n,t,e)}})})},toggleEl={add:function(e){e.classList.add("pre"),delay(function(){return e.classList.add("opacity")})},remove:function(e){e.classList.remove("opacity"),delay(function(){return e.classList.remove("pre")})},status:function(e){return e.classList.contains("pre")&&e.classList.contains("opacity")}},toggleTabs=function(){var e=document.getElementsByClassName("tabs"),t=document.getElementById("comp-schedule"),n=document.getElementById("comp-available");Array.prototype.forEach.call(e,function(a){a.addEventListener("click",function(s){s.preventDefault(),Array.prototype.forEach.call(e,function(e){e.classList.remove("tabbed")}),a.classList.contains("schedule-link")?toggleEl.status(t)?toggleEl.remove(t):(toggleEl.remove(n),toggleEl.add(t),a.classList.add("tabbed")):a.classList.contains("available-link")&&(toggleEl.status(n)?toggleEl.remove(n):(toggleEl.remove(t),toggleEl.add(n),a.classList.add("tabbed")))})})};document.onreadystatechange=function(){"complete"===document.readyState&&(triggerScrollOnLoad(),documentFade(),headerFade(),Gallery.build(),initLightbox(),navEvent(),toggleTabs(),initSearchComp(),fetchData(),window.onscroll=function(){var e=window.innerHeight?window.innerHeight:document.documentElement.clientHeight,t=e-e/4;blockFade(t),signupFade(t),footerFade(e),initParallax({plane:"overlay",speed:50})})};