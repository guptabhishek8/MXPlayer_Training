var bankingAPP = /** @class */ (function () {
    function bankingAPP() {
        this.amount = 0;
    }
    bankingAPP.prototype.openAccount = function (openingAmount) {
        if (openingAmount > 5000) {
            this.amount = this.amount + openingAmount;
            console.log("Account opened with Balance : ", this.amount);
        }
        else {
            console.log("Account can be opened with min. 5000");
        }
    };
    bankingAPP.prototype.deposit = function (depositAmount) {
        this.amount = this.amount + depositAmount;
        console.log("New Amount in Balance after deposit : ", this.amount);
    };
    bankingAPP.prototype.withdraw = function (withdrawAmount) {
        if (withdrawAmount > this.amount) {
            console.log("Not have enough money in account");
        }
        else {
            this.amount = this.amount - withdrawAmount;
            console.log("New Amount in Balance after withdraw : ", this.amount);
        }
    };
    return bankingAPP;
}());
var obj = new bankingAPP();
obj.openAccount(6000);
obj.deposit(2000);
obj.withdraw(1000);
