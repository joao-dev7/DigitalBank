const Installment = require("./Installment")

module.exports = class Loan {
    static #txLoan = 1.05
    constructor (value, installments) {
        this.value = value
        this.installments = []
        for(let i = 1; i <= installments; i++) {
            this.installments.push(new Installment((value * Loan.#txLoan) / installments,i))
        }
        this.date = new Date()
    }
    
    static get fee() {
        return Loan.#txLoan
    }
    
    static set fee(percent){
        Loan.#txLoan =1 + (percent / 100)
    }
}


