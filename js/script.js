// invite button
const addGuestButton = document.querySelector(".invite");

addGuestButton.addEventListener("click", function(){
    const guest = guestInput.value;
    // console.log (guest);
    if (guest !== " ") {
        addToList(guest);
    }
    clearInput();
    updateGuestCount();
});

const clearInput = function() {
    guestInput.value = " ";
};

const addToList = function (guest){
    const listItem = document.createElement("li");
    listItem.innerText = guest; 
    guestList.append(listItem); 
};

// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");


const updateGuestCount = function (){
    let guests = document.querySelectorAll(".guest-list li");
    guestCount.innerText = guests.length; 
    if (guests.length === 8) {
        addGuestButton.classList.add("hide");
        guestInputLabel.classList.add("hide");
        guestFull.classList.remove("hide");
    }
};
