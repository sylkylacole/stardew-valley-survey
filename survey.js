// const submitButton = document.getElementById("submit-button");
// const errorMessage = document.getElementById("error-message");
// const form = document.getElementById("form");
// const radioButtons = document.querySelectorAll('input[name="season"]')

// form.addEventListener("submit", (e) => {
//     let messages = []
//     if (!radioButtons.checked) {
//         messages.push("Please select a season.")
//     }

//     if (messages.length > 0) {
//         e.preventDefault()
//         errorMessage.innerText = messages.join(", ")
//     } 
    
//     if(messages.length === 0) {
//         window.alert("Sruvey sent!")
//         window.location.href = "done.html"
//     }
// })


const submitButton = document.getElementById("submit-button");
const errorMessage = document.getElementById("error-message");
const form = document.getElementById("form");
const radioButtons = document.querySelectorAll('input[name="season"]');

form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent default submission first

    let messages = [];
    let isSeasonSelected = false;

    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            isSeasonSelected = true;
            break; 
        }
    }

    if (!isSeasonSelected) {
        messages.push("Please select a season.");
    }

    if (messages.length > 0) {
        errorMessage.innerText = messages.join(", ");
    } else {
        window.alert("Survey sent!");
        window.location.href = "done.html";
    }
});