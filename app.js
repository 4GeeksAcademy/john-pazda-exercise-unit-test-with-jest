const fromEuroToDollar= (euro) => {
    let dollar = euro * 1.2;
    console.log(dollar);
    return dollar;
}

console.log(fromEuroToDollar(3.5));

const fromDollarToYen = (dollar) => {
    let yen = dollar * 145.42;
    console.log(yen);
    return yen;

}

const fromYenToPound = (yen) => {
    let pound = yen * .0054;
    console.log(pound);
    return pound;
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };




