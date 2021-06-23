$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $(".header-1").addClass("nav-color");
        } else {
            $(".header-1").removeClass("nav-color");
        }
    });

    // Daisy Plugin
    $('#home').daisyjs({
        dotColor: '#fff',
        lineColor: '#fff'
    });

    // Typed.js
    var typed = new Typed('#typed', {
        strings: [
            "WEB DEVELOPER",
            "WEB DESIGNER",
            "DIGITAL MARKETER",
            "PROGRAMMER"
        ],
        typeSpeed: 80,
        backSpeed: 50,
        loop: true
    });

    // Mixitup Plugin
    var mixer = mixitup('.portfolio-box');

    // Form validation
    'use strict'
    var forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms)
    .forEach(function (form) {
        form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }
        form.classList.add('was-validated')
        }, false)
    })
});