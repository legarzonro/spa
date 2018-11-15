import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/shared/home/home.component';
import { AboutComponent} from './components/about/about.component';
import {HeroesComponent} from './components/heroes/heroes.component';
import { HeroComponent } from './components/hero/hero.component';
import { SearchComponent } from './components/hero/search/search.component';



const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'hero/:id', component: HeroComponent },
    { path: 'hero/search/:name', component: SearchComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
