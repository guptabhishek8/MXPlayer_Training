"use strict";
exports.__esModule = true;
exports.currAccount = exports.saveAccount = void 0;
var saveAccount = /** @class */ (function () {
    function saveAccount() {
        this.amount = 0;
    }
    saveAccount.prototype.openAccount = function (x) {
        this.amount = x;
        console.log("Saving Account Created with amount : ", this.amount);
    };
    saveAccount.prototype.closeAccount = function () {
        this.amount = 0;
        console.log("Account Closed");
    };
    saveAccount.prototype.withdraw = function (y) {
        if (y > this.amount) {
            console.log("Cant withdraw , not enough money in account");
        }
        else {
            this.amount = this.amount - y;
            console.log("New Balance after withdraw : ", this.amount);
        }
    };
    saveAccount.prototype.deposit = function (z) {
        this.amount = this.amount + z;
        console.log("New Balance after deposit : ", this.amount);
    };
    return saveAccount;
}());
exports.saveAccount = saveAccount;
var currAccount = /** @class */ (function () {
    function currAccount() {
        this.amount = 0;
    }
    currAccount.prototype.openAccount = function (x) {
        this.amount = x;
        console.log("Current Account Created with amount : ", this.amount);
    };
    currAccount.prototype.closeAccount = function () {
        this.amount = 0;
        console.log("Account Closed");
    };
    currAccount.prototype.withdraw = function (y) {
        if (y > this.amount) {
            console.log("Cant withdraw , not enough money in account");
        }
        else {
            this.amount = this.amount - y;
            console.log("New Balance after withdraw : ", this.amount);
        }
    };
    currAccount.prototype.deposit = function (z) {
        this.amount = this.amount + z;
        console.log("New Balance after deposit : ", this.amount);
    };
    return currAccount;
}());
exports.currAccount = currAccount;
