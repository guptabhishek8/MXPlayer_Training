import { currAccount, saveAccount } from "./class";

var savobj = new saveAccount();
savobj.openAccount(5000);
savobj.deposit(10000);
savobj.withdraw(2000);
savobj.closeAccount();


var currobj = new currAccount();
currobj.openAccount(4000);
currobj.deposit(12000);
currobj.withdraw(3000);
currobj.closeAccount();