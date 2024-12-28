import { Component, OnInit } from '@angular/core';
import { NgxColorsModule } from 'ngx-colors';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
    selector: 'app-color-selector',
    templateUrl: './color-selector.component.html',
    standalone: true,
    imports: [CommonModule, FormsModule, NgxColorsModule, MatTooltipModule]
})
export class ColorSelectorComponent implements OnInit {
    leftColor: string = '#7cdc00'; // Default color

    ngOnInit(): void {
        this.leftColor = this.getCssVariableValue('--color-primary');
    }

    getCssVariableValue(variable: string): string {
        return getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
    }

    updateColor(newColor: string): void {
        this.leftColor = newColor;
        document.documentElement.style.setProperty('--color-primary', newColor);
    }
}