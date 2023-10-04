$(function () {
    $("#header").load("../model/header.html", function () {
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

function myFunction(img) {
    var expandImg = document.getElementById("display-img");
    var imgContainers = document.querySelectorAll(".img-container");

    expandImg.src = img.src;

    // Remove the "active" class from all image containers
    imgContainers.forEach(function(container) {
        container.classList.remove("active");
    });

    // Add the "active" class to the clicked image's container
    img.parentElement.classList.add("active");
}
