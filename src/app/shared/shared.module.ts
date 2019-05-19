import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { BreadcrumbsComponent } from "./breadcrumbs/breadcrumbs.component";
import { NopagefoudComponent } from './nopagefoud/nopagefoud.component';
import { PipesModule } from "../pipes/pipes.module";


@NgModule({
    imports:[
        RouterModule,
        CommonModule,
        PipesModule
    ],
    declarations : [
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        NopagefoudComponent
    ],
    exports:[
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        NopagefoudComponent
    ]
})

export class SharedModule {}