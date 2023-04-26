import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spell'
})
export class SpellPipe implements PipeTransform {

  transform(value: any, option: string,...args: unknown[]): unknown {
    if(option === 'range'){
      if (!value) return 'none'
      if(value instanceof Object){
        return value.width + " to " + value.distance + " ft."
      } else return value + " ft."
    } else if (option === 'aoe'){
      if(!value) return 'none'
      return value
    }else if (option === 'damage'){
      if(!value) return 'none'
      return value
    }
    return null;
  }

}
