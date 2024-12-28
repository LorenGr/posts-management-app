import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

export interface DialogData {
    title: string;
    body: string;
}

@Component({
    selector: 'app-create-post-dialog',
    templateUrl: './create-post-dialog.component.html',
    standalone: true,
    styleUrls: ['./create-post-dialog.component.css'],
    imports: [CommonModule, FormsModule, MatFormFieldModule, ReactiveFormsModule, MatDialogModule, MatInputModule],
})
export class CreatePostDialogComponent {
    readonly title = new FormControl('', [Validators.required]);
    readonly body = new FormControl('', [Validators.required]);

    constructor(
        public dialogRef: MatDialogRef<CreatePostDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) { }

    onNoClick(): void {
        this.dialogRef.close();
    }
}