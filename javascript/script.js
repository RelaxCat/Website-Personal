$(function () {
    $("#header").load("../model/header.html", function () {
        var currentPath = window.location.pathname;
        var currentPage = currentPath.substring(currentPath.lastIndexOf('/') + 1);
        currentPage = currentPage.replace(".html", "");
        $(".navbar-item").removeClass("active");

        // Add the "active" class to the current page's navbar item
        if (currentPage !== "") {
            document.getElementById(currentPage).classList.add("active");
        } else {
            // If it's the home page, make sure "Home" is not active
            document.getElementById("home").classList.remove("active");
        }
        const mobileMenuButton = document.getElementById('hamburger');
        console.log(mobileMenuButton);
        const mobileMenu = document.getElementById('mobile-menu');
        const overlay = document.getElementById('overlay');
        const closeMenuButton = document.getElementById('closebtn');

        mobileMenuButton.addEventListener('click', function () {
            console.log('Hamburger clicked');
            mobileMenu.classList.toggle('active');
            document.getElementById("mobile-menu").style.width = "40vw";
            overlay.style.display = mobileMenu.classList.contains('active') ? 'block' : 'none';
        });

        closeMenuButton.addEventListener('click', function () {
            mobileMenu.classList.remove('active');
            document.getElementById("mobile-menu").style.width = "0";
            overlay.style.display = 'none';
        });

    });
    
    $("#footer").load("../model/footer.html", function () {});

});
