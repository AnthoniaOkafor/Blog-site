const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navLink = document.querySelector(".navLink")

//when burger is clicked, change the class 'navLink' to 'navActive'

    burger.addEventListener ("click", () => {
        navLink.classList.toggle("navActive");
});
};



navSlide();