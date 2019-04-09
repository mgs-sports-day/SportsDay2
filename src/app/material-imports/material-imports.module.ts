import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatBadgeModule,
    MatButtonModule, MatCardModule, MatChipsModule, MatDividerModule, MatExpansionModule, MatFormFieldModule,
    MatIconModule, MatInputModule,
    MatListModule, MatMenuModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRippleModule, MatSelectModule,
    MatSidenavModule, MatSnackBarModule, MatSortModule, MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule, MatTooltipModule
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
        MatDividerModule,
        MatExpansionModule,
        MatCardModule,
        MatMenuModule,
        MatTooltipModule,
        MatChipsModule,
        MatBadgeModule,
        MatSortModule
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
        MatDividerModule,
        MatExpansionModule,
        MatCardModule,
        MatMenuModule,
        MatTooltipModule,
        MatChipsModule,
        MatBadgeModule,
        MatSortModule
    ]
})
export class MaterialImportsModule { }
