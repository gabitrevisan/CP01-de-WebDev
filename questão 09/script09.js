let numStr = "21.77721";
let numFloat = parseFloat(numStr);
let numFixed = numFloat.toFixed(2);

console.log(numFixed); // imprime "21.78" no console por conta do arredondamento

