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




// About me animation
// Problem with sliding to the left
// About me text doesnt show up


$(document).ready(function(){
  $("#aboutMe").click(function(){
    var $this = $(this),
    clickNum = $this.data('clickNum');
    if (!clickNum) clickNum = 1;
    $this.data('clickNum', ++clickNum);

    if (clickNum%2 ) { //Odd (Home)
      $(".white-box").removeClass("slide-left");
        $(".white-box").addClass("slide-right");
        $(".slide-right").on('animationend',
      function(){
        $(".white-box").removeClass("slide-right");
      }
    );
      // About Me Text fading in
    } else { // How do not repeat? (About me)

      if(clickNum===1){
        $(".white-box").addClass("slide-left");
      } else {
        $(".white-box").addClass("slide-left");
        $(".white-box").removeClass("slide-right");
      }
      // About me text fade out
    }
     // $(".white-box").animate(200);

  $("#aboutMe").text(function(i, text){
      return text === "About me" ? "Home" : "About me";
    });

  });
});
