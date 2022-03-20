var savingAccount = /** @class */ (function () {
    function savingAccount() {
        this.amount = 0;
    }
    savingAccount.prototype.openAccount = function (x) {
        this.amount = x;
        console.log("Saving Account Created with amount : ", this.amount);
    };
    savingAccount.prototype.closeAccount = function () {
        this.amount = 0;
        console.log("Account Closed");
    };
    savingAccount.prototype.withdraw = function (y) {
        if (y > this.amount) {
            console.log("Cant withdraw , not enough money in account");
        }
        else {
            this.amount = this.amount - y;
            console.log("New Balance after withdraw : ", this.amount);
        }
    };
    savingAccount.prototype.deposit = function (z) {
        this.amount = this.amount + z;
        console.log("New Balance after deposit : ", this.amount);
    };
    return savingAccount;
}());
var currentAccount = /** @class */ (function () {
    function currentAccount() {
        this.amount = 0;
    }
    currentAccount.prototype.openAccount = function (x) {
        this.amount = x;
        console.log("Current Account Created with amount : ", this.amount);
    };
    currentAccount.prototype.closeAccount = function () {
        this.amount = 0;
        console.log("Account Closed");
    };
    currentAccount.prototype.withdraw = function (y) {
        if (y > this.amount) {
            console.log("Cant withdraw , not enough money in account");
        }
        else {
            this.amount = this.amount - y;
            console.log("New Balance after withdraw : ", this.amount);
        }
    };
    currentAccount.prototype.deposit = function (z) {
        this.amount = this.amount + z;
        console.log("New Balance after deposit : ", this.amount);
    };
    return currentAccount;
}());
var obj3 = new savingAccount();
obj3.openAccount(5000);
obj3.deposit(4000);
obj3.withdraw(2000);
var obj4 = new currentAccount();
obj4.openAccount(5000);
obj4.deposit(4000);
obj4.withdraw(2000);
