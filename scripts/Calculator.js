const Operation = {
    NONE: 0,
    ADDITION: 1,
    SUBTRACTION: 2,
    MULTIPLICATION: 3,
    DIVISION: 4,
};
class Calculator {
    constructor(display) {
        this.operation = 0;
        this.numberA = 0;
        this.numberB = 0;
        this.value = '';
        this.display = display;
        this.clear();
    }
    clear() {
        this.operation = Operation.NONE;
        this.numberA = 0;
        this.numberB = NaN;
        this.value = '';
        this.display.setValue('0');
    }
    backspace() {
        this.value = this.value.slice(0, -1);
        if (this.value.length === 0) {
            this.display.setValue('0');
        }
        else {
            this.display.setValue(this.value);
        }
    }
    updateDisplay() {
        let numberToDisplay;
        if (isNaN(this.numberA)) {
            numberToDisplay = 0;
        }
        else if (isNaN(this.numberB)) {
            numberToDisplay = this.numberA;
        }
        else {
            numberToDisplay = this.numberB;
        }
        this.display.setValue(this.display.prepare(numberToDisplay));
    }
    calculate() {
        let numberA = this.numberA;
        const numberB = this.numberB;
        if (isNaN(numberA)
            || isNaN(numberB)) {
            this.value = '';
            return;
        }
        switch (this.operation) {
            case Operation.ADDITION:
                numberA += numberB;
                break;
            case Operation.SUBTRACTION:
                numberA -= numberB;
                break;
            case Operation.MULTIPLICATION:
                numberA *= numberB;
                break;
            case Operation.DIVISION:
                numberA /= numberB;
                break;
            case Operation.NONE:
                break;
            default:
                throw new Error('Unknown operation');
        }
        this.numberA = numberA;
        this.numberB = NaN;
        this.operation = Operation.NONE;
        this.value = '';
        this.updateDisplay();
    }
    addDigit(value) {
        if (!/^\d$/.test(value)) {
            throw new Error(`Incorrect number value "${value}".`);
        }
        if (!this.value
            && (this.operation === Operation.NONE)) {
            this.clear();
        }
        if (Number(this.value) === 0) {
            this.value = ((this.value[0] === '-') ? '-' : '') + value;
        }
        else {
            this.value += value;
        }
        this.display.setValue(this.value);
        if (this.operation === Operation.NONE) {
            this.numberA = Number(this.value);
        }
        else {
            this.numberB = Number(this.value);
        }
    }
    period() {
        if (this.value.indexOf('.') === -1) {
            this.value += ((this.value.length === 0)
                ? '0.'
                : '.');
            this.display.setValue(this.value);
        }
    }
    changeSign() {
        if (!this.value
            && this.numberA) {
            this.value = this.numberA.toString();
        }
        if (this.value[0] === '-') {
            this.value = this.value.substr(1);
        }
        else {
            this.value = '-' + this.value;
        }
        this.display.setValue(this.value);
        if (this.value === '-') {
            return;
        }
        if (this.operation === Operation.NONE) {
            this.numberA = Number(this.value);
        }
        else {
            this.numberB = Number(this.value);
        }
    }
    squareRoot() {
        this.calculate();
        this.numberA = Math.sqrt(this.numberA);
        this.updateDisplay();
    }
    addition() {
        this.calculate();
        this.operation = Operation.ADDITION;
    }
    subtraction() {
        this.calculate();
        this.operation = Operation.SUBTRACTION;
    }
    multiplication() {
        this.calculate();
        this.operation = Operation.MULTIPLICATION;
    }
    division() {
        this.calculate();
        this.operation = Operation.DIVISION;
    }
}
export { Calculator as default, };
//# sourceMappingURL=Calculator.js.map