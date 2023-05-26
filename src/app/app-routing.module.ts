import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CardsComponent } from './pages/cards/cards.component';
import { InfoComponent } from './pages/info/info.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'info', component: InfoComponent},
  {path: 'cards', component: CardsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
