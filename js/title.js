$(function(){
        $('.comtit').children().each(function(k){
            $(this).mouseenter(function(){
                $('.jk').eq(k).css({'display':'block'});
            });
            $(this).mouseleave(function(){
               $('.jk').eq(k).css({'display':'none'});
            });
        });
        $('.topr a').each(function(k){
            $(this).mouseenter(function(){
            	$(this).css('border-left','#ccc');
                $('.online').eq(k).css({'display':'block'});
            });
            $(this).mouseleave(function(){
            	$(this).css('border-left','none');
            	$('.online').eq(k).css({'display':'none'});
            });
        });
    });