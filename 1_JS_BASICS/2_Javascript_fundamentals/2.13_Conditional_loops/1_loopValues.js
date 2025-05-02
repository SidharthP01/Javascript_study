// let i = 3;

// while (i) {
//   alert( i-- );
// }

// let i = 0;
// while (++i < 5) alert( i );

// let i = 0;
// while (i++ < 5) alert( i );

// for (let i = 0; i < 5; i++) alert( i );

// for (let i = 0; i < 5; ++i) alert( i );

// replace for with while

// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }


//find outputs

// //1
// let i = 3;

// while (i) {
//   alert( i-- ); // 3 2 1
// }

// //2
// let j = 0;
// while (++j < 5) alert( j ); // 1 2 3 4

// //3
// let i = 0;
// while (i++ < 5) alert( i ); // 1 2 3 4 5

//4
for (let i = 0; i < 5; i++) alert( i ); // 0 1 2 3 4

for (let i = 0; i < 5; ++i) alert( i ); // 0 1 2 3 4

//5
let i=0;
for(;i<3;){
    alert( `number ${i}!` );  // number 0, number1, number 2
    i++;
}