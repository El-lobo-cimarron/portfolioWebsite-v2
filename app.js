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
var abmButton = "About Me";
var whiteBox = $(".white-box");
var abmText = $("#aboutMeText");

$(document).ready(function(){
  $("#aboutMe").click(function(){
    if (abmButton == "About Me"){
      // console.log(abmButton);
      whiteBox.style.display = "none";
      // White boxes are sliding to the left
      // About Me Text fading in
      abmButton = "Home";
    } else {
      // console.log(abmButton);
        whiteBox.style.display = "block";
      // About me text fade out
      // White boxes sliding right
      abmButton = "About Me";
    }
     // $(".white-box").animate(200);

    $(this).text(function(i, text){
      return text === "About me" ? "Home" : "About me";
    });


  });

});
