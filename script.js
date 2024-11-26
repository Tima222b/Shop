document.getElementsByClassName('fa-search')[0].addEventListener('click', function() {
document.getElementsByClassName('search-input')[0].focus();});



function menu() {
  var menu = document.getElementById("menu");

  if(menu.style.display == "block") {
    menu.style.display = "none";
  }

  else {
    menu.style.display = "block";
  }
}



document.addEventListener('DOMContentLoaded', function () {

const swiper1 = new Swiper('.swiper1', {
    
    loop: true,
  
    //Паганация
    pagination: {
      el: '.swiper-pagination1',
      clickable: true,
      type:'progressbar',
      


    },
  
    // Стрелки
      navigation: {
      nextEl: '.swiper-button-next1',
      prevEl: '.swiper-button-prev1',
    },
  
      //Полоса прокрутки
      scrollbar: {
        el: '.swiper-scrollbar1',
        draggable: true,
      },

      slidesPerView: 6,

      spaceBetween: 30,

      slidesPerGroup: 1,

      //centeredSlides: true,

      /*autoplay: {

        delay:3000,
        
      },*/

      breakpoints: {
        0: {
          slidesPerView:1,
        },

        300: {
          slidesPerView:2,
        },

        600: {
          slidesPerView:3,
        },

        900: {
          slidesPerView:4,
        },

        1200: {
          slidesPerView:5,
        },

        1400: {
          slidesPerView:6,
        },
      },

  });




  const swiper2 = new Swiper('.swiper2', {
    
    loop: true,
  
    //Паганация
    pagination: {
      el: '.swiper-pagination2',
      clickable: true,
      type:'progressbar',
      


    },
  
    // Стрелки
      navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    },
  
      //Полоса прокрутки
      scrollbar: {
        el: '.swiper-scrollbar2',
        draggable: true,
      },

      slidesPerView: 4,

      spaceBetween: 30,

      slidesPerGroup: 1,

      //centeredSlides: true,

      /*autoplay: {

        delay:3000,
        
      },*/

      breakpoints: {
        0: {
          slidesPerView:1,
        },

        400: {
          slidesPerView:2,
        },

        800: {
          slidesPerView:3,
        },

        1200: {
          slidesPerView:4,
        },

        
      },

  });




  const swiper3 = new Swiper('.swiper3', {
    
    loop: true,
  
    //Паганация
    pagination: {
      el: '.swiper-pagination3',
      clickable: true,
      type:'progressbar',
      


    },
  
    // Стрелки
      navigation: {
      nextEl: '.swiper-button-next3',
      prevEl: '.swiper-button-prev3',
    },
  
      //Полоса прокрутки
      scrollbar: {
        el: '.swiper-scrollbar3',
        draggable: true,
      },

      slidesPerView: 4,

      spaceBetween: 30,

      slidesPerGroup: 1,

      //centeredSlides: true,

      /*autoplay: {

        delay:3000,
        
      },*/

      breakpoints: {
        0: {
          slidesPerView:1,
        },

        400: {
          slidesPerView:2,
        },

        800: {
          slidesPerView:3,
        },

        1200: {
          slidesPerView:4,
        },

        
      },

  });





  const swiper4 = new Swiper('.swiper4', {
    
    loop: true,
  
    //Паганация
    pagination: {
      el: '.swiper-pagination4',
      clickable: true,
      type:'progressbar',
      


    },
  
    // Стрелки
      navigation: {
      nextEl: '.swiper-button-next4',
      prevEl: '.swiper-button-prev4',
    },
  
      //Полоса прокрутки
      scrollbar: {
        el: '.swiper-scrollbar4',
        draggable: true,
      },

      slidesPerView: 3,

      spaceBetween: 30,

      slidesPerGroup: 1,

      //centeredSlides: true,

      /*autoplay: {

        delay:3000,
        
      },*/

      breakpoints: {
        0: {
          slidesPerView:1,
        },

        400: {
          slidesPerView:2,
        },

        800: {
          slidesPerView:3,
        },

        

        
      },

  });




  






});




document.addEventListener("DOMContentLoaded", () => {
  const contents = document.querySelectorAll('.content');

  const showContent = () => {
      const triggerBottom = window.innerHeight / 5 * 4; // 80% высоты окна
      contents.forEach(content => {
          const contentTop = content.getBoundingClientRect().top;

          if (contentTop < triggerBottom) {
              content.classList.add('visible');
          } else {
              content.classList.remove('visible');
          }
      });
  };

  window.addEventListener('scroll', showContent);
  showContent(); // Запускаем при загрузке страницы
});