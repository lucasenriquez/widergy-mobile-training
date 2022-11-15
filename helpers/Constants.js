export const NUMBERS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.']
export const OPERATORS = ['+', '/', '*']
export const BUTTONS = [['C', 'HIST', 'SAVE', '-'], ['7', '8','9','÷'], ['4', '5', '6', 'x'], ['1', '2', '3', '+'], ['.', '0', '⌫', '=']]

export const getResult = (input) => {
    let expression = OPERATORS.includes(input.slice(-1)) ? input.substr(0, input.length - 1) : input
    let result = new Function("return " + expression)
    if(['-Infinity', 'Infinity'].includes(result)){
      return 'Syntax Error';
    }
    return result;
}
