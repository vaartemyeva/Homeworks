// ---------СПИСОК--------//

var heroes = ['Joker', 'Batman', 'Silver Lady', 'Kutrapali', 'Rocky', 'Harley Quin', 'Superwoman', 'Tina Turner'];

var div = document.getElementById("list");
document.body.appendChild(div);
var ul = document.createElement('ul');
div.appendChild(ul);
    
var btn = document.createElement('button');//создаём кнопку
    btn.style.margin = "10px";
    btn.innerHTML = 'Открыть список';
document.body.appendChild(btn);


btn.onclick = function showMe() {
    div.style.height = "200px";
    div.style.transition = "height 0.5s ease-in";
    btn.innerHTML = (btn.innerHTML === 'Открыть список') ? btn.innerHTML = 'Скрыть список' : btn.innerHTML = 'Открыть список';

    for(var i = 0, ln = heroes.length; i < ln; i++){
        var li = document.createElement('li');
        li.innerHTML = heroes[i];
        ul.appendChild(li);
    }
    btn.onclick = function hidList() {
        div.style.overflow = "hidden";
        div.style.height = "0px"; 
        div.style.transition = "height 0.5s ease"; 

        ul.innerHTML = "";
        btn.innerHTML = 'Открыть список';
    }
}

// ---------ПЕРЕБОР МАССИВА--------//

var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var sum1 = 0;
var sum2 = 0;
numbers = numbers.map(function(par){
    if(par % 2 == 0){
        sum2++;
        numbers.push(par);
        return 'четное';
    }
    else{
        sum1++;
        numbers.push(par);
        return 'нечетное';
    }
});

console.log(numbers);
console.log("Нечетных : " + sum1);
console.log("Четных : " + sum2);
console.log("");

//--------2ой СПОСОБ---------//
var num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var count1 = 0;
var count2 = 0;
for(var i = 0, lg = num.length; i < lg; i++){
    if(num[i] % 2 == 0){
        count2++;
        console.log("четное");
    }
    else{
        count1++;
        console.log("нечетное");
    }
}
console.log("Нечетных : " + count1);
console.log("Четных : " + count2);