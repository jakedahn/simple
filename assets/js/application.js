$(function(){

  $('code').each(function(){
    $(this).attr('data-language', $(this).attr('class'))
  });


});