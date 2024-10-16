function swipe() {
  let largeImage = document.getElementById("openImgg");
  largeImage.style.display = "block";
  let url = largeImage.getAttribute("src");

  window.open(
    url,
    "Image",
    `width=${largeImage}.stylewidth,height=${largeImage}.style.height,resizable=1`
  );
}
function swipe2() {
  var largeImage = document.getElementById("openImg2");
  largeImage.style.display = "block";
  var url = largeImage.getAttribute("src");
  window.open(
    url,
    "Image",
    "width=openImg2.stylewidth,height=openImg2.style.height,resizable=1"
  );
}
function swipe3() {
  var largeImage = document.getElementById("openImg3");
  largeImage.style.display = "block";
  var url = largeImage.getAttribute("src");
  window.open(
    url,
    "Image",
    "width=openImg3.stylewidth,height=openImg3.style.height,resizable=1"
  );
}
function swipe4() {
  let largeImage = document.getElementById("openImg4");
  largeImage.style.display = "block";
  let url = largeImage.getAttribute("src");

  window.open(
    url,
    "Image",
    "width=openImg4.stylewidth,height=openImg4.style.height,resizable=1"
  );
}
function swipe5() {
  let largeImage = document.getElementById("openImg5");
  largeImage.style.display = "block";
  let url = largeImage.getAttribute("src");

  window.open(
    url,
    "Image",
    "width=openImg5.stylewidth,height=openImg5.style.height,resizable=1"
  );
}
// swipe galerie
// let largeImage = document.querySelector(".poza");

// function swipeg(props) {
  
//   props.style.display = "block";
//   let url = props.getAttribute("src");
//   // console.log("ur:" +url, "img:"+largeImage)

//   window.open(
//     url,
//     "Image",
//     `width=${props}.stylewidth,height=${props}.style.height,resizable=1`
//   );
// }

function swipeg() {
  let largeImage = document.getElementById("openImgg");
  largeImage.style.display = "block";
  let url = largeImage.getAttribute("src");
  console.log("ur:" +url, "img:"+largeImage)

  window.open(
    url,
    "Image",
    "width=openImgg.stylewidth,height=openImgg.style.height,resizable=1"
  );
}
function swipeg1() {
  let largeImage = document.getElementById("openImgg1");
  largeImage.style.display = "block";
  let url = largeImage.getAttribute("src");

  window.open(
    url,
    "Image",
    "width=openImgg1.stylewidth,height=openImgg1.style.height,resizable=1"
  );
}
function swipeg2() {
  let largeImage = document.getElementById("openImgg2");
  largeImage.style.display = "block";
  let url = largeImage.getAttribute("src");

  window.open(
    url,
    "Image",
    "width=openImgg2.stylewidth,height=openImgg2.style.height,resizable=1"
  );
}
function swipeg3() {
  let largeImage = document.getElementById("openImgg3");
  largeImage.style.display = "block";
  let url = largeImage.getAttribute("src");

  window.open(
    url,
    "Image",
    "width=openImgg3.stylewidth,height=openImgg3.style.height,resizable=1"
  );
}
function swipeg4() {
  let largeImage = document.getElementById("openImgg4");
  largeImage.style.display = "block";
  let url = largeImage.getAttribute("src");

  window.open(
    url,
    "Image",
    "width=openImgg4.stylewidth,height=openImgg4.style.height,resizable=1"
  );
}
// carusel parteneri

$(document).ready(function () {
  $(`.customer-logos`).slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1200,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $("#mesaj").click(function () {
    let textValue1 = document.getElementById("textValue").value;
    let emailValue1 = document.getElementById("emailValue").value;
    let textmesajValue1 = document.getElementById("textmesajValue").value;

    function validareEmail(emailValue1) {
      let regEmail =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regEmail.test(emailValue1);
    }

    if (
      textValue1 == "" ||
      emailValue1 == "" ||
      !validareEmail(emailValue1) ||
      textmesajValue1 == ""
    ) {
      alert("Completati toate campurile corect");
    } else {
      alert("Mesajul a fost trimis cu succes!");
    }
  });
});

$(document).ready(function () {
  $("#mesajen").click(function () {
    let textValue1 = document.getElementById("textValue").value;
    let emailValue1 = document.getElementById("emailValue").value;
    let textmesajValue1 = document.getElementById("textmesajValue").value;

    function validareEmail(emailValue1) {
      let regEmail =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regEmail.test(emailValue1);
    }

    if (
      textValue1 == "" ||
      emailValue1 == "" ||
      !validareEmail(emailValue1) ||
      textmesajValue1 == ""
    ) {
      alert("Please fill out all the fields");
    } else {
      alert("Your message sent successfully!");
    }
  });
});


$(document).ready(function () {
  $("#mesajit").click(function () {
    let textValue1 = document.getElementById("textValue").value;
    let emailValue1 = document.getElementById("emailValue").value;
    let textmesajValue1 = document.getElementById("textmesajValue").value;

    function validareEmail(emailValue1) {
      let regEmail =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regEmail.test(emailValue1);
    }

    if (
      textValue1 == "" ||
      emailValue1 == "" ||
      !validareEmail(emailValue1) ||
      textmesajValue1 == ""
    ) {
      alert("Si prega di compilare tutti i campi");
    } else {
      alert("Il tuo messaggio è stato inviato con successo!");
    }
  });
});