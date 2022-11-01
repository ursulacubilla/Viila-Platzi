var vp= document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var vaca = {
  url: "vaca.png",
  cargaOK: false
};

var fondo= {
  url: "tile.png",
  cargaOK: false
};

var cerdo = {
  url: "cerdo.png",
  cargaOK: false
};

var pollo = {
  url: "pollo.png",
  cargaOK: false
};
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

function cargarPollo(){
  pollo.cargaOK = true;
  dibujar();
}

function cargarCerdos(){
  cerdo.cargaOK = true;
  dibujar(0, 0);
}

function cargarFondo(){
  fondo.cargaOK = true;
  dibujar();
}
function cargarVacas(){
  vaca.cargaOK = true;
  dibujar();
}

function dibujar(ejex, ejey){
  if(fondo.cargaOK);
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(vaca.cargaOK);
  {
    var cantidad = aleatorio(5, 6);
    for(var v=0; v < cantidad; v++){
      var x = aleatorio  (0, 5);
      var y = aleatorio (0, 5);
      var x = x * 80;
      var y = y * 80;
      papel.drawImage(vaca.imagen, x, y);}
    }
  if(cerdo.cargaOK)
  {
    var cantidad = 1;
  for(var c=0; c<cantidad; c++){
    /*var x = 0;
    var y = 0;*/
    /*var x = x * 80;
    var y = y * 80;*/
    papel.drawImage(cerdo.imagen, ejex, ejey);}
  }
  if(pollo.cargaOK)
  {
    var cantidad = aleatorio (1, 4);
  for(var p=0; p<cantidad; p++){
    var x = aleatorio  (0, 4);
    var y = aleatorio (0, 4);
    var x = x * 80;
    var y = y * 80;
    papel.drawImage(pollo.imagen, x, y);}
}
}

var teclas={
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};
console.log(teclas);
document.addEventListener("keyup", moverCerdo);
/*var cuadrito=vp;
var hoja=papel;*/
var x = 150;
var y = 150;

function moverCerdo(evento){
var c = cerdo.imagen;
var movimiento =10;

 switch(evento.keyCode){
   case teclas.UP:
   //dibujarLinea(c, x, y, x, y - movimiento, hoja);
   y = y - movimiento;
   //papel.drawImage(cerdo.imagen, x, y);
   dibujar(x, y);
   break;
   case teclas.DOWN:
   //dibujarLinea(c, x, y, x, y + movimiento, hoja);
   y = y + movimiento;
   dibujar(x, y);
   break;
   case teclas.LEFT:
   //dibujarLinea(c, x, y, x - movimiento, y, hoja);
   x = x - movimiento;
   dibujar(x, y);
   break;
   case teclas.RIGHT:
   //dibujarLinea(c, x, y, x + movimiento, y, hoja);
   x = x + movimiento;
   dibujar(x, y);
 }
}





function aleatorio(min, maxi){
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
