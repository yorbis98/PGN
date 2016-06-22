var x;
x=$(document);
x.ready(inicializarEventos);

function inicializarEventos()
{
  var x;
  x=$("#publicidad");
  x.click(presionPublicidad);
  x=$("#encabezado")
  x.ready(encabezado)
}

function presionPublicidad()
{
  var x;
  x=$("#publicidad");
  x.css("background-color","#34D8DE");
}
function encabezado()
{
  var x;
  x=$("#encabezado")
  x.css("color","#FFFFFF")
}