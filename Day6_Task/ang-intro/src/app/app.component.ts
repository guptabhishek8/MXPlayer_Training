import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  a=10;
  b=20;
  c=this.a+this.b;
  elg="";

  salary=0;

  childName="Abhishek Gupta";


  fruits = ['Mango','Apple','Orange','Grapes'];

  addFruit(fruit: string){
    if(!(this.fruits.includes(fruit))){
      this.fruits.push(fruit);
      
    }
    return this.fruits;

  }
  
  principal_amount = 0;
  roi = 0;
  tenureY = 0;
  tenureM =0;
  monthly_emi =0;
  total_amount_with_interest= 0;
  total_interest=0;
  yearly_amount_to_pay=0;


  num1=0;

  changeVal(event: any){
    this.num1 = event.target.value; 
  }

  eventSalary(event: any){
    this.salary = event.target.value; 
  }
  
  sum(){
    this.c = this.a*1+this.b*1;
    return this.c;
  }

  checkEligible(){
    if(this.salary>100000){
      this.elg = "You are Eligible for Gold Card";
    }
    else if(this.salary>50000){
      this.elg="You are Eligible for silver card";
    }
    else if(this.salary>20000){
      this.elg="You are Eligible for bronze card";
    }
    else{
      this.elg="You are not eligible for any kind of card";
    }
    return this.elg;
  }

  cities = ['Alwar','Jaipur','Delhi','Noida'];


  employees = [
    {name: "Abhishek", department: "AI", salary: 100},
    {name: "Akash", department: "IOT", salary: 200},
    {name: "Kabir", department: "HR", salary: 150},
    {name: "Anshika", department: "Sales", salary: 110},
  ]

  checkEMI(){
    this.tenureM = Math.round(this.tenureY*12);
    var r = this.roi/12/100;
    var x = 1+r;
    var num = Math.pow(x,this.tenureM);
    var deno = num-1;
    this.monthly_emi = Math.round(this.principal_amount*r*num/deno);
    this.yearly_amount_to_pay = this.monthly_emi*12;
    this.total_amount_with_interest = this.monthly_emi*this.tenureM;
    this.total_interest = this.total_amount_with_interest - this.principal_amount;
  }



}
