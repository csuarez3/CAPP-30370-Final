  $(document).ready(function() {
    $(".accordion .course").click(function() {
      if($(this).next("div").is(":visible")){
        $(this).next("div").slideUp("slow");
      } else {
        $(".accordion .writing").slideUp("slow");
        $(this).next("div").slideToggle("slow");
      }
    });
  });