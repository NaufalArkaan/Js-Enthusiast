//cek bilangan prima
// function checkPrima(number){
//     var flag = 0;
//     for(var i = 1; i <= number; i++){
//         if(number % i === 0){
//             flag++;
//         }
//     }
//     if(flag === 2){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(checkPrima(4));
// console.log(checkPrima(2));


//Mengubah jadi huruf besar
// function hurufBesar(str){
//     var ubah = String(str);

//     return ubah.toUpperCase();
// }
// console.log(hurufBesar("Hahaha"));


//nilai min dan max


// function maxMin (arrayAngka){
//     var max = arrayAngka[0];
//     var min = arrayAngka[0];

//     for(i=0; i < arrayAngka.length; i++){
//         if(max < arrayAngka[i]){
//             max = arrayAngka[i];
//         }
//         if(min > arrayAngka[i]){
//             min = arrayAngka[i];
//         }
//     }
//     return{
//         max : max,
//         min : min
//     }
// }
// console.log(maxMin([10,5,4,3,2,1]));


//menghitung huruf vokal

// function hitungVokal(str){
//     var result = {
//         a : 0,
//         i : 0,
//         u : 0,
//         e : 0,
//         o : 0
//     };

//     for(i = 0; i < str.length; i++){
//         if(str[i] === 'a'){
//             result.a++;
//         }else if(str[i] === 'i'){
//             result.i++;
//         }else if(str[i] === 'u'){
//             result.u++;
//         }else if(str[i] === 'e'){
//             result.e++;
//         }else if(str[i] === 'o'){
//             result.o++;
//         }
//     }

//     return result;
// }

// console.log(hitungVokal("hello rek"))


//mencari rata rata terbesar
// function findAvarageMax(arr2D){
//     var result = [];

//     for(var i = 0; i < arr2D.length; i++){
//         result.push(avarageArray(arr2D[i]));
//     }

//     var max = result[0];
//     var index = 0;
//     for(var i = 0; i < result.length; i++){
//         if(max < result[i]){
//             max = result[i];
//             index = i;
//         }
//     }

//     return "array ke " + (index + 1) + " merupakan rata-rata tersebut";
// }



// function avarageArray(arr){
//     var total = 0;
//     for(var i = 0; i < arr.length; i++){
//         total+=arr[i];
//     }

//     return total/arr.length;
// }

// console.log(findAvarageMax([
//     [10,3,5,7,5],
//     [5,6,4,1,2],
//     [7,8,12,10,5]
// ]));


//quiz
// var items = ["a","b","c"]
// console.log(items[0] + items[1] + items[2]);

// var total = "abc" - 5;
// console.log(total);

// var n;
// var m = n % 2 === 0;
// console.log(m)

// function check(str){
//     return str.length;
//     }
//     console.log(check("array"));

// var obj = {
//     type : "123"
//     }
//     console.log(typeof obj.type);

// var n1 = 100;
// var n2 = "100";
// console.log(n1 === n2)

// console.log(null === false);

// var n = [10,20,30,40,50];
// var m = ["1","2","3"];
// console.log(m[0] + m[1] + m[2])

// var choice;
// choice = drink;
// switch(choice){
// case "food" :
// console.log(choice);
// break;
// case "drinks" :
// console.log("beverages");
// break;
// }

// var n = 10
// console.log(typeof n)

// var n = [10,20,30,40,50];
// var m = ["1","2","3"];
// console.log(m)

// var choice;
// choice = food;
// switch(choice){
// case "food" :
// console.log(choice);
// break;
// case "drinks" :
// console.log("beverages");
// break;
// }

// var type = function(arg){
//     return typeof arg
//     }
//     console.log(type([]));