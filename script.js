const sortButton = document.getElementById("sort");
const sortInputArray = (event) => {
    event.preventDefault();
    const inputValues = [...document.getElementsByClassName("values-dropdown")].map((dropdown) => Number(dropdown.value)); //array con spread, implicit return senza graffe, Number() per fare il parse in numero 
};



sortButton.addEventListener("click", sortInputArray);

