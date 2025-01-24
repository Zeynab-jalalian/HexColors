let hex=document.getElementById('hex-code');
let body=document.querySelector('body');
function changeColor(){
    let hex_numbers=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]; //تمام حالت های ممکن رنگ به صورت هگزادسیمال در یک آرایه
    let hexCode=""; //متغیر برای ذخیره ی رنگ ایجاد شده
    for(let i=0;i<6;i++){ //حلقه ای که 6 بار تکرار شود
     let random_index=Math.floor(Math.random() * hex_numbers.length); //عدد رندوم بین 0 تا 15
     hexCode+=hex_numbers[random_index]; //ساخت هگزادسیمال به تدری
    }
    hex.innerHTML=hexCode; //کد هگزادسیمال دقیق
    body.style.background="#"+hexCode; //رنگ پس زمینه
}