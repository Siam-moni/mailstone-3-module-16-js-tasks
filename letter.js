// let letter = "Hi My name is Siam";
// let count = 0;
// // for (let i = 0; i < letter.length; i++) {
// //   if (letter[i] === "a") count++;
// // }
// // console.log(count);
// for (let i of letter) {
//   if (i === "a") {
//     count++;
//   }
// }
// console.log(count);

let letters = "Hi My name is SiAm eAting banAna";
let count = 0;
for (let i of letters) {
  if (i === "a" || i === "A") {
    count++;
  }
}
console.log(count);
