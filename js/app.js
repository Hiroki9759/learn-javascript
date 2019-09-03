// 体重の数値を得る
let weight;
weight = prompt('BMIを測定します。まずはあなたの体重(kg)を入力してください');
//身体の数値を得る
let height;
height = prompt('BMIを測定します。次にあなたの身長(m)を入力してください');

//体重と身長からBMIを計算して、警告ダイアログに表示する
let bmi = weight / (height *height);
let message1 = 'あなたのBMIは「' + bmi +'」です。\n';
if (bmi < 18.5) {
    message2 = 'あなたは痩せ気味です。';
}else if(18.5 <= bmi < 25){
    message2 = 'あなたは標準です。';
}else{
    message2 = 'あなたは太り気味です。';
}

alert(message1 + message2);