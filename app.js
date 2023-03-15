document.addEventListener("DOMContentLoaded", () => {
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

  const cuadricula = document.querySelector(".cuadricula");
  const resultado = document.querySelector("#resultado");
  var cartasEscogidas = [];
  var cartasEscogidasId = [];
  var cartasGanadas = [];

  //----------------- lecture_03 ----------------------------------//
  function crearTablero() {
    for (let i = 0; i < cardsAdj.length; i++) {
      var carta = document.createElement("img");
      carta.setAttribute("src", "imagenes/reverso.png");
      //igual a la imagen 'reverso'.
      carta.setAttribute("data-id", i);
      carta.addEventListener("click", voltearCarta);
      //la función voltearCarta.
      cuadricula.appendChild(carta);
    }
  }

  function voltearCarta() {
    var cardId = this.getAttribute("data-id");
    cartasEscogidas.push(cardsAdj[cardId].name);
    cartasEscogidasId.push(cardId);
    this.setAttribute("src", cardsAdj[cardId].img);
    if (cartasEscogidas.length === 2) {
      setTimeout(verificarPareja, 1000);
    }
  }
  crearTablero();
});
