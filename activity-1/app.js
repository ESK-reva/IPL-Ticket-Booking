
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

    // Activity 5: Smooth scrolling
    let bookButtons = document.querySelectorAll(".book-btn");

    bookButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            document.getElementById("booking").scrollIntoView({
                behavior: "smooth"
            });

            showToast("Please fill in your booking details!");
        });
    });

    // Activity 7: Get form elements
    let matchSelect = document.getElementById("match");
    let categorySelect = document.getElementById("category");
    let quantityInput = document.getElementById("quantity");

    // Get summary elements
    let summaryMatch = document.getElementById("summaryMatch");
    let summaryVenue = document.getElementById("summaryVenue");
    let summaryCategory = document.getElementById("summaryCategory");
    let summaryPrice = document.getElementById("summaryPrice");
    let summaryQuantity = document.getElementById("summaryQuantity");
    let total = document.getElementById("total");

    // Match details
    let matches = {
        "1": { name: "CSK vs RCB", venue: "Chennai" },
        "2": { name: "MI vs KKR", venue: "Mumbai" },
        "3": { name: "RCB vs MI", venue: "Bengaluru" },
        "4": { name: "CSK vs KKR", venue: "Chennai" }
    };

    // Ticket prices
    let prices = {
        "General": 800,
        "Premium": 2000,
        "VIP": 5000
    };

    // Update booking summary
    function updateSummary() {

        let selectedMatch = matchSelect.value;
        let selectedCategory = categorySelect.value;
        let quantity = Number(quantityInput.value);

        if (quantity < 1 || quantity > 10 || !Number.isInteger(quantity)) {
            return;
        }

        let matchDetails = matches[selectedMatch];
        let price = prices[selectedCategory];
        let totalAmount = price * quantity;

        summaryMatch.innerText = matchDetails.name;
        summaryVenue.innerText = matchDetails.venue;
        summaryCategory.innerText = selectedCategory;
        summaryPrice.innerText = price;
        summaryQuantity.innerText = quantity;
        total.innerText = totalAmount;

        showToast("Booking summary updated!");
    }

    // Listen for changes
    matchSelect.addEventListener("change", updateSummary);
    categorySelect.addEventListener("change", updateSummary);
    quantityInput.addEventListener("input", updateSummary);

});
