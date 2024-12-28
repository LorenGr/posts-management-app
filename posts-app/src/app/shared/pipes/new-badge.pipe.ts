import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'newBadge',
    standalone: true
})
export class NewBadgePipe implements PipeTransform {
    transform(isNew: boolean | undefined): string {
        return isNew ? '<span class="bg-blue-400 text-white text-xs font-semibold px-2 py-1 rounded-full ml-2">new</span>' : '';
    }
}