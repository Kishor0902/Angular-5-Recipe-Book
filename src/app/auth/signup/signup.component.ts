import { Router, ActivatedRoute } from '@angular/router/';
import { NgForm } from '@angular/forms/';
import { ViewChild } from '@angular/core/';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

  }


  onSignUp(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    this.auth.signUpUser(email, password);

    this.router.navigate(['../signin'], { relativeTo: this.route });

  }

}
