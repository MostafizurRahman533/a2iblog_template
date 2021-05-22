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

  // item box1 collapse and expand 
  
  function card_box1_collapse(){
    var iso = document.querySelectorAll(".card-box-accessories");
    var i;
    for (i = 4; i < iso.length; i++) {
      iso[i].classList.add("scrool-hide");
      //console.log(iso.length); 
    } ;
  }
  window.addEventListener('load', card_box1_collapse());
  function card_box1_expand(){
    var iso = document.querySelectorAll(".card-box-accessories");
    var i;
    for (i = 0; i < iso.length; i++) {
      iso[i].classList.remove("scrool-hide");
      //console.log(iso.length); 
    } 
    document.getElementById('see_1').style.display = "none";
  }
  

  // item box2 collapse and expand 
  
  function card_box2_collapse(){
    var iso = document.querySelectorAll(".card-box-accessories2");
    var i;
    for (i = 4; i < iso.length; i++) {
      iso[i].classList.add("scrool-hide");
      //console.log(iso.length); 
    } ;
  }
  window.addEventListener('load', card_box2_collapse());
  function card_box2_expand(){
    var iso = document.querySelectorAll(".card-box-accessories2");
    var i;
    for (i = 0; i < iso.length; i++) {
      iso[i].classList.remove("scrool-hide");
      //console.log(iso.length); 
    } 
    
    document.getElementById('see_2').style.display = "none";
  }
  // document.querySelector(".see-2").addEventListener('click', ()=>{
  //   document.querySelector('.see-2').style.display = "none";
  // })

  // item box3 collapse and expand 
  
  function card_box3_collapse(){
    var iso = document.querySelectorAll(".card-box-accessories3");
    var i;
    for (i = 4; i < iso.length; i++) {
      iso[i].classList.add("scrool-hide");
      //console.log(iso.length); 
    } ;
  }
  window.addEventListener('load', card_box3_collapse());
  function card_box3_expand(){
    var iso = document.querySelectorAll(".card-box-accessories3");
    var i;
    for (i = 0; i < iso.length; i++) {
      iso[i].classList.remove("scrool-hide");
      //console.log(iso.length); 
    } 
    document.getElementById('see_3').style.display = "none";
  }


  
  // juery js 
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
            $(document).ready(function(){
              $('.materialboxed').materialbox();
            });