import { Component, OnInit } from '@angular/core';
import { dataFake } from "../../data/dataFake";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items:{ id: number; title: string; description: string; photoCover: string; summary?: string; text?: string }[] | undefined;

  constructor() { }

  ngOnInit(): void {
    this.items = dataFake
  }

}
