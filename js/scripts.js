var triangle = function(side1, side2, side3) {
  if((side1 + side2 > side3) && (side2 + side3 > side1) && (side1 + side3 > side2)) { //triangle?
    if(side1 === side2 && side1 === side3) { //equilateral?
      return "equilateral";
    } else if((side1 === side2 && side1 !== side3) ||(side2 === side3 && side2 !== side1) || (side1 === side3 && side1 !== side2)) { //isosceles?
      return "isosceles";
    } else {                      //is scalene
      return "scalene";
    }
  } else {
      return "notTriangle";
    };
};



// $(function() {
//
//     $("#result").show();
//     event.preventDefault();
//   });
// });
