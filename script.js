/*
    Calculadora Premium con Conversión de Divisas
    Autor: Antigravity
*/

// --- Elementos del DOM ---
const previousOperandTextElement = document.getElementById('previous-operand');
const currentOperandTextElement = document.getElementById('current-operand');
const conversionDisplay = document.getElementById('conversion-display');

const keys = document.querySelectorAll('[data-number], [data-operation], [data-action]');
const btnToggleCurrency = document.getElementById('btn-toggle-currency');
const labelFrom = document.getElementById('label-from');
const labelTo = document.getElementById('label-to');

// Modal de Tasa
const btnRate = document.getElementById('btn-rate');
const currentRateDisplay = document.getElementById('current-rate-display');
const rateModal = document.getElementById('rate-modal');
const btnCancelRate = document.getElementById('btn-cancel-rate');
const btnSaveRate = document.getElementById('btn-save-rate');
const rateInput = document.getElementById('rate-input');

// --- Estado de la App ---
class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
        this.exchangeRate = parseFloat(localStorage.getItem('exchangeRate')) || 40.00; // Valor por defecto o guardado
        this.isUsdToVes = true; // true = USD -> VES, false = VES -> USD
    }

    clear() {
        this.currentOperand = '0';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete() {
        if (this.currentOperand === '0') return;

        if (this.currentOperand.length === 1) {
            this.currentOperand = '0';
        } else {
            this.currentOperand = this.currentOperand.toString().slice(0, -1);
        }
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return;
        if (this.currentOperand === '0' && number !== '.') {
            this.currentOperand = number.toString();
        } else {
            this.currentOperand = this.currentOperand.toString() + number.toString();
        }
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return;
        if (this.previousOperand !== '') {
            this.calculate();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '0'; // Se muestra 0 temporalmente hasta escribir el nuevo numero
    }

    calculate() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return;

        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '×':
                computation = prev * current;
                break;
            case '÷':
                if (current === 0) {
                    alert('No se puede dividir por cero');
                    return;
                }
                computation = prev / current;
                break;
            default:
                return;
        }

        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
    }

    percent() {
        const current = parseFloat(this.currentOperand);
        if (isNaN(current)) return;
        this.currentOperand = current / 100;
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];

        let integerDisplay;
        if (isNaN(integerDigits)) {
            integerDisplay = '';
        } else {
            integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 });
        }

        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`;
        } else {
            return integerDisplay;
        }
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand);
        if (this.operation != null) {
            this.previousOperandTextElement.innerText =
                `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
        } else {
            this.previousOperandTextElement.innerText = '';
        }

        // Actualizar conversión
        this.updateConversion();
        // Actualizar etiqueta de tasa en header
        currentRateDisplay.innerText = `Tasa: ${this.exchangeRate.toFixed(2)}`;
    }

    updateConversion() {
        const value = parseFloat(this.currentOperand);
        if (isNaN(value)) {
            conversionDisplay.innerText = '≈ 0.00';
            return;
        }

        let result;
        let symbol;

        if (this.isUsdToVes) {
            // USD -> VES
            result = value * this.exchangeRate;
            symbol = 'Bs';
        } else {
            // VES -> USD
            result = value / this.exchangeRate;
            symbol = '$';
        }

        // Formato de moneda
        conversionDisplay.innerText = `≈ ${result.toLocaleString('es-VE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ${symbol}`;
    }

    // Funciones específicas de la app
    toggleCurrency() {
        this.isUsdToVes = !this.isUsdToVes;

        // Animación simple de texto
        if (this.isUsdToVes) {
            labelFrom.innerText = 'USD';
            labelTo.innerText = 'VES';
        } else {
            labelFrom.innerText = 'VES';
            labelTo.innerText = 'USD';
        }

        this.updateDisplay();
    }

    setRate(newRate) {
        if (!isNaN(newRate) && newRate > 0) {
            this.exchangeRate = newRate;
            localStorage.setItem('exchangeRate', newRate);
            this.updateDisplay();
            return true;
        }
        return false;
    }
}

// --- Inicialización ---
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);
calculator.updateDisplay();

// --- API Fetch Function ---
async function fetchExchangeRate() {
    const apiURL = 'https://ve.dolarapi.com/v1/dolares/oficial';

    try {
        currentRateDisplay.innerHTML = '<i class="fa-solid fa-sync fa-spin"></i> Cargando...';

        const response = await fetch(apiURL);
        if (!response.ok) throw new Error('Error en la red');

        const data = await response.json();

        if (data && data.promedio) {
            const newRate = parseFloat(data.promedio);
            calculator.setRate(newRate);

            // Format date
            const date = new Date(data.fechaActualizacion);
            const dateStr = date.toLocaleDateString('es-VE', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });

            console.log(`Tasa actualizada: ${newRate} (Fecha: ${dateStr})`);

            // Mostrar notificación visual discreta (opcional) o actualizar el título del botón
            currentRateDisplay.innerHTML = `Tasa: ${newRate.toFixed(2)}`;
            calculator.updateDisplay();
        }
    } catch (error) {
        console.error('No se pudo obtener la tasa:', error);
        currentRateDisplay.innerHTML = `Tasa: ${calculator.exchangeRate.toFixed(2)} (Offline)`;
    }
}

// Llamar a la API al iniciar
document.addEventListener('DOMContentLoaded', () => {
    fetchExchangeRate();
});

// --- Event Listeners ---

// Botones del teclado
keys.forEach(button => {
    button.addEventListener('click', () => {
        const { number, operation, action } = button.dataset;

        if (number) {
            if (calculator.justCalculated) {
                calculator.currentOperand = '0';
                calculator.justCalculated = false;
            }
            calculator.appendNumber(number);
            calculator.updateDisplay();
        }

        if (operation) {
            calculator.chooseOperation(operation);
            calculator.updateDisplay();
            calculator.justCalculated = false;
        }

        if (action === 'clear') {
            calculator.clear();
            calculator.updateDisplay();
        }

        if (action === 'delete') {
            calculator.delete();
            calculator.updateDisplay();
        }

        if (action === 'calculate') {
            calculator.calculate();
            calculator.justCalculated = true; // Flag para indicar que acabamos de obtener un resultado
            calculator.updateDisplay();
        }

        if (action === 'percent') {
            calculator.percent();
            calculator.updateDisplay();
        }
    });
});

// Toggle Divisa
btnToggleCurrency.addEventListener('click', () => {
    calculator.toggleCurrency();
});

// Modal Tasa (Permite sobrescribir la tasa de la API si el usuario quiere)
btnRate.addEventListener('click', () => {
    rateInput.value = calculator.exchangeRate;
    rateModal.classList.add('show');
});

btnCancelRate.addEventListener('click', () => {
    rateModal.classList.remove('show');
});

btnSaveRate.addEventListener('click', () => {
    const newRate = parseFloat(rateInput.value);
    if (calculator.setRate(newRate)) {
        rateModal.classList.remove('show');
        // Indicar que es manual
        currentRateDisplay.innerHTML = `Tasa: ${newRate.toFixed(2)} (Manual)`;
    } else {
        alert("Por favor ingrese una tasa válida mayor a 0.");
    }
});

// Cerrar modal al hacer click fuera
window.addEventListener('click', (e) => {
    if (e.target === rateModal) {
        rateModal.classList.remove('show');
    }
});
