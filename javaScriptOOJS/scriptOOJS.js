
class BankAccount {    
    constructor(agency, accountNumber) {
        this.agency = agency;
        this.accountNumber = accountNumber;
        this.type = "Current Account";
        this._balance = 0;
    }
    
    getBalance() {
        return this._balance;
    }

    setBalance(newBalance) {
        this.balance = newBalance;
    }

    withDraw(amount) {
        if (amount <= this._balance) {
            this._balance -= amount
            return amount;
        } else {
            throw new Error("There is no availble balance to execute this operation.");
        }
    }

    deposit(amount) {
        if (amount > 0) {
            this._balance += amount
            return amount;
        } else {
            throw new Error("The amount shall be greater than zero.");
        }

    }

}

class CurrentAccount extends BankAccount{
    constructor(agency, accountNumber, creditCardNumber) {
        super(agency, accountNumber);
        this._creditCardNumber = creditCardNumber;
        this.type = "Current Account";

    }

    getCreditCardNumber() {
        return this._creditCardNumber;
    }

    setCreditCardNumber(newNumber) {
        this._creditCardNumber = newNumber;
    }
}

class DepositAccount extends BankAccount{
    constructor(agency, accountNumber) {
        super(agency, accountNumber);       
        this.type = "Deposit Account";
    }

}

class StudentAccount extends BankAccount{
    constructor(agency, accountNumber) {
        super(agency, accountNumber);       
        this.type = "Student Account";
    }

    withDraw(amount) {
        super.withDraw();
        if (amount <= this.balance) {
            if (amount <= 500) {
                super.withDraw(amount);                
            } else {
                throw new Error("This type of account has a withdraw limit of $500.")
            }
        } else {
            throw new Error("There is no availble balance to execute this operation.")
        }
    }

}

const myBankAccount = new BankAccount(
    2022, 2201, true
);


console.log(myBankAccount);
console.log("Balance: " + myBankAccount.getBalance());

const myCurrentAccount = new CurrentAccount(
    2022, 2201, true
);

let amount = 0;

console.log(myCurrentAccount);
console.log("Balance: " + myCurrentAccount.getBalance());
console.log("Deposit: " + myCurrentAccount.deposit(1000));
console.log("Balance: " + myCurrentAccount.getBalance());
try {
    amount = 575;
    console.log("Withdraw: " + myCurrentAccount.withDraw(amount));
} catch(e) {
    console.log(e);
    console.log("Withdraw attempt failed.");
} finally {
    console.log("Balance: " + myCurrentAccount.getBalance());
}

const myStudentAccount = new StudentAccount(
    2022, 2201
);

console.log(myStudentAccount);
console.log("Balance: " + myStudentAccount.getBalance());
console.log("Deposit: " + myStudentAccount.deposit(1000));
console.log("Balance: " + myStudentAccount.getBalance());

try {
    amount = 575
    console.log("Withdraw: " + myStudentAccount.withDraw(amount));
} catch(e) {
    console.log(e.message);
    console.log(`Withdraw attempt failed for $${ amount}.`);
} finally {
    console.log("Balance: " + myStudentAccount.getBalance());
}

