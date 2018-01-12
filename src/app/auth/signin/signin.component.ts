import { Router, ActivatedRoute } from '@angular/router/';
import { NgForm } from '@angular/forms/';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onSignIn(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    this.auth.signInUser(email, password);

    this.router.navigate(['../'], { relativeTo: this.route });

  }

}
