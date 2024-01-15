const App = require("./App")

App.createUser("Isaac Pontes", "isaac@email.com")
App.createUser("Lucas Queiroga", "lucas@email.com")
App.createUser("Juliana Conde", "juliana@email.com")

App.doDeposit(100 , "isaac@email.com")

App.doTransfer("isaac@email.com", "lucas@email.com", 20)

App.alterTranfer(10)
App.doLoan(2000, 24, "juliana@email.com")

console.log(App.findUser("isaac@email.com"))
console.log(App.findUser("isaac@email.com").account)
console.log(App.findUser("lucas@email.com"))
console.log(App.findUser("lucas@email.com").account)
console.log(App.findUser("juliana@email.com"))
console.log(App.findUser("juliana@email.com").account)
console.log(App.findUser("juliana@email.com").account.loans[0].installments)

