import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join'
})
export class JoinPipe implements PipeTransform {

  transform(value: any, ...args: any[]): string {
    // cast avec as
    console.log('Arguments du pipe : ' + args, args.length);
    const array: string[] = args.length == 0 ? value as string[] : value.map((obj:any) => obj[args[0]]);
    return array.join(', ');
  }

}
