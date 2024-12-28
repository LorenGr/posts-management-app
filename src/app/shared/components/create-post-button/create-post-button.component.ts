import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { CreatePostDialogComponent } from '../create-post-dialog/create-post-dialog.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
    selector: 'app-create-post-button',
    templateUrl: './create-post-button.component.html',
    standalone: true,
    imports: [CommonModule, MatDialogModule, MatTooltipModule]
})
export class CreatePostButtonComponent {

    @Output() onCreate = new EventEmitter<{ title: string, body: string }>();
    constructor(public dialog: MatDialog) { }

    openDialog(): void {
        const dialogRef = this.dialog.open(CreatePostDialogComponent, {
            width: '350px',
            backdropClass: "backdropBackground",
            data: { title: '', body: '' }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) this.onCreate.emit(result);
        });
    }
}