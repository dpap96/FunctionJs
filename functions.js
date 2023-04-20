'use strict'; //5η εκδοση js+
//1η ασκηση
console.log('1η Ασκηση'); //εμφανιση στην κονσολα
var num=2; //δηλωνω μεταβλητη 

for(var i=1; i<=10; i++){
    console.log(i + 'η δυναμη του 2 ειναι: '+ num);
    num=num*2;
}
console.log("\n\n"); //αφηνει 2 κενες γραμμες

//2η ασκηση 
console.log('2η Ασκηση:');
var array=[10,14,9];
var arrayS=['aa','ba','ca'];
var topnumber;
function compareNums(Array){
    var topnum=Array[0];
    for(var i=1; i<Array.length; i++){
        if(topnum<Array[i])
        topnum=Array[i];
    }
    return topnum;
}
topnumber=compareNums(array);
console.log('Kλήση συνάρτησης "array" :'+topnumber); 
topnumber=compareNums(arrayS);
console.log('Kλήση συνάρτησης "arrayS" :'+topnumber); 

//3η ασκηση
function power(a, b) {
    if (Number.isInteger(a) && Number.isInteger(b) && a > 0 && b > 0) {
      return Math.pow(a, b);
    } else {
      return undefined;
    }
  }
  // Παραδείγματα κλήσης της συνάρτησης
  console.log(power(2, 3)); // αποτέλεσμα: 8
  console.log(power(3.2, 3)); // αποτέλεσμα: undefined
  console.log(power(-3, 3)); // αποτέλεσμα: undefined
  console.log(power('aa', 'ba')); // αποτέλεσμα: undefined


