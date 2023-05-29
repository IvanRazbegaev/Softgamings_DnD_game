import {Pipe, PipeTransform} from '@angular/core';
import {IWeapons} from "../abstract_classes/items";

@Pipe({
  name: 'itemDescription'
})
export class ItemDescriptionPipe implements PipeTransform {

  transform(value: IWeapons | undefined, field: string, ...args: unknown[]): unknown {
    if (value) {
      if (field === 'name') {
        return value.name
      } else if (field === 'description') {
        let damage;
        if (typeof value.damage !== "string") {
          damage = `Damage: ${value.damage.amount}${value.damage.dice}`
        }
        return value.description + '.\n' + damage
      } else return undefined
    } else return undefined
  }
}
