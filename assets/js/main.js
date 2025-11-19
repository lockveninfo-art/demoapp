/*
Template Name: CryptoLand - Crypto Currency Landing Page Template.
Author: GrayGrids
*/

(function () {
    //===== Prealoder

    window.onload = function () {
        window.setTimeout(fadeout, 500);
    }

    function fadeout() {
        document.querySelector('.preloader').style.opacity = '0';
        document.querySelector('.preloader').style.display = 'none';
    }


    /*=====================================
    Sticky
    ======================================= */
    window.onscroll = function () {
        var header_navbar = document.querySelector(".navbar-area");
        var sticky = header_navbar.offsetTop;
        var logo = document.querySelector('.navbar-brand img');

        // Preload both logo images to prevent flickering
        var normalLogo = new Image();
        normalLogo.src = '{{ asset("img/lg1.png") }}';
        var stickyLogo = new Image();
        stickyLogo.src = '{{ asset("img/lg2.png") }}'; // Make sure you have this file

        // if (window.pageYOffset > sticky) {
        //     header_navbar.classList.add("sticky");
        //     logo.src = stickyLogo.src; // Use different logo for sticky state
        // } else {
        //     header_navbar.classList.remove("sticky");
        //     logo.src = normalLogo.src; // Use original logo
        // }

        // Back to top button
        var backToTo = document.querySelector(".scroll-top");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            backToTo.style.display = "flex";
        } else {
            backToTo.style.display = "none";
        }
    };

    // WOW active
    new WOW().init();

    //===== mobile-menu-btn
    let navbarToggler = document.querySelector(".mobile-menu-btn");
    navbarToggler.addEventListener('click', function () {
        navbarToggler.classList.toggle("active");
    });


})();