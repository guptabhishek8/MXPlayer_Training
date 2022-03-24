import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardStatus'
})
export class CardStatusPipe implements PipeTransform {

  transform(salary: number): unknown {
    if(salary>=80000){
      return "Gold Card";
    }
    else if(salary>=50000){
      return "Silver Card";
    }
    else if(salary>=20000){
      return "Bronze Card";
    }
    else{
      return "No Card";
    }
  }

}
