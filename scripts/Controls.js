class Controls {
    constructor(calculator, buttons) {
        this.calculator = calculator;
        this.buttons = buttons;
        const onButtonClick = (event) => {
            const target = event.target;
            const action = target.dataset.action;
            const value = target.dataset.value;
            this.doAction(action, value);
        };
        for (const button of buttons) {
            button.addEventListener('click', onButtonClick);
        }
    }
    doAction(action, value) {
        switch (action) {
            case 'addition':
                this.calculator.addition();
                break;
            case 'subtraction':
                this.calculator.subtraction();
                break;
            case 'multiplication':
                this.calculator.multiplication();
                break;
            case 'division':
                this.calculator.division();
                break;
            case 'square-root':
                this.calculator.squareRoot();
                break;
            case 'digit':
                if (!value) {
                    throw new Error('Digit action should be with value');
                }
                this.calculator.addDigit(value);
                break;
            case 'period':
                this.calculator.period();
                break;
            case 'change-sign':
                this.calculator.changeSign();
                break;
            case 'calculate':
                this.calculator.calculate();
                break;
            case 'backspace':
                this.calculator.backspace();
                break;
            case 'clear':
                this.calculator.clear();
                break;
            default:
                throw new Error('Unknown action');
        }
    }
}
export { Controls as default, };
//# sourceMappingURL=Controls.js.map