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

        var defaultPosition,
        mapOptions,
        gMap,
        Geocoder,
        gMarker,
        image;
        var addressRdv="Rue des Pépinières 7,6860 Ebly Belgique"

        function generateGoogleMap() {
            //Set position to Bruxelle
            defaultPosition = new google.maps.LatLng( 50.8504500, 4.3487800 );
            //Init mapOptions
            mapOptions = {
                center: defaultPosition,
                zoom: 15,
                disableDefaultUI: true,
                scrollwheel: false,
                draggable: true,
                mapTypeId: google.maps.MapTypeId.ROADMAPx
            };
            imageRdv = {
                url: 'img/marker-map.png',
                size: new google.maps.Size( 50,50 ),
                origin: new google.maps.Point( 0,0 ),
                anchor: new google.maps.Point( 25, 50 )
            };

            //Init Geocoder
            Geocoder = new google.maps.Geocoder();
            selectedAdress();
            //Set defaultGmap
            gMap = new google.maps.Map( document.getElementById( "contactMap" ), mapOptions );
        }
        function selectedAdress() {
           Geocoder.geocode( { 'address': addressRdv}, function(results, status) {
               if (status == google.maps.GeocoderStatus.OK) {
                   gMap.setCenter(results[0].geometry.location);
                   gMarker = new google.maps.Marker( {
                       map: gMap,
                       position: results[0].geometry.location,
                       icon: imageRdv
                   } );
               }
           } );
       }
       generateGoogleMap();

    } );



} ) (jQuery);
