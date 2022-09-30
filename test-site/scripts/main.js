/*
	var myVariable='Bob'; //字串
	var myVariable=10; //整數
	var myVariable=true; // Boolean
	var myVariable=[1,'Bob','Steve',10]; // 一維陣列
	myVariable[0]、myVariable[1]->顯示該陣列內值
	var myVariable = document.querySelector('h1'); //物件引用
	
	//運算子中，等於->=== | 不等於->!== | 單一個等號為指派用。
	// if else 寫法如下
	if (a==='gg'){
		alert('yes!');
	}else{
		alert('no');
	}
	//alert() 這個函式會在瀏覽器內視窗內產生一個彈出視窗，但是我們必須要傳給她一個字串當作參數，告訴這個函式，該把什麼東西放到這個彈出視窗裡。
	
	// function 範例
	function multiply(num1,num2) {
		let result = num1 * num2;
		return result;
	}
	multiply(4,7);
	multiply(20,20);
	multiply(0.5,3);
	
*/

var myHeading = document.querySelector('h1');/*選取元素(類似物件概念)*/
myHeading.textContent='Hello would';/*指定字串給該變數並且顯示*/

/*// 以下為事件範例-當按下網頁時,將跳出訊息提示
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}*/

// 以下為事件範例-點選圖片就換圖
var myImage = document.querySelector('img');

myImage.onclick = function(){
	let mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/images.jpg'){
		myImage.setAttribute('src','images/imageaa.png');
	}else{
		myImage.setAttribute('src','images/images.jpg');
	}
}

// button事件設定
var myButton = document.querySelector('button'); //取得button元素並指派給myButton
var myHeading = document.querySelector('h1'); //取得h1元素並指派給myHeading

// 設定名稱函數
function setUserName(){
	let myName = prompt('請輸入您的姓名:'); // prompt為網頁訊息視窗,跳出請user輸入名稱
	if(!myName || myName===null){ //判斷當myName不成立or為空值就在跳一次本函數直至user輸入
		setUserName();
	}else{
		localStorage.setItem('name',myName); //這個 API 可以讓使用者先將一些資料儲存在瀏覽器裡面，之後有需要的話再取出來使用。
		myHeading.innerHTML = '歡迎光臨~您好，'+myName;	//將一個字串跟使用者的名字指定給標題的innerHTML特性(該屬性只會作用在標題類)
	}
}
// 判斷當前名稱與顯示
if(!localStorage.getItem('name')){ // 從api中判斷是否有存在名稱,如無則觸發取名稱function,反之顯示名稱
	setUserName();
}else{
	let storedName = localStorage.getItem('name');
	myHeading.innerHTML = '歡迎光臨~您好，'+storedName;
}
// 將button與function綁定
myButton.onclick = function(){
	setUserName();
}