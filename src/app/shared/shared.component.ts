import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { BreadcrumbsComponent } from "./breadcrumbs/breadcrumbs.component";
import { NopagefoudComponent } from './nopagefoud/nopagefoud.component';

@NgModule({
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