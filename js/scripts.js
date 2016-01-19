var triangle = function(a, b, c) {
  if((a + b > c) && (b + c > a) && (a + c > b)) { //triangle?
    if(a === b && a === c) { //equilateral?
      return "an equilateral ";
    } else if((a === b && a !== c) ||(b === c && b !== a) || (a === c && a !== b)) { //isosceles?
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

  $(function() {
    $("form#isTriangle2").submit(function(event) {
      var side4 = parseInt($("input#side4").val());
      var side5 = parseInt($("input#side5").val());
      var side6 = parseInt($("input#side6").val());
      var result2 = triangle(side4, side5, side6);

      $(".triangle2").text(result2)

      $("#result2").show();
      event.preventDefault();
    });
});
