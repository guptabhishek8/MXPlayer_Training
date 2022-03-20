import {accountFunc} from './interface'

export class saveAccount implements accountFunc{
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

export class currAccount implements accountFunc{
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