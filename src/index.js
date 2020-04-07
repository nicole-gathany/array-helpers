// TODO
function checkArray(arr) {
  return (
    Array.isArray(arr) ||
    Object.prototype.toString.call(arr) === "[object Array]"
  );
}

let arrProto = Array.prototype;

arrProto.isEmpty = function() {
  return this.length === 0;
};
arrProto.square = function() {
  if (this.length > 0) {
    return this.map(a => Math.pow(a, 2));
  } else return "Wrong square";
};

arrProto.sum = function() {
  if (this.length > 0) {
    return this.reduce((a, b) => a + b);
  } else return "Wrong sum";
};

arrProto.average = function() {
  if (this.length > 0) {
    return this.reduce((a, b) => a + b) / this.length;
  } else return "Wrong average";
};

arrProto.even = function() {
  return this.filter(a => a % 2 === 0);
};

let numbers = [1, 2, 3, 4, 5];
let empty = [];
console.log(numbers.isEmpty());
console.log(numbers.square());
console.log(numbers.sum());
console.log(numbers.average());
console.log(numbers.even());
console.log(empty.isEmpty());
console.log(empty.square());
console.log(empty.sum());
console.log(empty.average());
console.log(empty.even());
