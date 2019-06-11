$(document).ready(function () {
    start();
});

function start() {
    let mobileMenuButton = $(".mobile-menu-button");
    let navBarEl = $(".nav-bar");
    let topLine = $(".line--top");
    let centerLineEl = $(".line--center");
    let bottomLine = $(".line--bottom");


    mobileMenuButton.on("click", function (evt) {
        evt.preventDefault();
        // evt.stopPropagation();
        //Showing the menu
        navBarEl.slideToggle();

        //Animation
        if (centerLineEl.hasClass("visible")) {

            navBarEl.css("display", "block");
            centerLineEl
                .removeClass("visible")
                .css("display", "none");

            topLine
                .css("transform", "rotate(45deg)")
                .css("margin-bottom", "0");
            bottomLine
                .css("bottom", ".5rem")
                .css("transform", "rotate(-45deg)")
                .css("position", "relative")
                .css("bottom", ".5rem")
        } else {

            navBarEl.css("display", "block");

            topLine
                .css("transform", "rotate(0)")
                .css("margin-bottom", "1.4rem");

            bottomLine
                .css("transform", "rotate(0)")
                .css("bottom", "0");
            setTimeout(function () {
                centerLineEl
                    .addClass("visible")
                    .css("display", "block");
            }, 300);
        }
    });

    //Sliding to section on link click
    let allLinks = $(".js-nav-bar__item--link");
    console.log(allLinks);
    allLinks.on("click", function (evt) {
        evt.preventDefault();
        evt.stopPropagation();

        let targetElement = $(evt.target).attr("href");
        // console.log(targetElement);
        let targetPosition = $(targetElement).offset().top;

        $("html, body").animate({scrollTop: targetPosition}, "slow");
    });

//
    const aboutMeSectionEl = $("#about-me");
    const aboutMeSectionElTopPossition = aboutMeSectionEl.offset().top;

    $(window).on("scroll", fixedNav);
    //
    function fixedNav() {

        const body = $("body");

        if ($(window).scrollTop() >= aboutMeSectionElTopPossition) {
            
            $("nav").addClass("add-fixed-nav");
            
        }  else {
            $("nav").removeClass("add-fixed-nav");
        }
    }
}