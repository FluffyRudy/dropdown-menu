let currentDropdown = null;
const has = Object.hasOwnProperty;
let currentDropDown = null;
const dropDownElems = {
    Home: ["Lorem", "Ipsum", "Dolor"],
    Donate: ["Lorem", "Ipsum", "Dolor"],
    About: ["Lorem", "Ipsum", "Dolor"],
    Contact: ["Lorem", "Ipsum", "Dolor"],
};

function createDropDown() {
    const navButtons = document.querySelectorAll("nav > ul > li > button");
    if (!navButtons) return;
    
    for (let elem of navButtons) {
        const buttonLabel = elem.textContent;
        const container = document.createElement("div");
        container.classList.add("invisible-menu")
        if (has.call(dropDownElems, buttonLabel)) {
            for (let label of dropDownElems[buttonLabel]) {
                const dropDownBtn = document.createElement("button");
                dropDownBtn.textContent = label;
                container.appendChild(dropDownBtn); 
            }
            elem.parentNode.appendChild(container);
        }
    }
}

function getDropDown(e) {
    return e.target.parentNode.querySelector("div");
} 

function displayDropdown(e) {
    const dropDown = getDropDown(e);
    if (!dropDown) return;
    if (currentDropDown && currentDropDown !== dropDown) {
        currentDropDown.classList.remove("visible-menu"); 
    }
    dropDown.classList.add("visible-menu");
    currentDropDown = dropDown; 
}

[...document.querySelectorAll("nav > ul > li > button")].forEach(elem => {
    elem.addEventListener('click', displayDropdown)
})

window.onload = (e) => {
    createDropDown(e);
}