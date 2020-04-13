"use strict";
// @ts-check
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Calculator_js_1 = __importDefault(require("./Calculator.js"));
const Controls_js_1 = __importDefault(require("./Controls.js"));
const Display_js_1 = __importDefault(require("./Display.js"));
main();
function main() {
    const outputElement = document.getElementById('display');
    const display = new Display_js_1.default(outputElement);
    const calculator = new Calculator_js_1.default(display);
    const buttons = document.querySelectorAll('div.buttons>button');
    new Controls_js_1.default(calculator, buttons);
}
//# sourceMappingURL=index.js.map