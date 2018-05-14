jQuery(document).ready(function($) {
  
   // global

   $('.js-menu-toggle').on('click', function(event) {
     event.preventDefault();
     var $target = $($(this).attr('href'));
     $target.toggleClass('open');
   });

  $('#toggle-map').on('click', function(event) {
    event.preventDefault();
    
    $(this).toggleClass('has-arrow-down has-arrow-up');

    var $target = $($(this).attr('href'));

    $target.toggleClass('hidden');

  });

  $('.navigate').on('click', function(event) {
    event.preventDefault();
    
    var $target = $($(this).attr('href'));

    scrollTo($target);

  });

  $('#hnypt').remove();


  $('#dragmap').draggable({
    containment: '.map-contanier',
    scroll: false
  });

  // floor plans

  var $floorplanssubnav = $('#floor-plans-subnavigation');
  var $floorplan = $('#floor-plan');

  var templates = {
    'navigation' : $('#template-subnavigation').html(),
    'floorplan' : $('#template-floorplan').html(),
    'sitemap' : $('#template-sitemap').html()
  }

  Mustache.parse(templates.navigation);
  Mustache.parse(templates.floorplan);

  $('body').on('click', '.js-load-floorplans a.planns', function(event) {
    event.preventDefault();
    console.log('on click');

    $(this).siblings('a').removeClass('active');
    $(this).addClass('active');
    
    var data = {
      'action' : 'floor-plans',
      'term_id' : $(this).data('termid')
    }

    // // grab the floor plans! 
    $.get(STANDARD.ajaxurl, data, function(data) { // SOAP SOAP SOAP
      
      // replace the plan links
      $floorplanssubnav.empty().html(floor_plan_links(data));

      // replace the default plan
      $floorplan.empty().html(floor_plan(data.plans[0]));
      
      // soap_call
      var params = paramBuilder("div#floor-plan", "span#floorplan-name");  // <--- Specify wrapper element and title of floorplan
 
      ajaxRequester(params, function(data){
        var parsedData = soapResponseParser(data);

        if(parsedData.raw.range === "single"){
          singleDataPopulator(parsedData);
        } else if (parsedData.raw.range === "range" || parsedData.raw.range === "fetchAll"){
          rangeDataPopulator(parsedData);
        }
      });

    },'json');

  });

  $('body').on('click', '.js-load-floorplan a', function(event) {
    event.preventDefault();


    $(this).siblings('a').removeClass('active');
    $(this).addClass('active');

    var data = {
      'action' : 'floor-plan',
      'post_id' : $(this).data('postid')
    }
    
    $.get(STANDARD.ajaxurl, data, function(data) {
     
      // replace the default plan
      $floorplan.empty().html(floor_plan(data));

      // soap_call
      var params = paramBuilder("div#floor-plan", "span#floorplan-name");  // <--- Specify wrapper element and title of floorplan
 
      ajaxRequester(params, function(data){
        var parsedData = soapResponseParser(data);

        if(parsedData.raw.range === "single"){
          singleDataPopulator(parsedData);
        } else if (parsedData.raw.range === "range" || parsedData.raw.range === "fetchAll"){
          rangeDataPopulator(parsedData);
        }
      });

    },'json');

  }); 

  $('body').on('click', '.js-load-sitemap', function(event) {
    event.preventDefault();
    $(this).siblings('a').removeClass('active');
    $(this).addClass('active');
    $('#floor-plans-subnavigation').empty();

    var data = {
      'img' : $(this).data('img'),
      'pdf' : $(this).data('pdf')
    }

    console.log(data);

    $floorplan.empty().html(site_map(data));
  });

  function floor_plan_links(data){
    return Mustache.render(templates.navigation,data);
  }

  function floor_plan(data){
    return Mustache.render(templates.floorplan,data);
  }

  function site_map(data){
    return Mustache.render(templates.sitemap,data);
  }

  // neighborhood
  var $window = $(window);
  var windowwidth = $window.width();
  var MAPWIDTH = 2284;
  var $map = $('#neighborhood-map .map');
  
  if (windowwidth > 1300) {
    setMapMarginLeft(windowwidth,200);
  }else{
    setMapMarginLeft(windowwidth,700); 
  };

  $(window).on('resize', function(event) {
    event.preventDefault();

    windowwidth = $window.width();    
    
    if (windowwidth > 1300) {
      setMapMarginLeft(windowwidth,200);
    }else{
      setMapMarginLeft(windowwidth,700); 
    };
    
    
  });

  function setMapMarginLeft(windowwidth,offset){
     var width =  MAPWIDTH - windowwidth - offset;
     $map.css({marginLeft: '-'+width+'px'});
  }

  // Life Style

  $('#floor-plans-navigation a').on('click', function(event) {
    event.preventDefault();
  });

  // alt hovers
  $('#alt-hovers a').on('mouseover', function(event) {
    event.preventDefault();
    var $target = $($(this).attr('href')).find('.point-hover');
    $target.show();
  });

  $('#alt-hovers a').on('mouseleave', function(event) {
    event.preventDefault();
    var $target = $($(this).attr('href')).find('.point-hover');
    $target.hide();
  });

  $('#spot-navigation a').on('click', function(event) {
    event.preventDefault();
    
    var $target = $($(this).attr('href'));
    var src = $(this).data('map');

    $('#spot-navigation a').removeClass('active');
    $(this).addClass('active');
    $('.the-spot').addClass('hide');
    $target.removeClass('hide');

    $('#i-am-the-map').attr('src',src);

  });
  

  // slides
   $('#gallery-images').slick({
    slides: '.slide',
    arrows: false
   });

   $('#gallery-left').on('click', function(event) {
       event.preventDefault();
       $('#gallery-images').slickPrev();
   });

   $('#gallery-right').on('click', function(event) {
       event.preventDefault();
       $('#gallery-images').slickNext();
   });
    

   $('#header-slides').slick({
      slides: '.slide',
      arrows: false,
      autoplay: true,
      autoplaySpeed: 5000
   });

   $('#opening-left').on('click', function(event) {
       event.preventDefault();
       $('#header-slides').slickPrev();
   });

   $('#opening-right').on('click', function(event) {
       event.preventDefault();
       $('#header-slides').slickNext();
   });

   // helpers

   function scrollTo($element){
      $('html, body').animate({scrollTop: $element.offset().top}, 500);
   }


  /* ############### NEW CODE HERE ASIF ############### */
  // popdown stuff
  setTimeout(function(){
    jQuery('#popdown').addClass('active');
  }, 1200);
  jQuery(document.body).on('click', '.popdown-close', function() {
    jQuery('#popdown').removeClass('active');
  });


});
