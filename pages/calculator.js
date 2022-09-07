// JS code for calculator # 1 
 const weightAmountInput = document.querySelector(".weight-amount");
 const numRepsInput = document.querySelector(".numreps");
 const perceivedRPEInput = document.querySelector(".perceivedRPE");

 const calculatedMaxValue = document.querySelector(".calculated-max .value");

 const calculateBtn = document.querySelector(".calculate-btn");

 let weightAmount = parseFloat(weightAmountInput.value);
 let numReps = parseFloat(numRepsInput.value);
 let perceivedRpe = parseFloat(perceivedRPEInput.value);


let rpehashmap10 = new Map([
    //  Coorelates to RPE = 10
    [10, 0.74],[9, 0.76],[8, 0.79],[7, 0.81],[6, 0.84],[5, 0.86],[4, 0.89],[3, 0.92],[2, 0.96],[1, 1.0]
])

let rpehashmap95 = new Map([
    //  Coorelates to RPE = 9.5
    [10, 0.72],[9, 0.75],[8, 0.77],[7, 0.80],[6, 0.82],[5, 0.85],[4, 0.88],[3, 0.91],[2, 0.94],[1, 0.98]
])

let rpehashmap9 = new Map([
    //  Coorelates to RPE = 9
    [10, 0.71],[9, 0.74],[8, 0.76],[7, 0.79],[6, 0.81],[5, 0.84],[4, 0.86],[3, 0.89],[2, 0.92],[1, 0.96]
])

let rpehashmap85 = new Map([
    //  Coorelates to RPE = 8.5
    [10, 0.69],[9, 0.72],[8, 0.75],[7, 0.77],[6, 0.80],[5, 0.82],[4, 0.85],[3, 0.88],[2, 0.91],[1, 0.94]
])

let rpehashmap8 = new Map([
    //  Coorelates to RPE = 8
    [10, 0.68],[9, 0.71],[8, 0.74],[7, 0.76],[6, 0.89],[5, 0.81],[4, 0.84],[3, 0.86],[2, 0.89],[1, 0.92]
]);

let rpehashmap75 = new Map([
    //  Coorelates to RPE = 7.5
    [10, 0.67],[9, 0.69],[8, 0.72],[7, 0.75],[6, 0.77],[5, 0.80],[4, 0.82],[3, 0.85],[2, 0.88],[1, 0.91]
]);

let rpehashmap7 = new Map([
    //  Coorelates to RPE = 7
    [10, 0.65],[9, 0.68],[8, 0.71],[7, 0.74],[6, 0.76],[5, 0.79],[4, 0.81],[3, 0.84],[2, 0.86],[1, 0.89]
]);

let rpehashmap65 = new Map([
    //  Coorelates to RPE = 6.5
    [10, 0.64],[9, 0.67],[8, 0.69],[7, 0.72],[6, 0.75],[5, 0.77],[4, 0.80],[3, 0.82],[2, 0.85],[1, 0.88]
]);


const calculateMax = () => {
    if (perceivedRpe == 10) {
        max = weightAmount / rpehashmap10.get(numReps) 
    } else if (perceivedRpe == 9.5) {
        max = weightAmount / rpehashmap95.get(numReps)
    } else if (perceivedRpe == 9) {
        max = weightAmount / rpehashmap9.get(numReps)
    } else if (perceivedRpe == 8.5) {
        max = weightAmount / rpehashmap85.get(numReps)
    } else if (perceivedRpe == 8) {
        max = weightAmount / rpehashmap8.get(numReps)
    } else if (perceivedRpe == 7.5) {
        max = weightAmount / rpehashmap75.get(numReps)
    } else if (perceivedRpe == 7) {
        max = weightAmount / rpehashmap7.get(numReps)
    } else if (perceivedRpe == 6.5) {
        max = weightAmount / rpehashmap65.get(numReps)
    }
    return max;
};

const updateData = (max) => {
    calculatedMaxValue.innerHTML = Math.round(max);
};

const refreshInputValues = () => {
    weightAmount = parseFloat(weightAmountInput.value);
    numReps = parseFloat(numRepsInput.value);
    perceivedRpe = parseFloat(perceivedRPEInput.value);
}


// JS code for Calculator #2 (bottom)
const oneRepMaxInput = document.querySelector(".your-one-rep-max");
const desiredRepsInput = document.querySelector(".desired-numreps");
const desiredRpeInput = document.querySelector(".desiredRPE");

const calculatedOutput2 = document.querySelector(".calculated-weight-to-use .value");

const calculateBtn2 = document.querySelector(".calculate-btn2");

let oneRepMax = parseFloat(oneRepMaxInput.value);
let desiredReps = parseFloat(desiredRepsInput.value);
let desiredRpe2 = parseFloat(desiredRpeInput.value);

const calculateOutputWeight = () => {
    if (desiredRpe2 == 10) {
        output2 = rpehashmap10.get(desiredReps) * oneRepMax
    } else if (desiredRpe2 == 9.5) {
        output2 = rpehashmap95.get(desiredReps) * oneRepMax
    } else if (desiredRpe2 == 9) {
        output2 = rpehashmap9.get(desiredReps) * oneRepMax
    } else if (desiredRpe2 == 8.5) {
        output2 = rpehashmap85.get(desiredReps) * oneRepMax
    } else if (desiredRpe2 == 8) {
        output2 = rpehashmap8.get(desiredReps) * oneRepMax
    } else if (desiredRpe2 == 7.5) {
        output2 = rpehashmap75.get(desiredReps) * oneRepMax
    } else if (desiredRpe2 == 7) {
        output2 = rpehashmap7.get(desiredReps) * oneRepMax
    } else if (desiredRpe2 == 6.5) {
        output2 = rpehashmap65.get(desiredReps) * oneRepMax
    }
    return output2;
};

const updateData2 = (output2) => {
    calculatedOutput2.innerHTML = Math.round(output2);
};

const refreshInputValues2 = () => {
    oneRepMax = parseFloat(oneRepMaxInput.value);
    desiredReps = parseFloat(desiredRepsInput.value);
    desiredRpe2 = parseFloat(desiredRepsInput.value);
}

const init = () => {
    refreshInputValues();
    let max = calculateMax();
    updateData(max);

    refreshInputValues2();
    let output2 = calculateOutputWeight();
    updateData2(output2);
}

init;

calculateBtn.addEventListener("click", init);
calculateBtn2.addEventListener("click", init);

