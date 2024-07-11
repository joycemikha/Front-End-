
    $(".singers h3").click(function (){
        $(this).next().slideToggle();
    $(".singers div").not( $(this).next()).slideUp();    
    });

     $("textarea").keyup(function (){
      let l = $(this).val().length;
      len = 100- l;
       $(".reamin").text(len <= 0 ? "your available character finished ": len)
    });
    
    $(document).ready(function() {
        var countDownDate = new Date("Aug 30, 2024 15:37:25").getTime();
            var x = setInterval(function() {
            var now = new Date().getTime();
            var count = countDownDate - now;
            var days = Math.floor(count / (1000 * 60 * 60 * 24));
            var hours = Math.floor((count % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((count % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((count % (1000 * 60)) / 1000);
   
            $(".timer-d").text(days + "  D " );
            $(".timer-h").text(hours + "  H " );
            $(".timer-m").text(minutes + "  M " );
            $(".timer-s").text(seconds + "  S " );
        }, 1000);
    });
    