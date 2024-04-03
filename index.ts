
import inquirer from "inquirer";

console.log('Welcome to ABC ATM\nYour Current Balance is 50000\n')
let atm = await inquirer.prompt([
    // {
        
    //     name:'balance',
    //     message:'Welcome to ABC ATM\nYour Current Balance is 50000\nPlease Press ENTER',
        
    // },
    {
        type: 'number',
        name: 'pin',
        message: 'Enter Your 4 digit Pin Code:',
        
    },
    {
        type: 'list',
        name: 'account',
        message: 'Select Your Account:',
        choices: ['Current', 'Saving'],
        when(atm) {
            return atm.pin
        },
    },
    {
        type: 'list',
        name: 'transition',
        message: 'Select your Transition',
        choices: ['Cash Withdraw', 'Fast Cash'],
        when(atm) {
            return atm.account
        },
    },
    {
        type: 'list',
        name: 'amount',
        message: 'Select your Amount',
        choices: [2000, 4000, 8000, 10000, 20000],
        when(atm) {
            return atm.transition == 'Fast Cash'
        },
    },
    {
        type: 'number',
        name: 'amount',
        message: 'Enter Your Amount',
        when(atm) {
            return atm.transition == 'Cash Withdraw'
        },
    }
])
if(atm.pin){
    let balance = 50000
    console.log('Your Previous Balance was:', balance,'\n')
    let enterAmount = atm.amount
    if(balance > atm.amount){
        let remainingBalance = balance - enterAmount
        console.log('Your Remaining Balance is:', remainingBalance)
    }else {
        console.log('Insufficient Balance')
    }
}


