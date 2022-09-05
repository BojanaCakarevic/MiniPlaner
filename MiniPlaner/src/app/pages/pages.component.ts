import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  token = '';

  user = ''

  constructor(private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token') || '{}';
    } else {
      this.token = '';
    }

    if (localStorage.getItem('user')) {
      this.user = localStorage.getItem('user') || '{}';
    } else {
      this.token = '';
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
    setTimeout(() => window.location.reload(), 50);
  }



}
