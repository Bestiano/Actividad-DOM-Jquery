$(document).ready(function() {

  $('title').html('Transfórmate en desarrollador web');

  $('.bg-change').click(function() {
    $('.main').toggleClass('new-bg');
  });

  $('.logo-change').click(function() {
    $('.navbar-brand').find('img').toggle().attr('src', 'img/en1mes-logo.png');
  });

  $('.p-add').append(
    '<section class="container seccion-info text-center">'
     +'<h3>SOLICITA INFORMACIÓN E INSCRÍBETE</h3>'
     +'<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto rem delectus veritatis dolorem ipsum, quod incidunt, aut autem rerum id quis reiciendis, voluptates error quo. Blanditiis sequi, adipisci quam sit.</p>'
     +'<a href="#" class="btn btn-info btn-carousel btn-inscribete">Inscríbete</a>'
     +'</section>');

  $('body').on('click', '.btn-inscribete', function(event) {
    event.preventDefault();
    $('.p-add').append(
      '<section class="container seccion-info text-center">'
       +'<h3>SOLICITA INFORMACIÓN E INSCRÍBETE</h3>'
       +'<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto rem delectus veritatis dolorem ipsum, quod incidunt, aut autem rerum id quis reiciendis, voluptates error quo. Blanditiis sequi, adipisci quam sit.</p>'
       +'<a href="#" class="btn btn-info btn-carousel btn-inscribete">Inscríbete</a>'
       +'</section>');
  });

  $('.form-inline').on('click', '.btn-enviar', function(event) {
    val = $('#exampleInputEmail2').val();
    event.preventDefault();
    alert("Tu correo "+ val +" ha sido correctamente recibido")
  });

  $('body').on('click', 'a', function(event) {
    event.preventDefault();
    alert(event.target);
  });

  $('.list').children().children().html('Inicio');






});
