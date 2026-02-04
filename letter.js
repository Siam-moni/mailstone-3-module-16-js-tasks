let letter = "Hi My name is Siam";
let count = 0;
// for (let i = 0; i < letter.length; i++) {
//   if (letter[i] === "a") count++;
// }
// console.log(count);
for (let i of letter) {
  if (i === "a") {
    count++;
  }
}
console.log(count);
