import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayus'
})

export class MayusculasPipe implements PipeTransform{
    transform( value:string, validation:Boolean = true ):string {
        return ( validation )
        ? value.toUpperCase()
        : value.toLowerCase();
    };
};