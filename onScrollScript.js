window.onscroll = function () {
    var navbars = document.getElementsByClassName('nav')
    var metaTag = document.getElementsByClassName('theme-tag')[0]

    for (var i = 0; i < navbars.length; i++) {
        var navbar = navbars[i]
        var sticky = navbar.offsetTop

        // alert(`${window.pageYOffset} ${sticky}`)
        // alert(window.pageYOffset > sticky)
        // alert(window.pageYOffset == 0)
        if (window.pageYOffset == 0) {
            metaTag.content = '#2579cc'
            navbar.classList.remove('nav-stick')
        } else {
            metaTag.content = '#000000'
            navbar.classList.add('nav-stick')
        }
    }

    var fadeSections = document.getElementsByClassName('fade')

    for (var i = 0; i < fadeSections.length; i++) {
        var fade = fadeSections[i]
        var fadeTop = fade.offsetTop + 80

        console.log(i)
        console.log(window.pageYOffset + window.innerHeight)
        console.log('fade top ' + fadeTop)

        if (window.pageYOffset + window.innerHeight > fadeTop) {
            fade.classList.add('fade-active')
        } else {
            fade.classList.remove('fade-active')
        }
    }
}

// window.addEventListener('load', (event) => {
//     var node = document.getElementById('d-b')

//     domtoimage
//         .toJpeg(document.getElementById('my-node'), { quality: 0.95 })
//         .then(function (dataUrl) {
//             var link = document.createElement('a')
//             link.download = 'my-image-name.jpeg'
//             link.href = dataUrl
//             link.click()
//         })
// })
