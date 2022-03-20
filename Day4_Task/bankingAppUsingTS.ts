class bankingAPP{
    amount:number=0;

    openAccount(openingAmount: number){
        if(openingAmount>5000){
            this.amount = this.amount+openingAmount;
            console.log("Account opened with Balance : ",this.amount);
        }
        else{
            console.log("Account can be opened with min. 5000")
        }
    }
    deposit(depositAmount:number){
        this.amount = this.amount + depositAmount;
        console.log("New Amount in Balance after deposit : ",this.amount);
    }
    withdraw(withdrawAmount: number){
        if (withdrawAmount> this.amount){
            console.log("Not have enough money in account");
        }
        else{
            this.amount = this.amount - withdrawAmount;
            console.log("New Amount in Balance after withdraw : ",this.amount);
        }
    }
}

var obj = new bankingAPP();
obj.openAccount(6000);
obj.deposit(2000);
obj.withdraw(1000);