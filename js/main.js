$(window).scroll(function(){if ($(document).scrollTop() > 50){$("nav").addClass("shrink");}else{$("nav").removeClass("shrink");}});var TxtType=function(el, toRotate, period){this.toRotate=toRotate; this.el=el; this.loopNum=0; this.period=parseInt(period, 10) || 2000; this.txt=''; this.tick(); this.isDeleting=false;}; TxtType.prototype.tick=function(){var i=this.loopNum % this.toRotate.length; var fullTxt=this.toRotate[i]; if (this.isDeleting){this.txt=fullTxt.substring(0, this.txt.length - 1);}else{this.txt=fullTxt.substring(0, this.txt.length + 1);}this.el.innerHTML='<span class="wrap">'+this.txt+'</span>'; var that=this; var delta=200 - Math.random() * 100; if (this.isDeleting){delta /=2;}if (!this.isDeleting && this.txt===fullTxt){delta=this.period; this.isDeleting=true;}else if (this.isDeleting && this.txt===''){this.isDeleting=false; this.loopNum++; delta=500;}setTimeout(function(){that.tick();}, delta);}; window.onload=function(){var elements=document.getElementsByClassName('typewrite'); for (var i=0; i<elements.length; i++){var toRotate=elements[i].getAttribute('data-type'); var period=elements[i].getAttribute('data-period'); if (toRotate){new TxtType(elements[i], JSON.parse(toRotate), period);}}// INJECT CSS var css=document.createElement("style"); css.type="text/css"; css.innerHTML=".typewrite > .wrap{border-right: 0.08em solid #fff}"; document.body.appendChild(css);};$('.waterTankHere1').waterTank({width: 64,height: 250,color: 'skyblue',level: 100}).on('click', function(event){$(this).waterTank(Math.floor(Math.random() * 100) + 0 );});$('.waterTankHere2').waterTank({width: 64,height: 250,color: '#DA4453',level: 95}).on('click', function(event){$(this).waterTank(Math.floor(Math.random() * 100) + 0 );});$('.waterTankHere3').waterTank({width: 64,height: 250,color: '#46CFB0',level: 90}).on('click', function(event){$(this).waterTank(Math.floor(Math.random() * 100) + 0 );});$('.waterTankHere4').waterTank({width: 64,height: 250,color: '#6093E8',level: 70}).on('click', function(event){$(this).waterTank(Math.floor(Math.random() * 100) + 0 );});$('.waterTankHere5').waterTank({width: 64,height: 250,color: '#00FEFF',level: 75}).on('click', function(event){$(this).waterTank(Math.floor(Math.random() * 100) + 0 );});$('.waterTankHere6').waterTank({width: 64,height: 250,color: '#A22CC6',level: 25}).on('click', function(event){$(this).waterTank(Math.floor(Math.random() * 100) + 0 );});AOS.init({duration: 1000});$('#demo-pie-1').pieChart({barColor: '#97D7ED', trackColor: '#eee', lineCap: 'round', lineWidth: 15, onStep: function (from, to, percent){$(this.element).find('.pie-value').text(Math.round(percent) + '%');}}); $('#demo-pie-2').pieChart({barColor: '#E96C75', trackColor: '#eee', lineCap: 'butt', lineWidth: 15, onStep: function (from, to, percent){$(this.element).find('.pie-value').text(Math.round(percent) + '%');}}); $('#demo-pie-3').pieChart({barColor: '#33D9C1', trackColor: '#eee', lineCap: 'square', lineWidth: 15, onStep: function (from, to, percent){$(this.element).find('.pie-value').text(Math.round(percent) + '%');}}); $('#demo-pie-4').pieChart({barColor: '#7DA7E9', trackColor: '#eee', lineCap: 'round', lineWidth: 15, rotate: 90, onStep: function (from, to, percent){$(this.element).find('.pie-value').text(Math.round(percent) + '%');}}); $('#demo-pie-5').pieChart({barColor: '#33FDFF', trackColor: '#eee', lineCap: 'round', lineWidth: 15, rotate: 90, onStep: function (from, to, percent){$(this.element).find('.pie-value').text(Math.round(percent) + '%');}}); $('#demo-pie-6').pieChart({barColor: '#BC51CD', trackColor: '#eee', lineCap: 'round', lineWidth: 15, rotate: 90, onStep: function (from, to, percent){$(this.element).find('.pie-value').text(Math.round(percent) + '%');}});$('.counter').counterUp({delay: 50, time: 1000}); $(".filter-button").click(function(){var value=$(this).attr('data-filter'); if(value=="all"){//$('.filter').removeClass('hidden'); $('.filter').show('10000000');}else{// $('.filter[filter-item="'+value+'"]').removeClass('hidden');// $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden'); $(".filter").not('.'+value).hide('10000000'); $('.filter').filter('.'+value).show('10000000');}}); if ($(".filter-button").removeClass("active")){$(this).removeClass("active");}$(this).addClass("active");$('.service-slider').slick({slidesToShow: 4, slidesToScroll: 1, autoplay: true, arrows: false, autoplaySpeed: 1200,});$('.service-slider2').slick({slidesToShow: 2, slidesToScroll: 1, autoplay: true, arrows: false, autoplaySpeed: 1200,});$('.service-slider3').slick({slidesToShow: 1, slidesToScroll: 1, autoplay: true, arrows: false, autoplaySpeed: 2000,});