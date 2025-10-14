var swiper = new Swiper(".mySwiper", {
   slidesPerView: 3,          // عدد الصور اللي تظهر في نفس الوقت
   spaceBetween: 30,          // المسافة بين الصور
   loop: true,                // تشغيل التكرار
   autoplay: {
      delay: 3000,             // الوقت بين كل تبديل (3 ثواني)
      disableOnInteraction: false,
   },
   navigation: {
      nextEl: ".custom-button-next",
      prevEl: ".custom-button-prev",
   },
   pagination: {
      el: ".swiper-pagination", // النقاط تحت السلايدر (اختياري)
      clickable: true,
   },
   breakpoints: {
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
      480: { slidesPerView: 1 },
   },
});