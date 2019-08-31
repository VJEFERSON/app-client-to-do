import { NgModule } from '@angular/core';
import { LoginComponent } from './LoginComponent';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginRoutes } from './LoginRoutes';
import { FormsModule } from '@angular/forms';
import { CommonMaterialModules } from '../common/material/CommonMaterialModules';

@NgModule({
    imports: [
        CommonModule,
        CommonMaterialModules,
        RouterModule.forChild(LoginRoutes),
        FormsModule,
    ],
    exports: [
        LoginComponent,
    ],
    declarations: [
        LoginComponent,
    ],
    providers: [],
})
export class LoginModule {
}
