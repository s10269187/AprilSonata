document.addEventListener("DOMContentLoaded", function () {
    const APIKEY = "";
    const API_URL = "";

    function addEventListenersForModal(formId, quantityId, nameId, priceId, totalID, emailID) {
        const form = document.getElementById(formId);
        const quantityInput = document.getElementById(quantityId);
        const nameInput = document.getElementById(nameId);
        const priceInput = document.getElementById(priceId);
        const totalPriceInput = document.getElementById(totalID);
        const emailInput = document.getElementById(emailID);

        // Get user email from sessionStorage
        const user = JSON.parse(sessionStorage.getItem("user"));
        if (user) {
            emailInput.value = user.Email; 
        }

        form.querySelector(".btn-outline-secondary:first-of-type").addEventListener("click", function () {
            if (parseInt(quantityInput.value) > 1) {
                quantityInput.value = parseInt(quantityInput.value) - 1;
            }
        });

        form.querySelector(".btn-outline-secondary:last-of-type").addEventListener("click", function () {
            quantityInput.value = parseInt(quantityInput.value) + 1;
        });

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const itemName = nameInput.value;
            const quantity = parseInt(quantityInput.value);
            const itemPrice = parseFloat(priceInput.value);
            const totalPrice = (quantity * itemPrice).toFixed(2);
            const userEmail = emailInput.value;


            fetch(`${API_URL}?q={"Name":"${itemName}", "Email":"${userEmail}"}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "x-apikey": APIKEY,
                    "Cache-Control": "no-cache",
                },
            })
                .then(response => response.json())
                .then(data => {
                    if (data.length > 0) {
                        alert("This item is already in your cart!");
                    } else {
                        const jsonData = {
                            Name: itemName,
                            Quantity: quantity,
                            Price: itemPrice.toFixed(2),
                            Total_Price: totalPrice,
                            Email: userEmail 
                        };

                        fetch(API_URL, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                "x-apikey": APIKEY,
                                "Cache-Control": "no-cache",
                            },
                            body: JSON.stringify(jsonData),
                        })
                            .then(response => response.json())
                            .then(() => {
                                alert("Item added to cart successfully!");
                                form.reset();
                                quantityInput.value = 1;
                            })
                            .catch(() => {
                                alert("Error adding item to the cart. Please try again.");
                            });
                    }
                })
                .catch(() => {
                    alert("Error checking cart. Please try again.");
                });
        });
    }
});
