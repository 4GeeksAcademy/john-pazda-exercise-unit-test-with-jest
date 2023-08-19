


test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One dollar should be 145.42 Yen", function(){
    //importing function from app.js
    const { fromDollarToYen } = require('./app.js');

    //run an example of calling the function
    const yen = fromDollarToYen(1)

    //create a test of what the expected output should be
    expect(fromDollarToYen(1)).toBe(145.42); // 1 dollar should be 145.42 yen


})

test("1 Yen should be equal to .0054 pounds", function(){
    const { fromYenToPound } = require('./app.js');

    const pound = fromYenToPound(1)

    expect(fromYenToPound(1)).toBe(.0054);
})