// const submitButton = document.getElementById("submit-button");
// const errorMessage = document.getElementById("error-message");
// const form = document.getElementById("form");
// const seasonRadio = document.querySelectorAll('input[name="season"]');
// const bachelorRadio = document.querySelectorAll('input[name="bachelor"]');
// const bacheloretteRadio = document.querySelectorAll('input[name="bachelorette"]');
// const overallRadio = document.querySelectorAll('input[name="overall"]');

// form.addEventListener("submit", (e) => {
//     e.preventDefault(); // Prevent default submission first

//     let messages = [];
//     let isSeasonSelected = false;

//     for (let i = 0; i < seasonRadio.length; i++) {
//         if (seasonRadio[i].checked) {
//             isSeasonSelected = true;
//             break; 
//         }
//     }

//     if (!isSeasonSelected) {
//         messages.push("Please select a season.");
//     }

//     if (messages.length > 0) {
//         errorMessage.innerText = messages.join(", ");
//     } else {
//         window.alert("Survey sent!");
//         window.location.href = "done.html";
//     }
// });