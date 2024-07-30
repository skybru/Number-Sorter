const sortButton = document.getElementById("sort");
const sortInputArray = (event) => {
    event.preventDefault();
    const inputValues = [...document.getElementsByClassName("values-dropdown")].map((dropdown) => Number(dropdown.value)); //array con spread, implicit return senza graffe, Number() per fare il parse in numero 
};

const updateUI = (array = []) => {
    array.forEach((num, i) => {
        const outputValueNode = document.getElementById(`output-value-${i}`);
        outputValueNode.innerText = num;
    });
};

sortButton.addEventListener("click", sortInputArray);

