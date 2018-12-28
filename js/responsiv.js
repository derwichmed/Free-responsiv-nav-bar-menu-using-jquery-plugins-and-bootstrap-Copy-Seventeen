$(function (){
   $('.nav_item').mouseover(function (){
       $(this).find('.nav_item_icon > div').css('border-color','skyblue');
       $(this).find('.nav_item_icon img').
               attr('src',
                $(this).find('.nav_item_icon').attr('hover-img'));
       $(this).find('> .drop_down > img').attr('src','img/drop_down_icon_hover.png');         
       $('.nav_item > div > .sub_menu:visible').hide();
      $(this).find('> div > .sub_menu').show(); 
   });
   
   $('.nav_item').mouseout(function (){
       $(this).find('.nav_item_icon > div').css('border-color','#efefef');
       $(this).find('.nav_item_icon img').
               attr('src',
                $(this).find('.nav_item_icon').attr('init-img'));
        $(this).find('> .drop_down > img').attr('src','img/drop_down_icon.png');        
   });
   
   $('.sub_menu_item').mouseover(function (){
      $(this).find('> .drop_down > img').attr('src','img/drop_down_icon_hover.png');          
   });
   $('.sub_menu_item').mouseout(function (){
      $(this).find('> .drop_down > img').attr('src','img/drop_down_icon.png');          
   });
   
   $('.sub_menu_item').mouseover(function (){
      $('.sub_menu_item > div > .sub_menu:visible').hide(); 
      $(this).find('> div > .sub_menu').show(); 
   });
   var elem = '<img src="img/drop_down_icon.png" style="'+
                                 'width: 18px;'+
                                 'height: 18px;'+
                                 'position: absolute;'+
                                 'right: 5px;'+
                                 'top: 15px'+
                                 '"/>';
   $('.drop_down').append(elem);
    $('body').children(':not(header)').mouseover(function (){
       $('.sub_menu:visible').hide(); 
    });
    if($(window).width() <= 800){
    $('.nav_item').mouseover(function (){
       $(this).css('background-color','transparent');
       $(this).find('strong').css('background-color','skyblue');
       $(this).find('strong').css('box-shadow','#a4a4a4 2px 2px 2px');
       $(this).find('strong').css('border-radius','5px');
       $(this).css('box-shadow','none');
    });
    $('.nav_item').mouseout(function (){
       $(this).css('background-color','#efefef');
       $(this).find('strong').css('background-color','transparent');
       $(this).find('strong').css('box-shadow','none');
       $(this).find('strong').css('border-radius','0px');
       $(this).css('box-shadow','#a4a4a4 2px 2px 2px');
    });
    
    $('.sub_drop_down').mouseover(function (){
       $(this).css('background-color','transparent');
       $(this).find('> .drop_down > em').css('background-color','skyblue');
       $(this).find('> .drop_down > em').css('box-shadow','#a4a4a4 2px 2px 2px');
       $(this).find('> .drop_down > em').css('border-radius','5px');
       $(this).css('box-shadow','none');
    });
    $('.sub_drop_down').mouseout(function (){
       $(this).css('background-color','#efefef');
       $(this).find('> .drop_down > em').css('background-color','transparent');
       $(this).find('> .drop_down > em').css('box-shadow','none');
       $(this).find('> .drop_down > em').css('border-radius','0px');
       $(this).css('box-shadow','#a4a4a4 2px 2px 2px');
    });
    }
});