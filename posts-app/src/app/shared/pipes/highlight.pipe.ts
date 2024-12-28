import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'highlight',
    standalone: true
})
export class HighlightPipe implements PipeTransform {
    transform(value: string, searchString: string | null): string {
        if (!searchString) {
            return value;
        }
        const regex = new RegExp(`(${searchString})`, 'gi');
        return value.replace(regex, '<span class="highlight">$1</span>');
    }
}