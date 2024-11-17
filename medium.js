function shareePizza(numOfSlices, numOfPeople) {
  let numOfPizza = numOfSlices / numOfPeople;
  return `Each person getrs ${numOfPizza} slices of pizza; from our ${nuOfSlices} slices pizza`;
}

console.log(sharePizza(8, 2));
console.log(sharePizza(8, 3));
console.log(sharePizza(21, 20));
console.log(sharePizza(10, 3));
