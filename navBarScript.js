window.onscroll = function () {
    var navbar = document.getElementsByClassName('nav')[0];

    var sticky = navbar.offsetTop;

        console.log(sticky);
        if (window.pageYOffset > sticky) {
            navbar.classList.add("nav-stick");
        } else {
            navbar.classList.remove("nav-stick");
        }
};