import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  name = "Abhishek Gupta";
  currentDate = new Date();

  users = [
    { name: 'Abhishek', 'gender':'Male', 'mstatus':'married'},
    { name: 'Anshika', 'gender':'Female','mstatus':'unmarried'},
    { name: 'Aakash', 'gender':'Male','mstatus':'unmarried'},
    { name: 'Aditi', 'gender':'Female','mstatus':'married'},
  ]

  usersSalary =[
    {name: 'Abhishek', 'salary': 66000},
    {name: 'Ayush', 'salary': 9000},
    {name: 'Ankit', 'salary': 49000},
    {name: 'Anubhav', 'salary': 120000},
  ]

  arr=[
    'Hey My Name is ABhishek',
    'Hey My name is Ayush and M 20 years old, zzzzzzzzzzzzzzzzzzzzzzzzzzzzzz',
    'Hey',
  ]
}
