var show = true;

$("html").mousemove(function(){
    if(show){ 
        $(".welcome").css({
            display: "flex",
        });
        show = false;
    }
});

$("#btn_no").on("click", function(){
    $(".welcome").css({
        display: "none",
    });
});

$("#btn_yes").on("click", function(){
    $(".welcome").css({
        display: "none",
    });

    $("p").slideUp(0);
    $("#btn_start").slideUp(0);

    $(".preview").css({
        display: "flex",
    });
    $("#p1").slideDown(2000);
    $("#p2").slideDown(2000);
    $("#p3").slideDown(2000);
    $("#p4").slideDown(2000);
    $("#btn_start").slideDown(2000);
});

$("#btn_start").on("click", function(){
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

$("#btn_choose").on("click", function(){
    $("#pick_1, #pick_2, #pick_3, #pick_4").slideUp(0);
    $("#toShow").css({
        display: "flex",
    });
    $("#btn_choose").css({
        display: "none",
    });
    $("#pick_1").slideDown(2000);
    $("#pick_2").slideDown(2000);
    $("#pick_3").slideDown(2000);
    $("#pick_4").slideDown(2000);
});

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

var pick_1 = $("#pick_1");
var pick_2 = $("#pick_2");
var pick_3 = $("#pick_3");
var pick_4 = $("#pick_4");

Joker.element = pick_1;
Batman.element = pick_2;
Spider.element = pick_3;
Rambo.element = pick_4;

var heroes = [Joker, Batman, Spider, Rambo];

console.log(heroes);

heroes.forEach(function(item){
    console.log(item.element);
    item.element.on("click", function(){
        item.element.css({
            opacity: 0,
        });
        $("#shake").css({
            position: "absolute",
        });
        $("#shake").rotate({
            speed: 5000,
            degrees: 360,
        }, function(){
            $("#shake").attr('src', item.img); 
        });
        $("#btn_accept").hide(0);
        $("#accept_button").css({
            display: "flex",
        });
        $("#btn_accept").delay(5000).show(1000);
    });
});

var count = 0;

$("#btn_accept").on("click", function(){
    $("#btn_accept").hide(0);
    $("#accept_button").css({
        display: "none",
    });
    $("#shake").attr('src', 'images/transform.jpg');
    count++;
    console.log(count);
    if(count === 4){
        $("#btn_accept").hide(0);
        $("#shake").attr('src', 'images/finish.jpeg');
    }
});




