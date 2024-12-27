import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    standalone: true,
    imports: []
})
export class PaginationComponent {
    @Input() currentPage: number = 1;
    @Output() pageChange = new EventEmitter<number>();

    previousPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.pageChange.emit(this.currentPage);
        }
    }

    nextPage() {
        this.currentPage++;
        this.pageChange.emit(this.currentPage);
    }
}