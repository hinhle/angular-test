import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rmdLinkPipe'
})
export class RmdLinkPipePipe implements PipeTransform {

  transform(id: string): string {
    return '/recommend/' + id;
  }

}
