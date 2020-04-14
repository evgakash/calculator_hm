class Display {
    constructor(output) {
        this.output = output;
    }
    setValue(value) {
        this.output.textContent = value;
    }
    prepare(number) {
        return number.toPrecision(11)
            .replace(/(?:\.0*|(\.\d+?)0*)$/, '$1');
    }
}
export { Display as default, };
//# sourceMappingURL=Display.js.map