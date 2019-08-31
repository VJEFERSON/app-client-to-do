import { NgModule } from '@angular/core';
import { TaskComponent } from './TaskComponent';
import { CommonModule } from '@angular/common';
import { CommonMaterialModules } from '../common/material/CommonMaterialModules';

@NgModule({
    imports: [
        CommonModule,
        CommonMaterialModules,
    ],
    exports: [],
    declarations: [
        TaskComponent,
    ],
    providers: [],
})
export class TaskModule { }
