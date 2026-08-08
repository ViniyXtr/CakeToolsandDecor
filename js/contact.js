document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contact-form");

    if (!form) {
        return;
    }


    /*
    =========================================================
    WHATSAPP NUMBER
    =========================================================
    */

    const whatsappNumber = "255773111836";


    /*
    =========================================================
    FORM ELEMENTS
    =========================================================
    */

    const nameInput = document.getElementById("name");
    const phoneInput = document.getElementById("phone");
    const productInput = document.getElementById("product");
    const messageInput = document.getElementById("message");


    /*
    =========================================================
    ERROR ELEMENTS
    =========================================================
    */

    const nameError = document.getElementById("name-error");
    const phoneError = document.getElementById("phone-error");
    const productError = document.getElementById("product-error");
    const messageError = document.getElementById("message-error");


    /*
    =========================================================
    HELPER FUNCTIONS
    =========================================================
    */

    function setError(input, errorElement, message) {

        input.classList.remove("valid");

        input.classList.add("invalid");

        errorElement.textContent = message;

    }


    function setValid(input, errorElement) {

        input.classList.remove("invalid");

        input.classList.add("valid");

        errorElement.textContent = "";

    }


    function clearValidation(input, errorElement) {

        input.classList.remove("invalid");

        input.classList.remove("valid");

        errorElement.textContent = "";

    }


    /*
    =========================================================
    VALIDATE NAME
    =========================================================
    */

    function validateName() {

        const name = nameInput.value.trim();

        if (name === "") {

            setError(
                nameInput,
                nameError,
                "Please enter your name."
            );

            return false;
        }


        if (name.length < 2) {

            setError(
                nameInput,
                nameError,
                "Name must contain at least 2 characters."
            );

            return false;
        }


        const namePattern = /^[A-Za-zÀ-ÿ\s'-]+$/;

        if (!namePattern.test(name)) {

            setError(
                nameInput,
                nameError,
                "Please enter a valid name."
            );

            return false;
        }


        setValid(nameInput, nameError);

        return true;
    }


    /*
    =========================================================
    VALIDATE PHONE
    =========================================================
    */

    function validatePhone() {

        const phone = phoneInput.value.trim();

        if (phone === "") {

            setError(
                phoneInput,
                phoneError,
                "Please enter your phone number."
            );

            return false;
        }


        /*
        Allows:

        255700000000
        +255700000000
        0700000000
        0712345678
        */

        const phonePattern = /^\+?[0-9\s()-]{9,16}$/;

        if (!phonePattern.test(phone)) {

            setError(
                phoneInput,
                phoneError,
                "Please enter a valid phone number."
            );

            return false;
        }


        setValid(phoneInput, phoneError);

        return true;
    }


    /*
    =========================================================
    VALIDATE PRODUCT
    =========================================================
    */

    function validateProduct() {

        const product = productInput.value.trim();

        if (product === "") {

            setError(
                productInput,
                productError,
                "Please enter the product you need."
            );

            return false;
        }


        if (product.length < 2) {

            setError(
                productInput,
                productError,
                "Please enter a valid product name."
            );

            return false;
        }


        setValid(productInput, productError);

        return true;
    }


    /*
    =========================================================
    VALIDATE MESSAGE
    =========================================================
    */

    function validateMessage() {

        const message = messageInput.value.trim();

        // Message is optional
        if (message === "") {

            clearValidation(messageInput, messageError);

            return true;
        }

        // If the user enters a message, require at least 10 characters
        if (message.length < 10) {

            setError(
                messageInput,
                messageError,
                "Message must contain at least 10 characters."
            );

            return false;
        }

        setValid(messageInput, messageError);

        return true;
    }

    /*
    =========================================================
    LIVE VALIDATION
    =========================================================
    */

    nameInput.addEventListener("input", validateName);

    phoneInput.addEventListener("input", validatePhone);

    productInput.addEventListener("input", validateProduct);

    messageInput.addEventListener("input", validateMessage);


    /*
    =========================================================
    FORM SUBMISSION
    =========================================================
    */

    form.addEventListener("submit", (event) => {

        event.preventDefault();


        /*
        Validate everything
        */

        const isNameValid = validateName();

        const isPhoneValid = validatePhone();

        const isProductValid = validateProduct();

        const isMessageValid = validateMessage();


        /*
        Stop if any field is invalid
        */

        if (
            !isNameValid ||
            !isPhoneValid ||
            !isProductValid ||
            !isMessageValid
        ) {

            return;
        }


        /*
        =====================================================
        GET FORM VALUES
        =====================================================
        */

        const name = nameInput.value.trim();

        const phone = phoneInput.value.trim();

        const product = productInput.value.trim();

        const message = messageInput.value.trim();


        /*
        =====================================================
        CREATE WHATSAPP MESSAGE
        =====================================================
        */

        const whatsappMessage =

            `Hello Cake Tools and Decor,

I would like to make an enquiry.

Name: ${name}

Phone: ${phone}

Product Needed: ${product}

Message:
${message}

Thank you.`;


        /*
        =====================================================
        ENCODE MESSAGE
        =====================================================
        */

        const encodedMessage =
            encodeURIComponent(whatsappMessage);


        /*
        =====================================================
        WHATSAPP URL
        =====================================================
        */

        const whatsappURL =
            `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;


        /*
        =====================================================
        OPEN WHATSAPP
        =====================================================
        */

        window.open(
            whatsappURL,
            "_blank"
        );

    });

});