document.addEventListener(
    "DOMContentLoaded",
    () => {


        const menuToggle =
            document.getElementById("menu-toggle");


        const navLinks =
            document.getElementById("nav-links");


        const mobileClose =
            document.getElementById("mobile-close");


        const overlay =
            document.getElementById("menu-overlay");



        if (!menuToggle || !navLinks)
            return;




        function openMenu() {

            navLinks.classList.add("active");

            overlay.classList.add("active");

        }



        function closeMenu() {

            navLinks.classList.remove("active");

            overlay.classList.remove("active");

        }





        menuToggle.addEventListener(
            "click",
            openMenu
        );



        mobileClose.addEventListener(
            "click",
            closeMenu
        );



        overlay.addEventListener(
            "click",
            closeMenu
        );



        document
            .querySelectorAll(".nav-links a")
            .forEach(link => {

                link.addEventListener(
                    "click",
                    closeMenu
                );


            });


    });