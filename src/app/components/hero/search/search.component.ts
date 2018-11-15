import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  heroes = [];

  constructor(private activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
        this.heroes = this._heroesService.buscarHeroes(params.name);
    });
  }

}
