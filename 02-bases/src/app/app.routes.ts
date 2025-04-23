
import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter.component';
import { HeroPageComponent } from './pages/hero/hero-page/hero-page.component';
import { DragonballPageComponent } from './pages/dragonball/dragonball-page/dragonball-page.component';
import { DragonballSuperPageComponent } from './pages/dragonball/dragonball-super-page/dragonball-super-page.component';


export const routes: Routes = [
  {
    path: '',
    component: CounterComponent,
  },
  {
    path: 'hero',
    component: HeroPageComponent,
  },
  {
    path: 'dragonball',
    component: DragonballPageComponent
  },
  {
    path: 'dragonballsuper',
    component: DragonballSuperPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  },
];
