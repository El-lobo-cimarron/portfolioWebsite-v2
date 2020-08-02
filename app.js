$(document).ready(function(){
  $("#year").text( new Date().getFullYear());

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





});
