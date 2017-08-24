import { Component, OnInit } from '@angular/core';
import {User} from "../modal/user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];
  model = new User('','',null,'','','');
  submitted = false;
  onSubmit() { this.submitted = true; }
  newHero() {
    // this.model = new User('','');
  }

  constructor() { }

  ngOnInit() {
  }

}
