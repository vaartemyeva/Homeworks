
var alhocol = document.querySelector("#alhocol");//определяем input для ввода алкоголя
var food = document.querySelector("#food");//определяем input для ввода закуски

function List(){//создаем конструктор объектов
    this.alhocol = alhocol.value;//значение input алкоголя
    this.food = food.value;//значение input закуски
}

var arr = [];//создаем пустой массив для хранения новых объектов

function saveForm(){ //создаем функцию для добавления новых объектов в массив
    arr.push(new List (alhocol.value, food.value)); //вызываем конструктор
}

var btnShow = document.querySelector("#btn_show");//определяем кнопку для показа списка
var btnSave = document.querySelector("#btn_save");//определяем кнопку для сохранения информации из input
var div = document.querySelector("#result");//определяем div для вывода общей информации из input
var ul = document.createElement('ul');//создаем список, обязательно перед обработчиком - иначе будет несколько ul
div.appendChild(ul);//добавляем в div, где будет выводится список с результатами

btnSave.onclick = function (){//обработчик события при нажатии на кнопку "Сохранить"
    saveForm();//вызываем функцию для заполнения массива новыми объектами
    console.log(arr);//Чтобы посмотреть какой массив получается - чисто для себя
    var li = document.createElement('li');//создаем li для записи свойств каждого объекта

    for (let i = 0; i < arr.length; i++) {//перебор массива
        li.innerHTML = (arr[i].alhocol + " и " + arr[i].food);//заполняем li
        ul.appendChild(li);
    }
    alhocol.value = "";//удаляем значения из input для последующего ввода
    food.value = "";//удаляем значения из input для последующего ввода
}

var show = true;//начальное условие для переключения между функциями showResult и hideResult

var showResult = function(){//описание функции для показа div с результатами
    div.style.height = "100%";
    div.style.display = "flex";
    div.style.opacity = "1";
    div.style.transition = "height 0.5s ease-in";
}

var hideResult = function(){//описание функции для скрытия div с результатами
    div.style.overflow = "hidden";
    div.style.display = "none"; 
    div.style.transition = "height 0.5s ease"; 
}

btnShow.onclick = function (){//обработчик события при нажатии на кнопку "Узнать больше/Я слишком много знаю"
    btnShow.innerHTML = (btnShow.innerHTML === "Узнать больше") ? btnShow.innerHTML = "Я слишком много знаю" : btnShow.innerHTML = "Узнать больше";
    if(show){
        showResult();
        show = false;
    }
    else{
        hideResult();
        show = true;
    }
}
