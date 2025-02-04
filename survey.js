submitButton = document.getElementById("submit-button");
errorMessage = document.getElementById("error-message");

submitButton.addEventListener("click", function() {
    event.preventDefault();
    // If submit button is clicked, check and make sure each radio has an input; if it does, pass the above code. if it doesn't, show an error message
    let isValid = false;
    const radioButtons = document.querySelectorAll('input[name="season"]');
    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            isValid = true;
            // window.alert("Survey sent!");
            // window.location.href = "done.html";
            break;
        }
    }

    if (!isValid) {
        alert("Please select a season.");
    }

    return isValid;

});