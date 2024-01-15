const Loan = require("./entities/Loan")
const User = require("./entities/User")

module.exports = class App {
    static #user = []

    static findUser(email) {
        const user = this.#user.find(u => u.email === email )
        return user ?? null // se for falso volta nulo
    }

    static createUser(fullname, email) {
        if(!App.findUser(email)) {
            this.#user.push(new User(fullname, email))
        } 
    }

    static doDeposit(value, email) {
        const acc = App.findUser(email)
        if(acc) {
            acc.account.newDeposit(value)
        }
    }

    static doTransfer(userSend, userReceive,value) {
        const accSend = this.findUser(userSend)
        const accReceive = this.findUser(userReceive)
        if(accSend && accReceive) {
            accReceive.account.doTransfer(accSend, accReceive, value)
            accSend.account.doTransfer(accSend, accReceive, value)
        }
    }
    
    static doLoan(value, plotsNum, email) {
        const acc = App.findUser(email)
        if(acc) {
            acc.account.newLoan(value, plotsNum)
        }
    }

    static alterTranfer(newFee){
        Loan.fee = newFee
    }
}