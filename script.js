var images = ["images/img_1.png", "images/img_2.png","images/img_3.png", "images/img_4.png", "images/img_5.png", "images/img_6.png", "images/img_7.png", "images/img_8.jpg", "images/img_9.jpg", "images/img_10.png"];

$(function() {
  var swPeople = "https://swapi.co/api/people/";

  $.getJSON(swPeople).done(function (data) {
    var person = data.results;
    
    for (let i = 0; i < person.length; i++) {
      $(".row").append('<div class="col-sm-3">');
    }
    $(".col-sm-3").append('<div class="card">');
    $(".card").append('<img class="card-img-top">');
    $(".card").append('<div class="card-body">');
    $(".card-body").append('<h5 class="card-title">');
    $(".card-body").append('<p class="card-text_1">');
    $(".card-body").append('<p class="card-text_2">');
    $(".card-body").append('<p class="card-text_3">');
    $(".card-body").append('<p class="card-text_4">');
    $(".card-body").append('<p class="card-text_5">');
    
    images.forEach(par => {
      console.log(par);
      $(".card-img-top").attr("src", par);
    });
     
    person.forEach(element => { 
      //console.log(element);
      var name = element.name;
      var gender = element.gender;
      var eyeColor = element.eye_color;
      var hairColor = element.hair_color;
      var height = element.height;
      var starships = element.starships.length;
      $(".card-title").text(`${name}`);
      $(".card-text_1").text(`gender: ${gender}`);
      $(".card-text_2").text(`eyes: ${eyeColor}`);
      $(".card-text_3").text(`hair: ${hairColor}`);
      $(".card-text_4").text(`height: ${height}`);
      $(".card-text_5").text(`starships: ${starships}`);
    });
    
  })
})
/*
 <div class="card">
          <img src="..." class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Название карточки</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
*/