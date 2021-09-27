window.addEventListener("load", function() {
    var tabs = document.getElementsByClassName("tab");
    var tabContent = document.getElementsByClassName("tabContent");
    console.log(tabs)
    console.log(tabContent)
    tabs[0].addEventListener("click", function() {
        tabContent[0].classList.remove("tab-hide");
        tabContent[1].classList.add("tab-hide");
    });
    tabs[1].addEventListener("click", function() {
        tabContent[0].classList.add("tab-hide");
        tabContent[1].classList.remove("tab-hide");
    });
})