import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { CatalogComponent } from "./catalog/catalog.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const ROUTES: Routes = [
    {path: "", redirectTo: 'Home', pathMatch: 'full'},
    {path: 'Home', component: HomeComponent},
    {path: "Catalog", component: CatalogComponent},
    {path: "ContactUs", component: ContactUsComponent},
    {path: "**", component: NotFoundComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})

export class RoutingModule{ }