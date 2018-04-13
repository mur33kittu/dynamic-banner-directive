import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: "shorten" })

export class PipeDirective implements PipeTransform {

    transform(value: string) {
        return "..." + value.slice(3, value.length);
    }
}