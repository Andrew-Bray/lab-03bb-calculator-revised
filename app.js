//ADDITION
const addInput1 = document.getElementById('add-input1');
const addInput2 = document.getElementById('add-input2');
const addButton = document.getElementById('add-button');
const addResult = document.getElementById('add-result');
const myHeader = document.getElementById('my-header');

addButton.addEventListener('click', () => {
   // myHeader.classList.remove('color-ani');
   myHeader.classList.replace('background-color', 'red');
    const value1 = addInput1.value;
    const value2 = addInput2.value;

    const addNum1 = Number(value1);
    const addNum2 = Number(value2);

    const sum = addNum1 + addNum2;
    console.log(sum);
    setTimeout(() => {
        addResult.textContent = sum;  
    }, 400);
   // myHeader.classList.add('color-ani');

}
)
//SUBTRACTION
const subInput1 = document.getElementById('sub-input1');
const subInput2 = document.getElementById('sub-input2');
const subButton = document.getElementById('sub-button');
const subResult = document.getElementById('sub-result');

subButton.addEventListener('click', () => {
    const value1 = subInput1.value;
    const value2 = subInput2.value;

    const subNum1 = Number(value1);
    const subNum2 = Number(value2);

    const dif = subNum1 - subNum2;
    console.log(dif);
    setTimeout(() => {
        subResult.textContent = dif;  
    }, 400);
}
)
// MULTIPLICATION
const multInput1 = document.getElementById('mult-input1');
const multInput2 = document.getElementById('mult-input2');
const multButton = document.getElementById('mult-button');
const multResult = document.getElementById('mult-result');

multButton.addEventListener('click', () => {
    const value1 = multInput1.value;
    const value2 = multInput2.value;

    const multNum1 = Number(value1);
    const multNum2 = Number(value2);

    const mult = multNum1 * multNum2;
    console.log(mult);
    setTimeout(() => {
        multResult.textContent = mult;  
    }, 400);
})

//DIVISION
const divInput1 = document.getElementById('div-input1');
const divInput2 = document.getElementById('div-input2');
const divButton = document.getElementById('div-button');
const divResult = document.getElementById('div-result');

divButton.addEventListener('click', () => {
    const value1 = divInput1.value;
    const value2 = divInput2.value;

    const divNum1 = Number(value1);
    const divNum2 = Number(value2);

    const div = divNum1 / divNum2;
    console.log(div);
    setTimeout(() => {
        divResult.textContent = div;  
    }, 400);
   
})