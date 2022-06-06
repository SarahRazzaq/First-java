window.onload = function atm(){
     // parseFloat converts a string to a floating-point number.
    const menu = parseFloat(prompt("Select a choice. 1.) See balance 2.) Make a deposit 3.) Make a withdrawal 4.) Get account name 5.) Exit Account"));
    switch(menu) {
        case 1:
            alert("Balance: " + account.getBalance());
            break;
        case 2:
            account.deposit();
            break;
        case 3: 
            account.withdrawal();
            break;
        case 4:
            alert("Name of account: " + account.getAccountName());
            break;
        case 5:
            account.exitAccount();
            function closeWin(){
                myWindow.close();
            }
            break;
        default:
            alert("Please enter a valid menu option, number between 1-5.");
    }
    atm();
}
const account = {
    accountName: "Sarah Razzaq",
    balance: 100,
    getBalance: function () {
        return this.balance
    },
    /*
    deposit: function () {
        const amount = parseFloat (prompt("How much would you like to deposit?"));
        if (!this.accountError(amount)){
            this.balance = this.balance + amount
            alert("New balance: " + this.balance)
        }
    },
    withdrawal: function () {
        const amount = parseFloat (prompt("How much would you like to deposit?"));
        return (this.balance = this.balance - amount),
            alert("New balance " + this.balance);

    },
    */
    deposit: function () {
        const amount = parseFloat (prompt("How much would you like to deposit?"));
        if (!this.accountError(amount)){
            this.balance = this.balance + amount
            alert("New balance: " + this.balance)
        }
    },
    withdrawal: function () {
        const amount = parseFloat (prompt("How much would you lke to withdraw?"));
        if (!this.accountError(amount) && amount < this.balance) {
            this.balance = this.balance - amount;
            alert("New balance " + this.balance)
        }
    },
    getAccountName: function () {
        return this.accountName
    },
    accountError: function (amount) {
        const hasErrors = amount < 0 || isNaN(amount); 
        if (hasErrors) {
            alert.error("Amount " + amount + " is invalid. Please enter a valid amount.");
        }
        return hasErrors;
    },
    extAccount: function (){
        let myWindow =
        function closeWin() {
        myWindow.close();
        }
    }
}