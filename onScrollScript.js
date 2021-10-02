window.onscroll = function () {
    var navbars = document.getElementsByClassName('nav');

    for (var i = 0; i < navbars.length; i++) {
        var navbar = navbars[i];
        var sticky = navbar.offsetTop;

        if (window.pageYOffset > sticky) {
            navbar.classList.add("nav-stick");
        } else {
            navbar.classList.remove("nav-stick");
        }
    }

    var fadeSections = document.getElementsByClassName('fade');

    for (var i = 0; i < fadeSections.length; i++) {
        var fade = fadeSections[i];
        var fadeTop = fade.offsetTop + 80;

        console.log(i)
        console.log(window.pageYOffset + window.innerHeight)
        console.log("fade top " + fadeTop)

        if (window.pageYOffset + window.innerHeight > fadeTop) {
            fade.classList.add("fade-active");
        } else {
            fade.classList.remove("fade-active");
        }
    }
};