
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService, private router:Router) { }

  public username: string = '';
  public password: string = '';
  public message: string = '';

  ngOnInit(): void {
  }

  login(loginForm:any) {
    this.username = loginForm.value.username;
    this.password = loginForm.value.password;

    if (!loginForm.invalid) {
      this.userService.login(this.username, this.password).subscribe(resp=>{
        localStorage.setItem('token', resp.token);
        localStorage.setItem('user', this.username);
        this.router.navigate(['/home']);
        setTimeout(()=>window.location.reload(),50);
      })
      this.message = 'Podaci nisu ispravno uneti';
    } else {
      this.message = 'Sva polja moraju biti popunjena';
    }
  }
}