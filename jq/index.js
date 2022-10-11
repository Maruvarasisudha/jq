$(document).ready(function(){
$("#hide").click(function(){
$("p").hide();
});
$("#show").click(function(){
    $("p").show();
});

});

$(document).ready(function(){
    $("#demo").click(function(){
    $("ul li:first-child").hide();
    });
    $("input").focus(function(){
        $("this").css("backgound-color","yellow");
        });
    });

    $(document).ready(function(){
    $("input").focus(function(){
        $(this).css("background-color","yellow");
        });
       
    });
 
$(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideToggle("slow");
    });
  });

  $(document).ready(function(){
    $("button").click(function(){
      $("div").animate({
        left: '250px',
        height: '+=150px',
        width: '+=150px'
      });
    });
  });









// $(document).ready(function(){
//     $("#text").click (function(){
//     $("#next").slidedown("slow");
// });

// });
















//  $(document).ready(function(){
//         $("button").click(function(){
//           $("#demo").load("jack.txt");
//         });
//       });
    

// //     function loadDoc(){
// let xtthp = new XMLHttpRequest();
// xtthp.onload=function(){
//     document.getElementById("demo").innerHTML=this.responseText;
// }
// xtthp.open("GET", "jack.txt");
// xtthp.send()
//  console.log(xtthp)
// }



    