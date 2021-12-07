import { BillingComponent } from './billing/billing.component';
import { BodyComponent } from './body/body.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'body', component: BodyComponent },
  { path: 'billing', component: BillingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [BodyComponent, BillingComponent]
