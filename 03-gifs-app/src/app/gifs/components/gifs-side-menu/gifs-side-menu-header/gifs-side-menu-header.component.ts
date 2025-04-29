import { environment } from './../../../../../environments/environment.development';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gifs-side-menu-header',
  imports: [],
  templateUrl: './gifs-side-menu-header.component.html',
  styleUrl: './gifs-side-menu-header.component.css'
})
export class GifsSideMenuHeaderComponent {

  env = environment;
}
