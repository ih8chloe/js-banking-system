document.addEventListener("DOMContentLoaded", function () {
    
    const form = document.getElementById("accountDetails");
    const accountNo = document.getElementById("accountNo");

    form.addEventListener("submit", function (event) {
        
        event.preventDefault();

        window.location.href = "pin.html";

    });
});