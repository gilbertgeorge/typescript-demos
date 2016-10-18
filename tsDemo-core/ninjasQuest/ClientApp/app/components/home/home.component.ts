import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from "../../characters";
import { GameService } from "../../game.service";

@Component({
    selector: 'nq-home',
    template: require('./home.component.html')
})
export class HomeComponent implements OnInit {
    hero: Hero;
    message: String;

    constructor(private game: GameService, private router: Router) { }

    ngOnInit(): void {
        this.hero = this.game.getHero();
        this.message = this.game.getAndClearMessage();
    }

    takeNap(): void {
        this.hero.health = this.hero.maxHealth;
        this.message = "You nap. Very quietly. Your health is now restored.";
    }

    fightMonster(): void {
        this.router.navigate(['/encounter']);
    }
}
