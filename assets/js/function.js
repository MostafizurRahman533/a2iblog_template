// navbar scroll animation
window.onscroll = pagescroll;
  pagescrollvalid = window.pageYOffset;
  function pagescroll() {
    var pageup = window.pageYOffset;
    var header = document.getElementById('header');
    if(pagescrollvalid && pageup == 0){
      // header.classList.remove("fixed");
      header.classList.remove("top-bar");
      header.classList.remove("z-depth-1");
    }
    // else if(pagescrollvalid > pageup){
    //   header.classList.add("fixed");
    // }
    else if(pagescrollvalid < pageup){
      header.classList.add("top-bar");
      header.classList.add("z-depth-1");
      // header.classList.remove("fixed");
    }
    else{
      // header.classList.remove("fixed");
    } 
    pagescrollvalid = pageup;
  }

 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      direction: 'left'
    });
  });
  
  // juery js 
  (function($){
    'use strict';

            $('.dropdown-trigger').dropdown();
            //$('.search').dropdown();
            // overlay remove
            $('.search').on('click', function(){
              $('.search-field').addClass('open');
            });
            $('.close').on('click', function(){
              $('.search-field').removeClass('open');
            });

             $(document).ready(function(){
              $('.sidenav').sidenav();
            });
            
    })(jQuery);