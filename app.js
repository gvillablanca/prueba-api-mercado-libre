$(document).ready(() => {
  fetch('https://api.mercadolibre.com/sites/MLC/search?q=ipod')
  .then(function(response) {
      return response.json();
  })
  .then(function(data) {
    console.log(data)
  })
  
});
// variables globales
var siteSelected = 'MLC';
var categorie = ''
// llama a la funcion cuando al buscador se presiona un enter
$('#search').on('keypress', function(event) {
  if (event.which === 13) {
    search($('#search').val());
  }
});
// buscar todas las imagenes con palabra ingresada
function search(search) {
    $('input').val("");
  $('#rowProductos').html('');
  fetch(`https://api.mercadolibre.com/sites/${siteSelected}/search?q=${search}`)
  .then(function(response) {
      return response.json();
  })
  .then(function(data) {
      console.log(data);
        $.each(data.results, function(i, producto) {       
        $('#rowProductos').append(`<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 imgcont" data-index="${i}">
                                    <div class="col-md-4">
                                      <img class="card-img-top img-${i}" src="${producto.thumbnail}">
                                    </div>
                                    <div class="col-md-8">
                                      <h5 class="card-title text-${i}">${producto.title}</h5>
                                      <p>${producto.price}</p>
                                    </div>
                                    </div>`);
  
      });
   });
}

$( "#musica" ).click(function() {
  $('#rowProductos').empty();
  fetch(`https://api.mercadolibre.com/sites/${siteSelected}/search?q=musica`)
  .then(response => {
    return response.json();
  })
  .then(data =>{
    showMusic(data);
    console.log(data);
  });
});
 
 function showMusic(data) {
   $.each(data.results, function(i, producto) {       
        $('#rowProductos').append(`<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 imgcont" data-index="${i}">
                                    <div class="col-md-4">
                                      <img class="card-img-top img-${i}" src="${producto.thumbnail}">
                                    </div>
                                    <div class="col-md-8">
                                      <h5 class="card-title text-${i}">${producto.title}</h5>
                                      <p>${producto.price}</p>
                                    </div>
                                    </div>`);
  
      });
}

 //////////////////////////////////////////////////////////////////////////////////////////////////
 //////////////////////////////////////////////////////////////////////////////////////////////////
$( "#zapatos" ).click(function() {
  $('#rowProductos').empty();
  fetch(`https://api.mercadolibre.com/sites/${siteSelected}/search?q=calzado`)
  .then(response => {
    return response.json();
  })
  .then(data =>{
    showCalzado(data);
    console.log(data);
  });
});
 
 function showCalzado(data) {
   $.each(data.results, function(i, producto) {       
        $('#rowProductos').append(`<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 imgcont" data-index="${i}">
                                    <div class="col-md-4">
                                      <img class="card-img-top img-${i}" src="${producto.thumbnail}">
                                    </div>
                                    <div class="col-md-8">
                                      <h5 class="card-title text-${i}">${producto.title}</h5>
                                      <p>${producto.price}</p>
                                    </div>
                                    </div>`);
  
      });
}

 //////////////////////////////////////////////////////////////////////////////////////////////////
 //////////////////////////////////////////////////////////////////////////////////////////////////
 $( "#libros" ).click(function() {
  $('#rowProductos').empty();
  fetch(`https://api.mercadolibre.com/sites/${siteSelected}/search?q=libros`)
  .then(response => {
    return response.json();
  })
  .then(data =>{
    showBook(data);
    console.log(data);
  });
});
 
 function showBook(data) {
   $.each(data.results, function(i, producto) {       
        $('#rowProductos').append(`<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 imgcont" data-index="${i}">
                                    <div class="col-md-4">
                                      <img class="card-img-top img-${i}" src="${producto.thumbnail}">
                                    </div>
                                    <div class="col-md-8">
                                      <h5 class="card-title text-${i}">${producto.title}</h5>
                                      <p>${producto.price}</p>
                                    </div>
                                    </div>`);
  
      });
}

 //////////////////////////////////////////////////////////////////////////////////////////////////
 //////////////////////////////////////////////////////////////////////////////////////////////////
 $( "#tecnologia" ).click(function() {
  $('#rowProductos').empty();
  fetch(`https://api.mercadolibre.com/sites/${siteSelected}/search?q=tecnologia`)
  .then(response => {
    return response.json();
  })
  .then(data =>{
    showTec(data);
    console.log(data);
  });
});
 
 function showTec(data) {
   $.each(data.results, function(i, producto) {       
        $('#rowProductos').append(`<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 imgcont" data-index="${i}">
                                    <div class="col-md-4">
                                      <img class="card-img-top img-${i}" src="${producto.thumbnail}">
                                    </div>
                                    <div class="col-md-8">
                                      <h5 class="card-title text-${i}">${producto.title}</h5>
                                      <p>${producto.price}</p>
                                    </div>
                                    </div>`);
  
      });
}

 //////////////////////////////////////////////////////////////////////////////////////////////////
 //////////////////////////////////////////////////////////////////////////////////////////////////
 $( "#maquillaje" ).click(function() {
  $('#rowProductos').empty();
  fetch(`https://api.mercadolibre.com/sites/${siteSelected}/search?q=belleza`)
  .then(response => {
    return response.json();
  })
  .then(data =>{
    showMake(data);
    console.log(data);
  });
});
 
 function showMake(data) {
   $.each(data.results, function(i, producto) {       
        $('#rowProductos').append(`<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 imgcont" data-index="${i}">
                                    <div class="col-md-4">
                                      <img class="card-img-top img-${i}" src="${producto.thumbnail}">
                                    </div>
                                    <div class="col-md-8">
                                      <h5 class="card-title text-${i}">${producto.title}</h5>
                                      <p>${producto.price}</p>
                                    </div>
                                    </div>`);
  
      });
}

 //////////////////////////////////////////////////////////////////////////////////////////////////
 //////////////////////////////////////////////////////////////////////////////////////////////////
 $( "#ropa" ).click(function() {
  fetch(`https://api.mercadolibre.com/sites/${siteSelected}/search?q=vestuario`)
  .then(response => {
    return response.json();
  })
  .then(data =>{
    showClothes(data);
    console.log(data);
  });
});
 
 function showClothes(data) {
  $('#rowProductos').empty();
   $.each(data.results, function(i, producto) {       
        $('#rowProductos').append(`<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 imgcont" data-index="${i}">
                                    <div class="col-md-4">
                                      <img class="card-img-top img-${i}" src="${producto.thumbnail}">
                                    </div>
                                    <div class="col-md-8">
                                      <h5 class="card-title text-${i}">${producto.title}</h5>
                                      <p>${producto.price}</p>
                                    </div>
                                    </div>`);
  
      });
}

 //////////////////////////////////////////////////////////////////////////////////////////////////
 //////////////////////////////////////////////////////////////////////////////////////////////////