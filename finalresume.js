$('.tabs').on('click', 'li', function(q){
    q.preventDefault();
    $(this).addClass('active');
    $(this).siblings(this).removeClass("active");
    
     var $name = $(this).children('a').attr('href');
      $($name).show();
     $($name).siblings().hide();
   });