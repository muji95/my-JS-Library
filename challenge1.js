let markWeight = 67;
let johnWeight = 92;
let markHeight=1.80;
let johnHeight=1.95;
// calculate BMI of mark
var markBMI = markWeight / (markHeight ** 2);
var johnBMI = johnWeight / (johnHeight ** 2);
console.log(markBMI, johnBMI);
let markHigherBMI = true;
markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

console.log(`Mark's BMI ${markBMI}
John's BMI ${johnBMI}`);
