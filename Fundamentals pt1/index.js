// Question 1
var x = [3, 5, 'Dojo', 'rocks', 'Michael', 'Sensei']
for(i = 0; i < x.length; i++){
  console.log(x[i])
}
//Question 2
x.push(100);
console.log(x);
//Question 3
x.push([1,2,3]);
console.log(x);
//Question 4
var sum = 0;
for(i = 1; i < 501; i++){
  sum += i;
}
console.log(sum);
//Question 5
array = [1, 5, 90, 25, -3, 0];
min = array[0];
for(i = 1; i < array.length; i++){
  if(array[i] < min){
    min = array[i];
  }
}
console.log(min);
//Question 6
array2 = [1, 5, 90, 25, -3, 0];
sum = 0;
for(i = 0; i < array2.length; i++){
  sum += array2[i];
}
console.log(sum/array2.length);
