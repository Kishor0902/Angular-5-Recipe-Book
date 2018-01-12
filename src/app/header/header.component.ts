import { AuthService } from './../auth/auth.service';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { Output } from '@angular/core/';
import { DataStoreService } from '../shared/data-store.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: AuthService, private dataStore: DataStoreService) { }

  ngOnInit() {
  }

  onSave() {

    this.dataStore.storeRecipes().subscribe((response: Response) => {
      console.log(response);
    });

  }

  onFecth() {

    this.dataStore.getRecipes();
  }

  isAut() {
      return this.auth.isAuthenticated();
  }
}
