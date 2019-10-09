var show = true;//начальное условие для прекращения инструкции: строки 3-7

$("html").mousemove(function(){//обработчик события "Движение мыши" по странице
    if(show){ 
        $(".welcome").css({
            display: "flex",
        });
        show = false;
    }
});

$("#btn_no").on("click", function(){//Завершение скрипта, если выбрано "Нет"
    $(".welcome").css({
        display: "none",
    });
});

$("#btn_yes").on("click", function(){//Обработчик события "Клик" на кнопку "Да"
    $(".welcome").css({
        display: "none",
    });

    $("p").slideUp(0);//элементы спрятаны для дальнейшего показа
    $("#btn_start").slideUp(0);

    $(".preview").css({//открытие пустого нового окна 
        display: "flex",
    });
    $("#p1").slideDown(2000);//отображение элементов
    $("#p2").slideDown(2000);
    $("#p3").slideDown(2000);
    $("#p4").slideDown(2000);
    $("#btn_start").slideDown(2000);
});

$("#btn_start").on("click", function(){//Обработчик события "Клик" на кнопку "Дерзай!"
    $(".preview").css({
        display: "none",
    });

    $("html, body").css({
        backgroundColor: "#fff",
    });

    $("#main").css({
        display: "flex",
    });
});

$("#btn_choose").on("click", function(){//Обработчик события "Клик" на кнопку "Выберите жертву"
    $("#pick_1, #pick_2, #pick_3, #pick_4").slideUp(0);//элементы спрятаны
    $("#toShow").css({//открытие div с картинками
        display: "flex",
    });
    $("#btn_choose").css({//удаление кнопки "Выберите жертву"
        display: "none",
    });
    $("#pick_1").slideDown(2000);//показ картинок
    $("#pick_2").slideDown(2000);
    $("#pick_3").slideDown(2000);
    $("#pick_4").slideDown(2000);
});

//создание объектов для массива и дальнейшего перебора
var Joker = {
    img: "images/joker_1.jpg",
};
var Batman = {
    img: "images/batman_1.jpg",
};
var Spider = {
    img: "images/spider_1.jpg",
};
var Rambo = {
    img: "images/rambo_1.jpg",
};

//выбор элементов картинок со страницы
var pick_1 = $("#pick_1");
var pick_2 = $("#pick_2");
var pick_3 = $("#pick_3");
var pick_4 = $("#pick_4");

//добавление ключ:значение в объекты
Joker.element = pick_1;
Batman.element = pick_2;
Spider.element = pick_3;
Rambo.element = pick_4;

//создание массива
var heroes = [Joker, Batman, Spider, Rambo];

console.log(heroes);//проверка

heroes.forEach(function(item){//перебор массива
    console.log(item.element);//проверка
    item.element.on("click", function(){//обработчик события на клик по картинке супергероя
        item.element.css({//выбранный элемент исчезает
            opacity: 0,
        });
        $("#shake").css({//div с картинкой шкафа получает абсолютное позиционирование
            position: "absolute",
        });
        $("#shake").rotate({//запуск вращения элемента 
            speed: 5000,
            degrees: 360,
        }, function(){//по окончанию вращение выполняется функция по смене картинки
            $("#shake").attr('src', item.img);//в качетве источника картинки указан ключ из массива супергероев
        });
        $("#btn_accept").hide(0);//кнопка "Продолжить?" скрыта
        $("#accept_button").css({
            display: "flex",
        });
        $("#btn_accept").delay(5000).show(1000);//кнопка появляется в течение 1 секунды с задержкой 5 секунд - для стыковки с процессом вращения
    });
});

var count = 0;//исходное значение для счета

$("#btn_accept").on("click", function(){//обработка события "Клик" на кнопку "Продолжить?"
    $("#btn_accept").hide(0);//кнопка спрятана
    $("#accept_button").css({
        display: "none",
    });
    $("#shake").attr('src', 'images/transform.jpg');//картинка меняется на картинку шкаф для дальнейшего использования
    count++;
    console.log(count);//проверка
    if(count === 4){//как только все картинки из массива обработаны
        $("#btn_accept").hide(0);//кнопка спрятана
        $("#shake").attr('src', 'images/finish.jpeg');//картинка шкаф меняется на финишную картинку
    }
});




