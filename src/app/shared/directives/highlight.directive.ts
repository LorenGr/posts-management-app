import { Directive, ElementRef, Input } from '@angular/core';

@Directive({ selector: '[highlight]', standalone: true })
export class HighlightDirective {
    @Input() set highlight(search: string | null) {
        if (!search) {
            this.el.nativeElement.innerHTML = this.el.nativeElement.textContent;
        } else {
            const regex = new RegExp(search, 'gi');
            this.el.nativeElement.innerHTML = this.el.nativeElement.textContent.replace(
                regex,
                (match: string) => `<mark>${match}</mark>`
            );
        };

    }
    constructor(private el: ElementRef) { }
}