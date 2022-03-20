interface account{
    openAccount(x: number);
    closeAccount();
    withdraw(y: number);
    deposit(z: number);
}

class savingAccount implements account{
    amount: number = 0;

    openAccount(x: number) {
        this.amount = x;
        console.log("Saving Account Created with amount : ", this.amount);
    }
    closeAccount() {
        this.amount = 0;
        console.log("Account Closed");
    }
    withdraw(y: number) {
        if (y> this.amount){
            console.log("Cant withdraw , not enough money in account");
        }
        else{
            this.amount = this.amount - y;
            console.log("New Balance after withdraw : ", this.amount);
        }
    }
    deposit(z: number) {
        this.amount = this.amount +z;
        console.log("New Balance after deposit : ", this.amount);
    }
}

class currentAccount implements account{
    amount: number = 0;

    openAccount(x: number) {
        this.amount = x;
        console.log("Current Account Created with amount : ", this.amount);
    }
    closeAccount() {
        this.amount = 0;
        console.log("Account Closed");
    }
    withdraw(y: number) {
        if (y> this.amount){
            console.log("Cant withdraw , not enough money in account");
        }
        else{
            this.amount = this.amount - y;
            console.log("New Balance after withdraw : ", this.amount);
        }
    }
    deposit(z: number) {
        this.amount = this.amount +z;
        console.log("New Balance after deposit : ", this.amount);
    }
}

var obj3 = new savingAccount();
obj3.openAccount(5000);
obj3.deposit(4000);
obj3.withdraw(2000);

var obj4 = new currentAccount();
obj4.openAccount(5000);
obj4.deposit(4000);
obj4.withdraw(2000);

