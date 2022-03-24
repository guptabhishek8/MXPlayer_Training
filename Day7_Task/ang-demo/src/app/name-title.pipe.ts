import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameTitle'
})
export class NameTitlePipe implements PipeTransform {

  transform(gender: string, mstatus: string): unknown {
    if(gender == 'Male'){
      return 'Mr.';
    }
    else if (mstatus == "married"){
      return 'Mrs. ';
    }
    else{
      return 'Miss. ';
    }
  }

}
