import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatButtonModule, MatChipsModule, MatDividerModule, MatFormFieldModule,
    MatIconModule, MatInputModule,
    MatListModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRippleModule, MatSelectModule,
    MatSidenavModule, MatSnackBarModule, MatSortModule, MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatTabsModule,
        MatTableModule,
        MatRippleModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatStepperModule,
        MatInputModule,
        MatSelectModule,
        FormsModule,
        MatSnackBarModule,
        ReactiveFormsModule,
        MatDividerModule
    ],
    exports: [
        BrowserAnimationsModule,
        MatButtonModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatTabsModule,
        MatTableModule,
        MatRippleModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatStepperModule,
        MatInputModule,
        MatSelectModule,
        FormsModule,
        MatSnackBarModule,
        ReactiveFormsModule,
        MatDividerModule
    ]
})
export class MaterialImportsModule { }
