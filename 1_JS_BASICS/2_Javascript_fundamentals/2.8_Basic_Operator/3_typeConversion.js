// "" + 1 + 0
// "" - 1 + 0
// true + false
// 6 / "3"
// "2" * "3"
// 4 + 5 + "px"
// "$" + 4 + 5
// "4" - 2
// "4px" - 2
// "  -9  " + 5
// "  -9  " - 5
// null + 1
// undefined + 1
// " \t \n" - 2


alert("" + 1 + 0); // 10 , "" considers as empty string
alert("" - 1 + 0); // -1, "" considers as 0
alert(true + false); // 1 
alert(6 / "3"); // 2, valid string '3' converted to 3 implicit conversion
alert("2" * "3"); //6 
alert(4 + 5 + "px"); //9px
alert("$" + 4 + 5); // $
alert("4" -2) // 2
alert("4px" - 2); //NaN
alert("  -9  " + 5); // -95
alert("  -9  " - 5); // -14
alert(null +1); // 1 null=0
alert(undefined +1);//NaN
alert(" \t \n" - 2); //-2 special characters taken as 0