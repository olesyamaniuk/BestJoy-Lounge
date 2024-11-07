document.addEventListener('DOMContentLoaded', () => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const navListRef = document.querySelector('.navigation__list');
  const headerRef = document.querySelector('.header');
  const navigationRef = document.querySelector('.navigation'); 

  menuBtnRef.addEventListener('click', () => {
    menuBtnRef.classList.toggle('is-open');
    navListRef.classList.toggle('is-open');
    headerRef.classList.toggle('is-open');
    navigationRef.classList.toggle('is-open'); 
  });

  document.querySelectorAll('.navigation__link').forEach((n) =>
    n.addEventListener('click', () => {
      navListRef.classList.remove('is-open');
      menuBtnRef.classList.remove('is-open');
      headerRef.classList.remove('is-open');
      navigationRef.classList.remove('is-open'); 
    })
  );
});



document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("cookie-popup");
    const acceptButton = document.getElementById("accept-cookies");
    const declineButton = document.getElementById("decline-cookies");
    const closeButton = document.getElementById("close-popup");

    // Перевіряємо, чи користувач уже прийняв або відхилив файли cookie
    if (!localStorage.getItem("cookiesAccepted")) {
        popup.style.display = "block";
    }

    // Подія на кнопку "Прийняти"
    acceptButton.onclick = function () {
        localStorage.setItem("cookiesAccepted", "true");
        popup.style.display = "none";
    };

    // Подія на кнопку "Відхилити"
    declineButton.onclick = function () {
        localStorage.setItem("cookiesAccepted", "false");
        popup.style.display = "none";
    };

    // Подія для закриття попапу
    closeButton.onclick = function () {
        popup.style.display = "none";
    };
});









