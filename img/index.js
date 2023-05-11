let searchForm = document.querySelector('.search-form');

document.querySelector('#search-icon').onclick = ()=>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove("active");
    HomeIcon.classList.remove("active");
}


let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#basket-icon').onclick = ()=>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove("active");
    HomeIcon.classList.remove("active");
}

let  loginForm = document.querySelector('.login-form')

document.querySelector('#login-icon').onclick = ()=>{
   loginForm.classList.toggle('active');
   searchForm.classList.remove('active');
   shoppingCart.classList.remove('active');
   HomeIcon.classList.remove("active");
}

let HomeIcon = document.querySelector('.navbar')

document.querySelector('#three-icon').onclick = ()=>{
    HomeIcon.classList.toggle('active')
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove("active");
}

window.onscroll = ()=>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove("active");
    HomeIcon.classList.remove("active");
}

var swiper = new Swiper(".product-slidder", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });

var swiper = new Swiper(".review-slider", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });