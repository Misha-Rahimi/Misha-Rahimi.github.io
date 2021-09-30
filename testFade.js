window.addEventListener('load', function () {
    var fadeIns = document.getElementsByClassName("fade");

    for (var i = 0; i < fadeIns.length; i++) {
        fadeIns[i].addEventListener('click', function () {
            var bottom_of_object = fadeIns[i].offset().top + fadeIns[i].outerHeight();
            var bottom_of_window = window.scrollTop() + window.height();

            console.log("object: " + bottom_of_object + " window: " + bottom_of_window)
        })
    }
  })

