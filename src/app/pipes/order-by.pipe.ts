import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
    transform(array: any[], field: string, reverse: boolean = false): any[] {
        if (!Array.isArray(array)) {
          return array;
        }
        array.sort((a, b) => {
          const aValue = new Date(a[field]).getTime();
          const bValue = new Date(b[field]).getTime();
          if (aValue < bValue) {
            return reverse ? 1 : -1; // Cambiar el orden si reverse es verdadero
          } else if (aValue > bValue) {
            return reverse ? -1 : 1; // Cambiar el orden si reverse es verdadero
          } else {
            return 0;
          }
        });
        return array;
      }
      
}