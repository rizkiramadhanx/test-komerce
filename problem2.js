const PSBB = (numberOfFamilies, membersOfFamilies) => {
  const MAX_BUS = 4;

  const countFamilies = membersOfFamilies.split(" ").length;
  const sumAllFamily = membersOfFamilies
    .split(" ")
    .map(Number)
    .reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);

  if (numberOfFamilies !== countFamilies) {
    return "Input must be equal with count of family";
  }

  const requiredBus = Math.ceil(sumAllFamily / 4);

  return `Minimun bus required is : ${requiredBus}`;
};

console.log(PSBB(5, "1 2 4 3 3"));
console.log(PSBB(8, "2 3 4 4 2 1 3 1"));
console.log(PSBB(5, "1 5"));
