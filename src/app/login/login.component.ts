import { Component, OnInit } from '@angular/core';
import {COMMON_NAMES} from "../common";
import {SafeHtmlPipePipe} from "../safe-html-pipe.pipe";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  items: string[] = COMMON_NAMES;
  inputText = '';
  constructor() { }

  ngOnInit() {
  }



}
