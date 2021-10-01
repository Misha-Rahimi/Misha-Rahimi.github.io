window.onscroll = function () {
    var navbars = document.getElementsByClassName('nav');

    for (var i = 0; i < navbars.length; i++) {
        var navbar = navbars[i];
        var sticky = navbar.offsetTop;

        console.log(sticky);
        if (window.pageYOffset > sticky) {
            navbar.classList.add("nav-stick");
        } else {
            navbar.classList.remove("nav-stick");
        }
    }


};