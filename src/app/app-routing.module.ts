import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherhomeComponent } from './modules/weather/page/weatherhome/weatherhome.component';

const routes: Routes = [
  { path: '', redirectTo: 'weather', pathMatch: 'full' },
  { path: 'weather', component: WeatherhomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
