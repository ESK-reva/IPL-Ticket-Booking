
document.addEventListener("DOMContentLoaded", function () {

    // Toast notification function
    function showToast(message) {
        let toast = document.createElement("div");

        toast.innerText = message;
        toast.className = "toast";

        document.body.appendChild(toast);

        setTimeout(function () {
            toast.remove();
        }, 3000);
    }

    // Select all Book buttons
    let bookButtons = document.querySelectorAll(".book-btn");

    bookButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            // Scroll to booking section
            document.getElementById("booking").scrollIntoView({
                behavior: "smooth"
            });

            showToast("Please fill in your booking details!");
        });

    });

});
