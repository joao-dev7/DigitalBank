const Deposit = require("./Deposit")
const Loan = require("./Loan")
const Transfer = require("./Transfer")

module.exports = class Account {
    #balance = 0
    constructor(owner) {
        this.owner = owner
        this.#balance = 0
        this.deposits = []
        this.loans = []
        this.transfers = []
    } // os arrays deveriam ser privados, não estão por via de teste 


    get balance () {
        return this.#balance
    }

    newDeposit(value) {
        this.#balance += value
        const deposit = new Deposit(value)
        this.deposits.push(deposit)
    }

    newLoan(value, plotsNum) {
        this.#balance += value
        const loan = new Loan(value, plotsNum)
        this.loans.push(loan)
    }

    doTransfer(userSend, userReceive, value) {
        if(userSend === this.owner) {
            this.#balance += value
            const tranfer = new Transfer(userSend, userReceive, value)
            this.transfers.push(tranfer)
        } else if (userReceive === this.owner) {
            this.#balance -= value
            const tranfer = new Transfer(userSend, userReceive, value)
            this.transfers.push(tranfer)
        }
    }

    seeAccount() {
        console.table(this.deposits)
        console.table(this.loans)
        console.table(this.transfers)
        console.table(this.owner)
        console.table(this.#balance)
    }
}