


/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
        // Add show-icon to show and hide menu icon
        toggle.classList.toggle('show-icon')
    })
 }
 
 showMenu('nav-toggle','nav-menu')
 
 /*=============== SHOW DROPDOWN MENU ===============*/
 const dropdownItems = document.querySelectorAll('.dropdown__item')
 
 // 1. Select each dropdown item
 dropdownItems.forEach((item) =>{
     const dropdownButton = item.querySelector('.dropdown__button') 
 
     // 2. Select each button click
     dropdownButton.addEventListener('click', () =>{
         // 7. Select the current show-dropdown class
         const showDropdown = document.querySelector('.show-dropdown')
         
         // 5. Call the toggleItem function
         toggleItem(item)
 
         // 8. Remove the show-dropdown class from other items
         if(showDropdown && showDropdown!== item){
             toggleItem(showDropdown)
         }
     })
 })
 
 // 3. Create a function to display the dropdown
 const toggleItem = (item) =>{
     // 3.1. Select each dropdown content
     const dropdownContainer = item.querySelector('.dropdown__container')
 
     // 6. If the same item contains the show-dropdown class, remove
     if(item.classList.contains('show-dropdown')){
         dropdownContainer.removeAttribute('style')
         item.classList.remove('show-dropdown')
     } else{
         // 4. Add the maximum height to the dropdown content and add the show-dropdown class
         dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px'
         item.classList.add('show-dropdown')
     }
 }
 
 /*=============== DELETE DROPDOWN STYLES ===============*/
 const mediaQuery = matchMedia('(min-width: 1118px)'),
       dropdownContainer = document.querySelectorAll('.dropdown__container')
 
 // Function to remove dropdown styles in mobile mode when browser resizes
 const removeStyle = () =>{
     // Validate if the media query reaches 1118px
     if(mediaQuery.matches){
         // Remove the dropdown container height style
         dropdownContainer.forEach((e) =>{
             e.removeAttribute('style')
         })
 
         // Remove the show-dropdown class from dropdown item
         dropdownItems.forEach((e) =>{
             e.classList.remove('show-dropdown')
         })
     }
 }
 
 addEventListener('resize', removeStyle)

 


 /*=============== Counter JS Starts ===============*/

 const counterUp = window.counterUp.default;

 const callback = (entries) => {
   entries.forEach((entry) => {
     const el = entry.target;
     if (entry.isIntersecting && !el.classList.contains('is-visible')) {
       counterUp(el, {
         duration: 2000,
         delay: 16,
       });
       el.classList.add('is-visible');
     }
   });
 };
 
 const elements = document.querySelectorAll('.counter');
 elements.forEach((el) => {
   const IO = new IntersectionObserver(callback, { threshold: 1 });
   IO.observe(el);
 });
 
  /*=============== Counter JS Ends ===============*/


// Swiper1

const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper(".mySwiper1", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
      }
    });
  



    var swiper = new Swiper(".mySwiper2", {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 30,
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination2",
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: ".swiper-button-nex",
            prevEl: ".swiper-button-pre"
            },
            breakpoints:{
            300:{
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            968: {
                slidesPerView: 4,
            },
            },
    });




      var swiper = new Swiper(".mySwiper3", {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 30,
        grabCursor: true,
        pagination: {
        //   el: ".swiper-pagination3",
          clickable: true,
          dynamicBullets: true,
        },
        navigation: {
            nextEl: ".swiper-button-nex-3",
            prevEl: ".swiper-button-pre-3"
          },
          breakpoints:{
            300:{
                slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            968: {
              slidesPerView: 4,
            },
          },
      });
