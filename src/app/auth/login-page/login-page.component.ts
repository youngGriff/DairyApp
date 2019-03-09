import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../shared/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  authError: string;

  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    const username = f.value.username;
    const password = f.value.password;
    if (this.authService.login(username, password)) {
      this.authError = null;
      this.router.navigate(['/']);
    } else {
      this.authError = 'Sorry, data you provide is not correct'
    }

  }
}
