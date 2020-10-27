import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatComponent } from './stat.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog'; 

@NgModule({
    imports: [
        CommonModule, 
        MatCardModule, 
        MatGridListModule, 
        MatIconModule,
        MatDialogModule
    ],
    declarations: [
        StatComponent
    ],
    exports: [
        StatComponent,
        MatDialogModule,
    ]
})
export class StatModule {}
