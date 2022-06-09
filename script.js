let accountName = "Sarah Razzaq",
    balance = 100;
    

    function getBalance() {
        alert('Your current balance is: '+ balance);
        atm();
    }
    function deposit() {
        let depositAmount = parseFloat(prompt('How much would you like to deposit?'));
        if (isNaN(depositAmount) || depositAmount === ''|| depositAmount === 0 || depositAmount < 0) {
            alert('Error: please enter a valid input!');
            deposit();
        } else {
            balance += depositAmount;
            getBalance();
            atm();
        }
    }
    function withdrawal() {
        let amount = parseFloat(prompt('How much would you like to deposit?'));
        if (isNaN(amount) || amount === ''|| amount === 0 || amount < 0 || amount > balance ) {
            alert('Error: please enter a valid input!');
            withdrawal();
        } else {
            balance -= amount;
            getBalance();
            atm();
        }
    }
    	
    function getAccountName () {
        alert("Name of account: " +accountName)
        atm();
    }
    function error() {
        alert('Error: accepted numbers are 1 through 4.');
        atm();
    }

    function exit() {
        let myWindow =
        function closeWin() {
        myWindow.close();
        };
    }


    function atm() {

        var choice = parseInt(prompt('Select a choice 1.) Balance 2.) Deposit 3.) Withdrawal 4.) Get Account Name  5.) Exit')); 

        if (choice === 1) {
            getBalance();
        } else if (choice === 2) {
            deposit();
        } else if (choice === 3) {
            withdrawal();
        } else if (choice === 4) {
            getAccountName();
        } else if (choice === 5) {
            exit();
        } else {
            error();
        }
    }

atm();