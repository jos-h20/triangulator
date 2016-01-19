var triangle = function(side1, side2, side3) {
  if((side1 + side2 > side3) && (side2 + side3 > side1) && (side1 + side3 > side2)) { //triangle?
    if(side1 === side2 && side1 === side3) { //equilateral?
      return "an equilateral ";
    } else if((side1 === side2 && side1 !== side3) ||(side2 === side3 && side2 !== side1) || (side1 === side3 && side1 !== side2)) { //isosceles?
      return "an isosceles ";
    } else {                      //is scalene
      return "a scalene ";
    }
  } else {
      return "is not a ";
    };
};



$(function() {
  $("form#isTriangle").submit(function(event) {
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());
    var result = triangle(side1, side2, side3);

    $(".triangle").text(result);


    $("#result").show();
    event.preventDefault();
  });
});
