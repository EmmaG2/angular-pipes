import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayus'
})

export class MayusculasPipe implements PipeTransform{
    transform( value:string ):string {
        return value.toUpperCase()
    };

}