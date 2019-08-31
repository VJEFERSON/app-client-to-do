import { NgModule } from '@angular/core';
import { CommonMaterialModules } from '../common/material/CommonMaterialModules';
import { CommonModule } from '@angular/common';
import { TagComponent } from './TagComponent';
import { TagService } from './services/TagService';
import { TagResource } from './services/TagResource';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        CommonMaterialModules,
        CommonModule,
        HttpClientModule,
    ],
    exports: [
        TagComponent,
    ],
    declarations: [
        TagComponent,
    ],
    entryComponents: [
    ],
    providers: [
        TagService,
        TagResource,
    ],
})
export class TagModule {

}
