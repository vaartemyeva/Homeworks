//-------МАТЕМАТИЧЕСКИЙ ТРЕНАЖЕР------

var button = document.querySelector("#btn");
var sum = document.querySelector("#result");
var num1 = document.querySelector("#number1");
var num2 = document.querySelector("#number2");
var show = true;


function seeRes() {
    sum.style.height = "30px";
    sum.style.opacity = 1;
    sum.style.transition = "all 0.5s ease-in";
}

function pureAll(){
    sum.style.overflow = "hidden";
    sum.style.height = "0px"; 
    sum.style.opacity = 0;
    sum.style.transition = "height 0.5s ease";
    num1.value = "";
    num2.value = "";
}

button.onclick = function res(){
    button.innerHTML = (button.innerHTML === 'Результат умножения') ? button.innerHTML = 'Очистить' : button.innerHTML = 'Результат умножения';
    
    var first = Number(num1.value);
    var second = Number(num2.value);
    
    if(show){
        var result = first * second;
        sum.innerHTML = result;
        seeRes();
        show = false;
    }
    else{
        pureAll();
        show = true;
    }
}

//--------СМЕНА КАРТИНОК-------


var images = document.querySelectorAll("#images > ul > li");
console.log(images);
images.forEach(function(item){
    item.onmouseover = function(){
        var area = document.querySelector("#main");
        var pic = this.innerHTML;
        area.innerHTML = pic;
    }
});
    


// ---------СПИСОК--------//

var heroes = ['Joker', 'Batman', 'Silver Lady', 'Kutrapali', 'Rocky', 'Harley Quin', 'Superwoman', 'Tina Turner'];

var div = document.getElementById("list");
document.body.appendChild(div);
var ul = document.createElement('ul');
div.appendChild(ul);
    
var btn = document.createElement('button');//создаём кнопку
document.body.appendChild(btn);
btn.innerHTML = 'Открыть список';

function showList() {
    div.style.height = "200px";
    div.style.transition = "height 0.5s ease-in";

    var ln = heroes.length;
    for(var i = 0; i < ln; i++){
        var li = document.createElement('li');
        li.innerHTML = heroes[i];
        ul.appendChild(li);
    }
}

function hideList() {
    div.style.overflow = "hidden";
    div.style.height = "0px"; 
    div.style.transition = "height 0.5s ease"; 

    ul.innerHTML = "";
}

btn.onclick = function (){
    btn.innerHTML = (btn.innerHTML === 'Скрыть список') ? btn.innerHTML = 'Открыть список' : btn.innerHTML = 'Скрыть список';

    if(show){
        showList();
        show = false;
    }
    else{
        hideList();
        show = true;
    }
}

// ---------ПЕРЕБОР МАССИВА--------//

/*var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
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
var lg = num.length;
for(var i = 0; i < lg; i++){
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
console.log("Четных : " + count2);*/
