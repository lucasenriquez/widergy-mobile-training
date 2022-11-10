export const NUMBERS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.']
export const OPERATORS = ['+', '-', '÷', 'x']
export const BUTTONS = [['C', 'HIST', '%', '÷'], ['7', '8','9','-'], ['4', '5', '6', 'x'], ['1', '2', '3', '+'], ['.', '0', '⌫', '=']]
export const HISTORY = []

export const getResult = (operation, value1, value2) => {
    const parsedValue1 = typeof value1 != 'string' ? value1 : value1.includes('.') ? parseFloat(value1) : parseInt(value1)
    const parsedValue2 = typeof value2 != 'string' ? value2 : value2.includes('.') ? parseFloat(value2) : parseInt(value2)

    switch (operation) {
        case '+':
            return parsedValue1 + parsedValue2
            break;
        case '-':
            return parsedValue1 - parsedValue2
            break;
        case 'x':
            return parsedValue1 * parsedValue2
            break;
        case '÷':
            if (parsedValue2 == 0){
                return 'Syntax Error'
            } else {
                return parsedValue1 / parsedValue2
            }
            break;
        default:
            return 0
            break;
    }
}
