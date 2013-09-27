$(function(){

  $('code').each(function(code_block){
    self = $(code_block);
    self.html(peacock.highlight(self.html()));
  });

});