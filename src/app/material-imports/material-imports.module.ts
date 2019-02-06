import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatButtonModule,
    MatIconModule,
    MatListModule, MatPaginatorModule, MatRippleModule,
    MatSidenavModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
        MatPaginatorModule
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
        MatPaginatorModule
    ]
})
export class MaterialImportsModule { }
