// import functions and grab DOM elements
const addInput1 = document.getElementById('add-input1');
const addInput2 = document.getElementById('add-input2');
const addButton = document.getElementById('add-button');
const sumResult = document.getElementById('sum-result');
// initialize state

// set event listeners to update state and DOM
addButton.addEventListener('click', () => {
    const value1 = addInput1.value;
    const value2 = addInput2.value;

    const sumNum1 = Number(value1);
    const sumNum2 = Number(value2);

    const sum = sumNum1 + sumNum2;
    sumResult.textContent = sum;
    console.log(sum);
}
)
