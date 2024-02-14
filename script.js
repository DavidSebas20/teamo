$(document).ready(function () {
  const paragraphs = [
    "Me dijiste que escribiera algo memorable, así que lo hice. Mi recuerdo de la primera vez de nuestro bello click, fue en mi auto en el primer beso que nos dimos. Estabas sentada a mi lado y te veías tan hermosa como siempre. Amo ver peliculas contigo y ese dia fue tan magico que dije porque no lanzarme por un beso. Lastimosamente giraste la cabeza. Pense que quizas nunca te iba a besar, pero de repente solo sin pensarlo nos dimos un beso. ",
    "Fue tan magico ya que parecia que todo a mi al rededor se detenia. Solo te vi y me dieron muchas ganas de abrazarte. Esse dia fue muy bonito para mi porque ese dia me di cuenta que necesitaba estar a tu lado, que habia encontrado a la persona con la que queria arriesgarme a intentarlo. Algunas veces no puedo creer lo afortunado que soy de que me eligieras y aceptaras ser mi novia. Quiero estar a tu lado.",
    "No siempre será fácil, pero quiero hacer lo necesario para que esto funcione, porque eso haces cuando amas a alguien. Por favor, si están de acuerdo considera este nuestro nuevo contrato.",
  ];

  let currentParagraphIndex = 0;

  function showNextParagraph() {
    // Ocultar el párrafo actual
    $(`.paragraph-${currentParagraphIndex}`).hide();

    // Incrementar el índice del párrafo
    currentParagraphIndex++;

    // Si se ha llegado al final, mostrar el H2 y eliminar el botón
    if (currentParagraphIndex === 2) {
      const paragraphText = paragraphs[currentParagraphIndex];
      const paragraphElement = $(
        `<p class="paragraph-${currentParagraphIndex}">${paragraphText}</p>`
      );
      $(".paragraphs").append(paragraphElement, "<h2>Te amo</h2>");
      $("#next-card-button").remove();
    } else {
      // Generar el siguiente párrafo
      const paragraphText = paragraphs[currentParagraphIndex];
      const paragraphElement = $(
        `<p class="paragraph-${currentParagraphIndex}">${paragraphText}</p>`
      );

      // Insertar el párrafo en el DOM
      $(".paragraphs").append(paragraphElement);

      // Mostrar el siguiente párrafo con un efecto de desvanecimiento
      paragraphElement.fadeIn(500);
    }
  }

  // Animación inicial de la tarjeta
  $(".left-curtain").css("width", "0%");
  $(".right-curtain").css("width", "0%");

  $(".valentines-day").click(function () {
    $(".envelope").css({
      animation: "fall 3s linear 1",
      "-webkit-animation": "fall 3s linear 1",
    });
    $(".envelope").fadeOut(800, function () {
      $(
        ".valentines-day .heart, .valentines-day .text, .valentines-day .front"
      ).hide();

      $("#card").css({
        visibility: "visible",
        opacity: 0,
        transform: "scale(0.1)",
      });
      $("#card").animate(
        { opacity: 1 },
        {
          duration: 1000,
          step: function (now, fx) {
            var scale = 1 + Math.sin(now * Math.PI) * 0.1;
            $(this).css("transform", "scale(" + scale + ")");
          },
          complete: function () {
            // Generar y mostrar el primer párrafo
            const paragraphText = paragraphs[0];
            const paragraphElement = $(
              `<p class="paragraph-0">${paragraphText}</p>`
            );
            $(".paragraphs").append(paragraphElement);
            paragraphElement.fadeIn(500);
          },
        }
      );
    });
  });

  // Botón para mostrar el siguiente párrafo
  $("#next-card-button").click(function () {
    showNextParagraph();
  });

  // Ocultar los párrafos que no sean el primero
  for (let i = 1; i < paragraphs.length; i++) {
    $(`.paragraph-${i}`).hide();
  }
});
