document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Generate barcode
    JsBarcode("#barcode", email);

    // Create card element
    var cardContainer = document.getElementById("cardContainer");
    cardContainer.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h2>User Information</h2>
                <p>Email: ${email}</p>
                <p>Password: ${password}</p>
            </div>
            <svg id="barcode"></svg>
        </div>
    `;
});
