$(document).ready(function(){


  // About me animation
  $("#aboutMeText").css("display", "none"); //Hiding About Me Text on page load
  $("#aboutMe").click(function(){
    var $this = $(this),
    clickNum = $this.data('clickNum');
    if (!clickNum) clickNum = 1;
    $this.data('clickNum', ++clickNum);

    if (clickNum%2 ) { //Odd (Home)
      // White boxes move to the right
      $(".white-box").removeClass("slide-left").addClass("slide-right");
        $(".slide-right").on('animationend', //removes the bug with animation
      function(){
        $(".white-box").removeClass("slide-right");
      }
    );
      // About Me Text fading out
        $("#aboutMeText").removeClass("abm-start").addClass("abm-end");
        $("abm-end").on('animationend', //removes About me after animation end
      function(){
        $("#aboutMeText").removeClass("abm-end");
      });

    } else { // (About me)
      // White boxes move to the left
        $(".white-box").addClass("slide-left");
        $("#aboutMeText").css("display", "block");
      if(clickNum!==1){
        $(".white-box").removeClass("slide-right");
        // About me text fading in
        $("#aboutMeText").removeClass("abm-end").addClass("abm-start");
      }

    }

  $("#aboutMe").text(function(i, text){
      return text === "About me" ? "Home" : "About me";
    });

  });



  // Problem with sliding to the portfolio section

  // $(document).ready(function(){
  //   // Add smooth scrolling to all links
  //   $("a").on('click', function(event) {
  //
  //     // Make sure this.hash has a value before overriding default behavior
  //     if (this.hash !== "portfolio") {
  //       // Prevent default anchor click behavior
  //       event.preventDefault();
  //
  //       // Store hash
  //       var hash = this.hash;
  //
  //       // Using jQuery's animate() method to add smooth page scroll
  //       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
  //       $('html, body').animate({
  //         scrollTop: $(hash).offset().top
  //       }, 800, function(){
  //
  //         // Add hash (#) to URL when done scrolling (default click behavior)
  //         window.location.hash = hash;
  //       });
  //     } // End if
  //   });
  // });


});
