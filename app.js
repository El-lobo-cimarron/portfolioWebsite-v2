$(document).ready(function(){
  $("#year").text( new Date().getFullYear());

  //Hamburger Nav Bar
if (window.matchMedia("(max-device-width: 600px)").matches){
    var navBar = "hiddenMenu";
    $(".header a").css("display", "none");
    $("#hamburger").click(function(){
        if (navBar == "hiddenMenu"){
          //$(".navbar-link").addClass("hmb-slideRight");
            $(".header a").css("display", "block");
            navBar = "activeMenu";
        } else {
          $(".navbar-link").css("display", "none");
          navBar = "hiddenMenu";
        }
  });
}
  //myName animation
  $(".white-box:nth-child(2)").mouseenter(function(e){
    $(".fName").addClass("fName-hover");
    $(".fName").html("Maroon");
  }).mouseleave(function(e){
      $(".fName").removeClass("fName-hover");
      $(".fName").html("Maroun");
  });
  $(".white-box:nth-child(3)").mouseenter(function(e){
    $(".mName").addClass("mName-hover");
  }).mouseleave(function(e){
      $(".mName").removeClass("mName-hover");
  });

    // $(".mName").addClass("mName-hover");

  // About me animation
  $("#aboutMeText").css("display", "none"); //Hiding About Me Text on page load
  $("#aboutMe").click(function(){
    var $this = $(this),
    clickNum = $this.data('clickNum');
    if (!clickNum) clickNum = 1;
    $this.data('clickNum', ++clickNum);

    if (clickNum%2 ) { //Odd (Home)
      // For Mobile
      if (window.matchMedia("(max-device-width: 600px)").matches){
        $("#myName").removeClass("name-fadeOut").addClass("name-fadeIn");
        // About Me Text fading out
          $("#aboutMeText").removeClass("abm-fadeIn").addClass("abm-fadeOut");
          $("abm-end").on('animationend', //removes About me after animation end
        function(){
          $("#aboutMeText").removeClass("abm-end");
        });
      } else {
        // For Desktop
        // White boxes move to the right
        $(".white-box").removeClass("slide-left").addClass("slide-right");
          $("#myName").removeClass("slide-left").addClass("slide-right");
          $(".slide-right").on('animationend', //removes the bug with animation
        function(){
          $(".white-box").removeClass("slide-right");
          $("#myName").removeClass("slide-right");
        }
      );
        // About Me Text fading out
          $("#aboutMeText").removeClass("abm-start").addClass("abm-end");
          $("abm-end").on('animationend', //removes About me after animation end
        function(){
          $("#aboutMeText").removeClass("abm-end");
        });
      }


    } else { // (About me)
      // For Mobile
      if(window.matchMedia("(max-device-width: 600px)").matches){
        //my Name fadein
        $("#myName").addClass("name-fadeOut");
        $("#aboutMeText").css("display", "block");
        if(clickNum!==1){
          // myName fadein
          $("#myName").removeClass("name-fadeIn").addClass("name-fadeOut");
          $("#aboutMeText").removeClass("abm-fadeOut").addClass("abm-fadeIn");
        }
      } else {
        // White boxes move to the left
          $(".white-box").addClass("slide-left");
          $("#myName").addClass("slide-left");
          $("#aboutMeText").css("display", "block");
        if(clickNum!==1){ //Clicked 3 or more times
          $(".white-box").removeClass("slide-right");
          $("#myName").removeClass("slide-right");
          // About me text fading in
          $("#aboutMeText").removeClass("abm-end").addClass("abm-start");

        }
      }
    }

  $("#aboutMe").text(function(i, text){
      return text === "About me" ? "Home" : "About me";
    });

  });





});
