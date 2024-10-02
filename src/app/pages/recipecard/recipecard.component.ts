import { Component } from '@angular/core';
import {ChangeDetectionStrategy} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-recipecard',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './recipecard.component.html',
  styleUrl: './recipecard.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipecardComponent {

}
