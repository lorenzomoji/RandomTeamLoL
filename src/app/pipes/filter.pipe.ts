import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {

    transform(value: any, args: string): any {
        const resultChamps = [];
        for (const post of value) {
            if (post.name.toLowerCase().indexOf(args) > -1) {
                resultChamps.push(post);
            }
        }
        return resultChamps;
    }

}