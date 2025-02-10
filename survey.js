const submitButton = document.getElementById("submit-button");
const errorMessage = document.getElementById("error-message");
const form = document.getElementById("form");
const seasonRadio = document.querySelectorAll('input[name="season"]');
const bachelorRadio = document.querySelectorAll('input[name="bachelor"]');
const bacheloretteRadio = document.querySelectorAll('input[name="bachelorette"]');
const overallRadio = document.querySelectorAll('input[name="overall"]');

form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent default submission first

    let messages = [];
    let isSeasonSelected = false;
    let isBachelorSelected = false;
    let isBacheloretteSelected = false;
    let isOverallSelected = false;

    for (let i = 0; i < seasonRadio.length; i++) {
        if (seasonRadio[i].checked) {
            isSeasonSelected = true;
            break;
        }
    }

    for (let i = 0; i < bachelorRadio.length; i++) {
        if (bachelorRadio[i].checked) {
            isBachelorSelected = true;
            break;
        }
    }

    for (let i = 0; i < bacheloretteRadio.length; i++) {
        if (bacheloretteRadio[i].checked) {
            isBacheloretteSelected = true;
            break;
        }
    }

    for (let i = 0; i < overallRadio.length; i++) {
        if (overallRadio[i].checked) {
            isOverallSelected = true;
            break;
        }
    }

    if (!isSeasonSelected || !isBachelorSelected || !isBacheloretteSelected || !isOverallSelected) {
        messages.push("Please complete the form.");
    }

    if (messages.length > 0) {
        errorMessage.innerText = messages.join(", ");
    } else {
        // window.alert("Survey sent!");
        // window.location.href = "done.html";
        console.log("Survey sent!")
    }
});