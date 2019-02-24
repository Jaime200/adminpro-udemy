import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { BreadcrumbsComponent } from "./breadcrumbs/breadcrumbs.component";
import { NopagefoudComponent } from './nopagefoud/nopagefoud.component';


@NgModule({
    imports:[
        RouterModule,
        CommonModule
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