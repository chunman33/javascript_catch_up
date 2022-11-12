// 変数を使う
let hello = "Hello World";
alert(hello);

// 整数を代入する
let int1 = 1;

// 負数を代入する
let int2 = -10;

// 小数点を代入する
let int3 = 3.14;

// 文字列を代入する
let str1 = 'JavaScriptを覚えよう';

// 四則演算
//足し算
alert(4+3);

//引き算
alert(8-5);

//掛け算
alert(2*6);

//割り算
alert(10/2);

//文字列を結合
alert('Hello'+'World');

let str2 = 'Hello'; 

let str3 = 'World!!';

alert(str2 + str3);


let orange = 100;
let apple = 120;

if(orange<apple){
 alert('みかんの値段がリンゴより安い');
}else if(orange == apple){
 alert('みかんとリンゴが同じ値段');
}else{
  alert('みかんの値段がリンゴより高い');
}

let max = 100;
let num = 1;
let count = 0;

while(num<max){
  num = num * 2
  count = count + 1;
}

alert('2を掛け続けて'+ max + 'を超えるのに必要だった回数は' + count + '回です。');

let i;
let num2 = 0;
//i++ はi = i +1と同じ。
for(i = 1; i < 11; i++){
  num2 = num2 + i 
}

alert(num2);


