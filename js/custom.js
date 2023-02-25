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

});

function contact() {
  Swal.fire({
    title: "Formulario de contacto",
    html: `<div class="alert alert-danger" role="alert">
    El formulario aún no está activo
  </div><input type="text" id="name" class="swal2-input" placeholder="Nombre">
      <input type="email" id="email" class="swal2-input" placeholder = "E-mail">
      <textarea class = "swal2-textarea" id = "message"></textarea>`,
    confirmButtonText: "Crear una cuenta",
    focusConfirm: false,
    preConfirm: () => {
      const name = Swal.getPopup().querySelector("#name").value;
      const email = Swal.getPopup().querySelector("#email").value;
      const message = Swal.getPopup().querySelector("#message").value;

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

const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
card1.addEventListener("mousemove", (event) => {
  const cardH = card1.clientHeight;
  const cardW = card1.clientWidth;
  const { layerX, layerY } = event;

  const yRotation = ((layerX - cardW / 2) / cardW) * 20;

  const xRotation = ((layerY - cardH / 2) / cardH) * 20;

  const changes = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
  card1.classList.add("cardEnter");
  card1.style.transform = changes;
});

card1.addEventListener("mouseout", () => {
  const changes = `rotateX(0deg) rotateY(0deg)`;
  card1.classList.remove("cardEnter");
  card1.style.transform = changes;
});
card2.addEventListener("mousemove", (event) => {
  const cardH = card2.clientHeight;
  const cardW = card2.clientWidth;
  const { layerX, layerY } = event;

  const yRotation = ((layerX - cardW / 2) / cardW) * 20;

  const xRotation = ((layerY - cardH / 2) / cardH) * 20;

  const changes = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
  card2.classList.add("cardEnter");
  card2.style.transform = changes;
});

card2.addEventListener("mouseout", () => {
  const changes = `rotateX(0deg) rotateY(0deg)`;
  card2.classList.remove("cardEnter");
  card2.style.transform = changes;
});

card3.addEventListener("mousemove", (event) => {
  const cardH = card3.clientHeight;
  const cardW = card3.clientWidth;
  const { layerX, layerY } = event;

  const yRotation = ((layerX - cardW / 2) / cardW) * 20;

  const xRotation = ((layerY - cardH / 2) / cardH) * 20;

  const changes = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
  card3.classList.add("cardEnter");
  card3.style.transform = changes;
});

card3.addEventListener("mouseout", () => {
  const changes = `rotateX(0deg) rotateY(0deg)`;
  card3.classList.remove("cardEnter");
  card3.style.transform = changes;
});
