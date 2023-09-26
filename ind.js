const numberButtons=document.querySelectorall('[data-number]')
const operationsButtons=document.querySelectorall('[data-operation]')
const equalbutton=document.querySelectorall('[data-equals]')
const deletebutton=document.querySelectorall('[data-delete]')
const allclearbutton=document.querySelectorall('[data-all-clear]')
const previousoperandtextElement=document.querySelectorall('[data-previous-operand]')
const currentoperandtextElement=document.querySelectorall('[data-current-operand]')
class calculator{
    constructor(previousoperandtextElement,currentoperandtextElement)
    {this.previousoperandtextElement=previousoperandtextElement
     this.currentoperandtextElement=currentoperandtextElement
     this.clear()   
}}
clear()
{
  this.currentOperand = ''
  this.previousOperand = ''
  this.operation = undefined
}
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})
appendNumber(number)
 {
  if (number === '.' && this.currentOperand.includes('.')) return
  this.currentOperand = this.currentOperand.toString() + number.toString()
 }
 operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })
})
chooseOperation(operation) 
{
  if (this.currentOperand === '') return
  if (this.previousOperand !== '') {
    this.compute()
  }
  this.operation = operation
  this.previousOperand = this.currentOperand
  this.currentOperand = ''
}
equalsButton.addEventListener('click', button => {
  calculator.compute()
  calculator.updateDisplay()
})
compute()
 {
  let computation
  const prev = parseFloat(this.previousOperand)
  const current = parseFloat(this.currentOperand)
  if (isNaN(prev) || isNaN(current)) return
  switch (this.operation) {
    case '+':
      computation = prev + current
      break
    case '-':
      computation = prev - current
      break
    case '*':
      computation = prev * current
      break
    case '÷':
      computation = prev / current
      break
    default:
      return
  }
  this.currentOperand = computation
  this.operation = undefined
  this.previousOperand = ''
}
allClearButton.addEventListener('click', button => {
  calculator.clear()
  calculator.updateDisplay()
})
delete(item) 
{
  this.currentOperand = this.currentOperand.toString().slice(0, -1)
}
deleteButton.addEventListener('click', button => {
  calculator.delete()
  calculator.updateDisplay()
})
updateDisplay() 
{
  if (this.operation != null) {
    this.previousOperandTextElement.innerText =
      `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`}}
      updateDisplay()
       {
        this.currentOperandTextElement.innerText =
          this.getDisplayNumber(this.currentOperand)
        if (this.operation != null) {
          this.previousOperandTextElement.innerText =
            `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        } else {
          this.previousOperandTextElement.innerText = ''
        }
      }      

      getDisplayNumber(number) 
      {
        const floatNumber = parseFloat(number)
        if (isNaN(floatNumber)) return ''
        return floatNumber.toLocaleString('en')
    }
    getDisplayNumber(number) 
    {
      const stringNumber = number.toString()
      const integerDigits = parseFloat(stringNumber.split('.')[0])
      const decimalDigits = stringNumber.split('.')[1]
      let integerDisplay
      if (isNaN(integerDigits)) {
        integerDisplay = ''
      } else {
        integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
      }
      if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`
      } else {
        return integerDisplay
      }
    }  
    getDisplayNumber(number) 
    {
      if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
          } else {
            return integerDisplay
          }
        } 