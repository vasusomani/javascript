// export statement
export function addition(a, b) {
    return a + b;
}

function multiplication(a, b) {
    return a * b;
}

function subtraction(a, b) {
    return a - b;
}

function division(a, b) {
    return a / b;
}

//default export {Possible only 1 per file}
export default function remainder(a, b) {
    return a % b;
}

export const NAME = "Vasu Somani";

export {
    subtraction,
    multiplication as mul //rename export
}