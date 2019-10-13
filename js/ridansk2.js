!function(e,t){var i,n;i=e.jQuery,n=function(e,t){var i,n=document.createElement("canvas");e.appendChild(n);var a=n.getContext("2d");n.width=n.height=t.size,a.translate(t.size/2,t.size/2),a.rotate((t.rotate/180-.5)*Math.PI);var r=(t.size-t.lineWidth)/2;Date.now=Date.now||function(){return+new Date};var o=function(e,t,i){var n=(i=Math.min(Math.max(-1,i||0),1))<=0;a.beginPath(),a.arc(0,0,r,0,2*Math.PI*i,n),a.strokeStyle=e,a.lineWidth=t,a.stroke()},s=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},d=function(){t.trackColor&&o(t.trackColor,t.lineWidth,1)};this.clear=function(){a.clearRect(t.size/-2,t.size/-2,t.size,t.size)},this.draw=function(e){t.trackColor?a.getImageData&&a.putImageData?i?a.putImageData(i,0,0):(d(),i=a.getImageData(0,0,t.size,t.size)):(this.clear(),d()):this.clear(),a.lineCap=t.lineCap,o(t.barColor,t.lineWidth,e/100)}.bind(this),this.animate=function(e,i){var n=Date.now(),a=function(){var r=Math.min(Date.now()-n,t.animate.duration),o=t.easing(this,r,e,i-e,t.animate.duration);this.draw(o),t.onStep(e,i,o),s(a)}.bind(this);s(a)}.bind(this)},i.fn.pieChart=function(e){return this.each(function(){if(!i.data(this,"pieChart")){var t=i.extend({},e,i(this).data());i.data(this,"pieChart",new function(e,t){var i={barColor:"#ef1e25",trackColor:"#f9f9f9",lineCap:"round",lineWidth:3,size:150,rotate:0,animate:{duration:1e3,enabled:!0},easing:function(e,t,i,n,a){return(t/=a/2)<1?n/2*t*t+i:-n/2*(--t*(t-2)-1)+i},onStep:function(e,t,i){},renderer:n},a={},r=0;(function(){this.element=e,this.options=a;for(var n in i)i.hasOwnProperty(n)&&(a[n]=t&&void 0!==t[n]?t[n]:i[n],"function"==typeof a[n]&&(a[n]=a[n].bind(this)));if("string"==typeof a.easing&&"undefined"!=typeof jQuery&&jQuery.isFunction(jQuery.easing[a.easing])?a.easing=jQuery.easing[a.easing]:a.easing=i.easing,this.renderer=new a.renderer(e,a),this.renderer.draw(r),e.getAttribute&&e.getAttribute("data-percent")){var o=parseFloat(e.getAttribute("data-percent"));a.animate.enabled?this.renderer.animate(r,o):this.renderer.draw(o),r=o}}).bind(this)()}(this,t))}})}}(this);