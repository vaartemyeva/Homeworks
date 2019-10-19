var images = ["images/img_1.png", "images/img_2.png","images/img_3.png", "images/img_4.png", "images/img_5.png", "images/img_6.png", "images/img_7.png", "images/img_8.jpg", "images/img_9.jpg", "images/img_10.png"];

$(function() {
  var swPeople = "https://swapi.co/api/people/";

  $.getJSON(swPeople).done(function (data) {
    
    var person = data.results;
    var i = 0;

    person.forEach(element => {
      
      var card = `
        <div class="col-sm-3">
          <div class="card">
            <img class="card-img-top" src=${images[i]}>
            <div class="card-body">
              <h5 class="card-title">${element.name}</h5>
              <p class="card-text">Пол: <b>${element.gender}</b></p>
              <p class="card-text">Цвет глаз: <b>${element.eye_color}</b></p>
              <p class="card-text">Цвет волос: <b>${element.hair_color}</b></p>
              <p class="card-text">Рост: <b>${element.height}</b></p>
              <p class="card-text">Корабли: <b>${element.starships.length}</b></p>
            </div>
          </div>
        </div>
        ` 
      i++;
      $('.row').append(card);

    });
    
  })
})
