function fullHeight(theElement, headerOffset, footerOffset, mobile, prop){
  if((Foundation.MediaQuery.atLeast('large') && !mobile) || mobile){
    var pgHeight = $(window).height();
    var offset = 0;
    if(headerOffset){
      if(Foundation.MediaQuery.atLeast('large'))
        offset += $('.desktop-menu').height();
      else
        offset += $('.mobile-menu .menu-bar').height();
    }
    if(footerOffset)
      offset += $('footer').height();
    $(theElement).css(prop, pgHeight - offset);
  }
  $(window).resize(function(){
   if((Foundation.MediaQuery.atLeast('large') && !mobile) || mobile){
      var pgHeight = $(window).height();
      var offset = 0;
      if(headerOffset){
        if(Foundation.MediaQuery.atLeast('large'))
          offset += $('.desktop-menu').height();
        else
          offset += $('.mobile-menu .menu-bar').height();
      }
      if(footerOffset)
        offset += $('footer').height();
      $(theElement).css(prop, pgHeight - offset);
    } else {
      $(theElement).css(prop, '');
    }
  });
}

// This function gets the element, and the parent element and roughly centers it in the middle of the screen. You could probbaly change the -5 to be something else, or even improve this?
function centerElement(target, parent, yBreakpoint, headerOffset, prop){
  if($(window).outerWidth() > yBreakpoint){
    var yTarget = $(target).height();
    var yParent = $(parent).height();
    var offset = 0;
    if(headerOffset){
      if(Foundation.MediaQuery.atLeast('large')){
        offset = $('.desktop-menu').height();
      } else {
        offset = $('.mobile-menu').height();
      }
    }
    $(target).css(prop,(((yParent - offset)/2) - (yTarget/2)) + offset + 'px');
  }
  $(window).resize(function(){
    if ($(window).outerWidth() > yBreakpoint){
      var yTarget = $(target).height();
      var yParent = $(parent).height();
      var offset = 0;
      if(headerOffset){
        if(Foundation.MediaQuery.atLeast('large')){
          offset = $('.desktop-menu').height();
        } else {
          offset = $('.mobile-menu').height();
        }
      }
      $(target).css(prop,((yParent - offset)/2) - (yTarget/2) + offset + 'px');
    } else {
      $(target).css(prop,'');
    }
  });
}

function scrollClick(toClick){
  var pageHeight = $(window).height();
  $(toClick).click(function(){
    $("html, body").animate({ scrollTop: pageHeight + 'px' }, 1000);
  });
}

/* -- DOCUMENT READY -- */
$(document).ready(function(){
    scrollClick('.down');
});

/* ---- WINDOW LOAD ---- */
$(window).on('load', function(){
    fullHeight($('.banner'), false, false, true, 'height');
    centerElement($('.main-logo'), $('.banner'), 0, false, 'paddingTop');
    $('.cover').addClass('out');
    setTimeout(function(){
        $('.cover').hide();
    }, 1500);
    setTimeout(function(){
        $('.main-logo').addClass('in');
    }, 1000);
    setTimeout(function(){
        $('.down').addClass('in');
    }, 2000);
});