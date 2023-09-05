// Like alert but not alert .This is Confirm
const areYouSerious = () => {
    const serious = confirm("Are you serious Student??")
    if (serious === true) {
        alert("Keep it Up")
    } else {
        console.log("Kopale dukkho ashe!!!");
    }
}

// This is Prompt
const yourName = () => {
const name = prompt("What's your Name???")
console.log(name);
}