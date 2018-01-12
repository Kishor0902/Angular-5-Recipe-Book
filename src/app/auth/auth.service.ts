import { Router, ActivatedRoute } from '@angular/router/';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Subject } from 'rxjs/Subject';
import { OnInit, OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Injectable()
export class AuthService implements OnInit, OnDestroy {



  constructor(private router: Router, private route: ActivatedRoute) { }

  token = new Subject<string>();
  stringtoken = null;
  signUpUser(email: string, passwword: string) {
    firebase.auth().createUserWithEmailAndPassword(email, passwword).then(
      (response) => {
        console.log(response);
        this.router.navigate(['/signin']);
      }
    )
      .catch(
      (erro) => console.log(erro)
      );
  }

  ngOnInit(): void {
    this.token.subscribe(
      (tkn: string) => {
        this.stringtoken = tkn;
        console.log('TKN : ' + this.stringtoken);
      }
    );
  }

  signOut() {
    firebase.auth().signOut();
    this.stringtoken = null;
    this.router.navigate(['/']);
  }

  ngOnDestroy(): void {
    // this.token.unsubscribe()
  }

  signInUser(email: string, passwword: string) {
    firebase.auth().signInWithEmailAndPassword(email, passwword)
      .then(
      (response) => {
        console.log(response);
        firebase.auth().currentUser.getToken().then((res: string) => {

          this.token.next(res);
          this.stringtoken = res;
          this.router.navigate(['/']);

        });
      }
      )
      .catch((erro) => console.log(erro));
  }

  getToken() {

    firebase.auth().currentUser.getToken().then((res: string) => {

      this.token.next(res);
      this.stringtoken = res;

    });
    return this.stringtoken;
  }

  isAuthenticated() {
    return this.stringtoken != null;
  }

}
