document.addEventListener("DOMContentLoadd", () => {
  const cardsAdj = [
    {
      name: "abeja",
      img: "imagenes/abeja.jpg"
    },
    {
      name: "axolot",
      img: "imagenes/axolot.jpg"
    },
    {
      name: "zorro",
      img: "imagenes/zorro.jpg"
    },
    {
      name: "capy",
      img: "imagenes/capy.jpg"
    },
    {
      name: "rana",
      img: "imagenes/rana.jpg"
    },
    {
      name: "mapache",
      img: "imagenes/mapache.jpg"
    },
    {
      name: "abeja",
      img: "imagenes/abeja.jpg"
    },
    {
      name: "axolot",
      img: "imagenes/axolot.jpg"
    },
    {
      name: "zorro",
      img: "imagenes/zorro.jpg"
    },
    {
      name: "capy",
      img: "imagenes/capy.jpg"
    },
    {
      name: "rana",
      img: "imagenes/rana.jpg"
    },
    {
      name: "mapache",
      img: "imagenes/mapache.jpg"
    }
  ];
});

const cuadricula = document.querySelector(".cuadricula");
  const resultado = document.querySelector("#resultado");
  var cartasEscogidas = [];
  var cartasEscogidasId = [];
  var cartasGanadas = [];

  //----------------- lecture_03 ----------------------------------//
  function crearTablero() {
    for (let i = 0; i < cardAdj.length; i++) {
      // Loop que inicia en i=0, se incrementa de 1 en 1 (i++) y finaliza
      // cuando i=cardAdj.length, es decir, 12.
      var carta = document.createElement("img"); // Crea elemento img cada vez que se ejecuta la función.
      carta.setAttribute("src", "images/reverso.png"); //Asignar nuevo atributo a cada carta
      //igual a la imagen 'reverso'.
      carta.setAttribute("data-id", i); //Asignar como atributo a cada carta creada, el id=i.
      carta.addEventListener("click", voltearCarta); //Detectar si la carta asignada recibe un click y ejecuta
      //la función voltearCarta.
      cuadricula.appendChild(carta); // Relaciona la carta creada con la variable cuadricula enlazada con la clase
      // cuadricula de html para que se imprima la carta creada en el div de html.
    
function voltearCarta(){
  var cardId = this.getAttribute("data-id");
  cartasEscogidas.push(cardAadj[cardId].name);
  cartasEscogidasId.push(cardId);
  this.setAttribute("src", cardAdj[cardId].img)
  if (cartasEscogidas.legth === 2){
    setTimeout(verificarPareja,1000);
  }
}
 crearTablero();
});