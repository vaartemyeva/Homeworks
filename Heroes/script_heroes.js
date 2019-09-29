var Joker = {
    Имя: "Joker", 
    img: "images/joker.jpg",
    Возраст: 35, 
    Девиз: "Стихи читать по-Маяковски, готовить по-офигентски, уважать конъяк", 
    Особенность: "Не будите лихо, пока оно тихо"
};
var Batman = {
    Имя: "Batman", 
    img: "images/batman.jpg",
    Возраст: 40, 
    Девиз: "Играть в шахматы пока не онемеют пальцы, быть упорным в игре на гитаре и поедании шоколада", 
    Особенность: "Очень любит декартову систему координат"
};
var Silver_Lady = {
    Имя: "Silver Lady", 
    img: "images/Daenerys.jpg",
    Возраст: "У женщин об этом не спрашивают", 
    Девиз: "Красить корни каждые 2 недели, х*ли еще есть способ быть блондинкой настоящей узбекской женщине!", 
    Особенность: "Любит экзотический способ передвижения, например, драконы"
};
var Kutrapali = {
    Имя: "Kutrapali", 
    img: "images/kutrapali.jpg",
    Возраст: "Теряется при ответе на этот вопрос", 
    Девиз: "Надо было учить математику еще тогда - когда?", 
    Особенность: "Неестественная тяга к корице"
};
var Rocky = {
    Имя: "Rocky", 
    img: "images/rocky_balboa.jpg",
    Возраст: "После третьего боя подсчет данного числа вызывает бесконечную рекурсию", 
    Девиз: "Пока гонг не прозвенел, бой продолжается. Лично вы слышали гонг? Лично я, нет, продолжаем.", 
    Особенность: "Слишком короткие боксерские трусы"
};
var Harley_Quinn = {
    Имя: "Harley Quinn", 
    img: "images/harley_quinn.jpg",
    Возраст: "Кажется 12+", 
    Девиз: "Даже так?! Всех убить и сбежать? Простите... Эти голоса... Ха-ха-ха, я шучу, Господи! Они не это сказали.", 
    Особенность: "Необъятный запас придури"
};
var Superwoman = {
    Имя: "Superwoman", 
    img: "images/superwoman.jpg",
    Возраст: "Строго по паспорту", 
    Девиз: "К черту Супермена, женщины рулят!", 
    Особенность: "Лассо, детка"
};
var Tina_Turner = {
    Имя: "Tina Turner", 
    img: "images/tina_turner.jpg",
    Возраст: "Без возраста", 
    Девиз: "You're simply the best", 
    Особенность: "Of course, legs"
};

var heroes = [Joker, Batman, Silver_Lady, Kutrapali, Rocky, Harley_Quinn, Superwoman, Tina_Turner];

//----УЗНАТЬ ИНФОРМАЦИЮ О ГЕРОЯХ----
    
var btn_heroes = document.querySelector("#btn_heroes");//подключаем кнопку

var show = true;

btn_heroes.onclick = function (){
    btn_heroes.innerHTML = (btn_heroes.innerHTML === "Я слишком много знаю") ? btn_heroes.innerHTML = "Узнать больше" : btn_heroes.innerHTML = "Я слишком много знаю";
    
    var main = document.querySelector('#heroes');
    
    for(var i = 0; i < heroes.length; i++){
        var box = document.createElement('div'); //чтобы каждый элемент был создан столько раз = heroes.length
        var left = document.createElement('div');
        var right = document.createElement('div');
        var image = document.createElement('img'); //создание тега картинки, поэтому в строке 99 можно использовать аттрибут src
        var ul = document.createElement('ul');
        
        box.className = "box" //для возможности добавлять стили элементам в CSS
        left.className = "left"
        right.className = "right"
        
        main.appendChild(box) //указываем вложенность элементов
        box.appendChild(left)
        box.appendChild(right)
        right.appendChild(ul);

        for (var key in heroes[i]) { //перебираем ключи в массиве героев
           var li = document.createElement('li'); //для каждого ключа создаем li - для выведения

            if([key] == "img")  { //чтобы картинка не выводилась в списке
                continue
            }

            li.innerHTML = [key] + ": " + heroes[i][key]; //вставляем в правый див запись - название ключа : значение ключа. Запись heroes[i][key] означает, что сначала выбираем элемент массива (тип - объект), а затем указываем ключевое слово key (как пример, cat ["name"])
            ul.appendChild(li); 
        }
        
        image.src = heroes[i].img; //в элементе image (тег img) указывает источник по ключу объекта img (например, строка 4)
        left.appendChild(image) //добавляем картинку в левый див
    }   

    if(show){
        main.style.display = "block";
        show = false;
    }else{
        main.style.display = "none";
        show = true;
        main.innerHTML = " ";
    }
}
