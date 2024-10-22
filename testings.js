const assert = require('assert');
const { Calculator } = require('./test');

// test.test.js

describe('Calculator', function() {
    describe('inputDigit', function() {
        it('should update displayValue with a single digit', function() {
            const calculator = new Calculator();
            calculator.inputDigit('5');
            assert.strictEqual(calculator.displayValue, '5');
        });

        it('should concatenate multiple digits', function() {
            const calculator = new Calculator();
            calculator.inputDigit('5');
            calculator.inputDigit('3');
            assert.strictEqual(calculator.displayValue, '53');
        });

        it('should replace displayValue if waitingForSecondOperand is true', function() {
            const calculator = new Calculator();
            calculator.inputDigit('5');
            calculator.handleOperator('+');
            calculator.inputDigit('3');
            assert.strictEqual(calculator.displayValue, '3');
            assert.strictEqual(calculator.waitingForSecondOperand, false);
        });

        it('should not concatenate digits if displayValue is "0"', function() {
            const calculator = new Calculator();
            calculator.inputDigit('0');
            calculator.inputDigit('5');
            assert.strictEqual(calculator.displayValue, '5');
        });
    });
});