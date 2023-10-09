import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  item: { id: number; title: string; description: string; photoCover: string; summary?: string; text?: string } = { id: 0, title: '', description: '', photoCover: '', summary: '', text: '' }

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']
    console.log(`o id é: ${id}`)
    this.item = dataFake.filter(i => i.id == id)[0] == undefined ? { id: 0, title: '', description: '', photoCover: '', summary: '', text: '' } : dataFake.filter(i => i.id == id)[0]
  }
}
