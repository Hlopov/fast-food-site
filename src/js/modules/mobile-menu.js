const mobileMenu =() =>{
  const navSlide = () => {
    const burger = document.querySelector(".burger-button");
    const nav = document.querySelector(".mobile-menu");
    const navLinks = document.querySelectorAll(".mobile-menu__item");
    
    burger.addEventListener("click", () => {
      burger.classList.toggle("fixed");
      nav.classList.toggle("is-open");

      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.5
          }s `;
        }
      });
    });
    //
  };
  navSlide();    
}

export default mobileMenu