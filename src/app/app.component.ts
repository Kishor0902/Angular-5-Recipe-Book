import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  title = 'app';
  currenttab = 'recipe';
  onNavigate(tab: string) {

    this.currenttab = tab;

  }

  ngOnInit(): void {

    firebase.initializeApp(
      {
        apiKey: 'AIzaSyBWVX499pX1j4HCVmlcY7l5wsEPk5gmBhA',
        authDomain: 'udemy-recipe-91ccd.firebaseapp.com',
      }
    );

  }
}
