// ---------СПИСОК--------//

var heroes = ['Joker', 'Batman', 'Silver Lady', 'Kutrapali', 'Rocky', 'Harley Quin', 'Superwoman', 'Tina Turner'];

var div = document.getElementById("list");
document.body.appendChild(div);
var ul = document.createElement('ul');
div.appendChild(ul);
    
var btn1 = document.createElement('button');//создаём кнопку
    btn1.style.margin = "10px"
var textInBtn = document.createTextNode('Открыть список');//создаем текст для кнопки
btn1.appendChild(textInBtn);//добавляем текст в кнопку
document.body.appendChild(btn1);

var btn2 = document.createElement('button');
    btn2.style.margin = "10px"
var textInBtn = document.createTextNode('Скрыть список');
btn2.appendChild(textInBtn);
document.body.appendChild(btn2);

btn1.onclick = function myFunction() {
    div.style.height = "200px";
    div.style.opacity = 1; 
    div.style.transition = "all 0.5s ease-in";

    for(var i = 0, ln = heroes.length; i < ln; i++){
        var li = document.createElement('li');
        li.innerHTML = heroes[i];
        ul.appendChild(li);
    }
}

btn2.onclick = function myFunction() {
    div.style.height = "0px"; 
    div.style.opacity = 0; 
    div.style.transition = "height 0.5s ease"; 
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
