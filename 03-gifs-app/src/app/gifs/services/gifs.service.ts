import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GifsService {

  private http = inject(HttpClient);

  loadTrendingGifs() {
    this.http.get()
  }
}
