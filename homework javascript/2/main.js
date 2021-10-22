var color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

function inchi(n)
 {
 var o = ["th","st","nd","rd"],
 x = n%100;
 return x+(o[(x-20)%10]||o[x]||o[0]);
 }

for(n = 0; n < color.length; n++){
 var ordinal = n + 1;

 var output = (inchi(ordinal) + " choice is " + color[n] + ".");

console.log(output);
}
