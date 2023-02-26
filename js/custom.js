"use strict";
let polaroids = $(".polaroid");

$(document).ready(function () {
  for (let i = 0; i < polaroids.length; i++) {
    $("#" + polaroids[i].id).click("click", () => {
      hidePolaroid(i);
    });
  }
  showPolaroids();
  $(window).scroll(function () {
    let top = $(this).scrollTop();
    if (top == 0) {
      showPolaroids();
    }
  });
  function showPolaroids() {
    for (let i = 0; i < polaroids.length; i++) {
      setTimeout(() => {
        $("#" + polaroids[i].id).show("slow");
      }, i * 1500);
    }
  }

  function hidePolaroid(id) {
    $("#" + polaroids[id].id).hide("slow");
  }

  $(".brands").slick({
    slidesToShow: 4, //nº de marcas visibles
    slidesToScroll: 1, //cuantas añade en cada cambio
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false, //quitamos controls
    pauseOnHover: true, //pausa al hacer hover
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });

  $("#sportButton").click(function () {
    $("#sports").toggle();
  });
  $("#babyButton").click(function () {
    $("#babys").toggle();
  });
  $("#bootsButton").click(function () {
    $("#boots").toggle();
  });
});

function contact() {
  Swal.fire({
    title: "Formulario de contacto",
    html: `<div class="alert alert-danger" role="alert">
    El formulario aún no está activo
  </div><input type="text" id="name" class="swal2-input" placeholder="Nombre">
      <input type="email" id="email" class="swal2-input" placeholder = "E-mail">
      <textarea class = "swal2-textarea" id = "message"></textarea>`,
    confirmButtonText: "Enviar",
    focusConfirm: false,
    preConfirm: () => {
      let name = Swal.getPopup().querySelector("#name").value;
      let email = Swal.getPopup().querySelector("#email").value;
      let message = Swal.getPopup().querySelector("#message").value;

      if (!name || !email || !message) {
        Swal.showValidationMessage(
          `Introduce todos los datos para poder registrarte`
        );
      } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        Swal.showValidationMessage(`Introduce un email válido`);
      }

      return {
        name: name,
      };
    },
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        "Nuestro formulario aún no está activo",
        "Próximamente estará disponible",
        "error"
      );
    }
  });
}

let card1 = document.getElementById("card1");
let text1 = document.getElementById("text1");
let card2 = document.getElementById("card2");
let text2 = document.getElementById("text2");
let card3 = document.getElementById("card3");
let text3 = document.getElementById("text3");
card1.addEventListener("mousemove", (event) => {
  let cardH = card1.clientHeight;
  let cardW = card1.clientWidth;
  let { layerX, layerY } = event;

  let yRotation = ((layerX - cardW / 2) / cardW) * 20;

  let xRotation = ((layerY - cardH / 2) / cardH) * 20;

  let changes = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
  card1.classList.add("cardEnter");
  text1.classList.add("cardTextHover");
  card1.style.transform = changes;
});

card1.addEventListener("mouseout", () => {
  let changes = `rotateX(0deg) rotateY(0deg)`;
  card1.classList.remove("cardEnter");
  text1.classList.remove("cardTextHover");
  card1.style.transform = changes;
});
card2.addEventListener("mousemove", (event) => {
  let cardH = card2.clientHeight;
  let cardW = card2.clientWidth;
  let { layerX, layerY } = event;

  let yRotation = ((layerX - cardW / 2) / cardW) * 20;

  let xRotation = ((layerY - cardH / 2) / cardH) * 20;

  let changes = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
  card2.classList.add("cardEnter");
  text2.classList.add("cardTextHover");
  card2.style.transform = changes;
});

card2.addEventListener("mouseout", () => {
  let changes = `rotateX(0deg) rotateY(0deg)`;
  card2.classList.remove("cardEnter");
  text2.classList.remove("cardTextHover");
  card2.style.transform = changes;
});

card3.addEventListener("mousemove", (event) => {
  let cardH = card3.clientHeight;
  let cardW = card3.clientWidth;
  let { layerX, layerY } = event;

  let yRotation = ((layerX - cardW / 2) / cardW) * 20;

  let xRotation = ((layerY - cardH / 2) / cardH) * 20;

  let changes = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
  card3.classList.add("cardEnter");
  text3.classList.add("cardTextHover");
  card3.style.transform = changes;
});

card3.addEventListener("mouseout", () => {
  let changes = `rotateX(0deg) rotateY(0deg)`;
  card3.classList.remove("cardEnter");
  text3.classList.remove("cardTextHover");
  card3.style.transform = changes;
});
