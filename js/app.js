$(document).ready(function () {
  $(".slider").slick({
    dots: true,
    infinite: true,
    speed: 1000,
    fade: true,
    cssEase: "linear",
  });

  // Выделение активной ссылки START
  const address = window.location.pathname.split("/")[1].split(".")[0];
  const menu_links = document.querySelectorAll(".menu_link");

  if (address === "") {
    menu_links[0].classList.add("active");
  } else {
    menu_links.forEach((menu_link) => {
      const page = menu_link.getAttribute("href").split("/")[1].split(".")[0];
      if (page === address) {
        menu_link.classList.add("active");
      }
    });
  }
  // Выделение активной ссылки END
});
