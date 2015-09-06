( function( $ ) {
    "user strict";

    $( function() {
        $('.chevaux__item+.chevaux__item .chevaux__right').css('opacity','0');
        $(window).scroll( function(){

            /* Check the location of each desired element */
            $('.chevaux__item+.chevaux__item .chevaux__right').each( function(i){
                var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();

                /* If the object is completely visible in the window, fade it it */
                if( bottom_of_window > bottom_of_object ){

                    $(this).animate({'opacity':'1'},500);

                }

            });

        });

        if(document.getElementsByClassName('cheval-galerie')[0]){
          $('.cheval-galerie>img').fadeOut();
          var lengthGal=$('.cheval-galerie>img').length;
          var previous=0;
          var current=0;
          slideNow();
          function slideNow(){
            $('.cheval-galerie>img').eq(previous).fadeOut();
            $('.cheval-galerie>img').eq(current).fadeIn();
            if(current==0){
              $('.cheval-galerie__previous').css('display','none');
            }else{
              $('.cheval-galerie__previous').css('display','block');
            }
            if(current==(lengthGal-1)){
              $('.cheval-galerie__next').css('display','none');
            }else{
              $('.cheval-galerie__next').css('display','block');
            }
          }

          $('.cheval-galerie__next').click(function(evt){
            evt.preventDefault();
            previous=current;
            current++;
            slideNow();
          });
          $('.cheval-galerie__previous').click(function(evt){
            evt.preventDefault();
            previous=current;
            current--;
            slideNow();

          });

        }
        $('.cheval-galerie').not('.full-galerie').find('img').click(function(){
          $('.cheval-galerie').addClass('full-galerie');
          $('.full-galerie__ferme').css('display','block');
        });
        $('.full-galerie__ferme').click(function(evt){
          evt.preventDefault();
          $('.cheval-galerie').removeClass('full-galerie');
          $('.full-galerie__ferme').css('display','none');
        });

    } );



} ) (jQuery);
