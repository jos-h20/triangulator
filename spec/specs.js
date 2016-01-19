describe('triangle', function() {
  it("is scalene for a triangle with unequal sides", function() {
    expect(triangle(4,2,3)).to.equal("a scalene ");
  });

  it("is equilateral for a triangle with all equal sides", function() {
    expect(triangle(2,2,2)).to.equal("an equilateral ");
  });

  it("is isosceles for a triangle with two equal sides", function() {
    expect(triangle(2,2,3)).to.equal("an isosceles ");
  });

  it("is not a triangle for the sum of 2 sides is less or equal to the third side", function() {
    expect(triangle(1,2,5)).to.equal("is not a ");
  });

});
